// Search page functionality
let searchResultsData = null;

document.addEventListener("DOMContentLoaded", function() {
  const searchBar = document.querySelector("app-search-bar");
  
  if (searchBar) {
    // Listen for search events
    searchBar.addEventListener("search", (e) => {
      const query = e.detail.query;
      handleSearch(query);
    });

    // Focus the search input when page loads
    setTimeout(() => {
      const shadowRoot = searchBar.shadowRoot;
      if (shadowRoot) {
        const searchInput = shadowRoot.querySelector("#searchInput");
        if (searchInput) {
          searchInput.focus();
        }
      }
    }, 100);
  }
});

async function handleSearch(query) {
  const searchResults = document.getElementById("searchResults");
  
  if (!query || query.trim() === "") {
    searchResults.innerHTML = '<p>Please enter a search term</p>';
    return;
  }

  // Show loading state
  searchResults.innerHTML = '<p>Searching...</p>';

  try {
    // Use real geocoding API to query location
    const results = await searchRealLocations(query);
    searchResultsData = results;
    
    if (results.length === 0) {
      searchResults.innerHTML = '<p>No results found</p>';
      return;
    }
    
    // Display results
    displaySearchResults(results, searchResults);
  } catch (error) {
    console.error('Search error:', error);
    searchResults.innerHTML = '<p>Search failed. Please try again later</p>';
  }
}

// Use Nominatim API for real geocoding search
async function searchRealLocations(query) {
  try {
    // Build Nominatim API URL
    const nominatimUrl = `https://nominatim.openstreetmap.org/search?` +
      `q=${encodeURIComponent(query)}&` +
      `format=json&` +
      `limit=5&` +
      `countrycodes=ca&` +
      `bounded=1&` +
      `viewbox=-123.3,49.2,-123.0,49.3&` +
      `addressdetails=1`;
    
    // Detect environment: use Vite proxy in development, CORS proxy in production
    // Stricter environment detection: check port number or full hostname
    const isDev = window.location.hostname === 'localhost' || 
                  window.location.hostname === '127.0.0.1' ||
                  window.location.port === '5173' ||
                  window.location.port === '4173';
    
    if (isDev) {
      // Development: use Vite proxy
      const searchUrl = `/api/nominatim/search?` +
        `q=${encodeURIComponent(query)}&` +
        `format=json&` +
        `limit=5&` +
        `countrycodes=ca&` +
        `bounded=1&` +
        `viewbox=-123.3,49.2,-123.0,49.3&` +
        `addressdetails=1`;
      
      const response = await fetch(searchUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return normalizeSearchResults(data, query);
    } else {
      // Production: use CORS proxy service directly (Nominatim doesn't support CORS, skip direct call)
      const proxyServices = [
        // Option 1: use allorigins.win raw mode (fastest, returns raw JSON)
        {
          url: `https://api.allorigins.win/raw?url=${encodeURIComponent(nominatimUrl)}`,
          parseResponse: (data) => data,
          headers: {
            'Accept': 'application/json'
          }
        },
        // Option 2: use allorigins.win standard mode (fallback)
        {
          url: `https://api.allorigins.win/get?url=${encodeURIComponent(nominatimUrl)}`,
          parseResponse: (data) => {
            if (data && data.contents) {
              return JSON.parse(data.contents);
            }
            return data;
          },
          headers: {
            'Accept': 'application/json'
          }
        }
      ];
      
      let lastError = null;
      for (const proxy of proxyServices) {
        try {
          const response = await fetch(proxy.url, {
            method: 'GET',
            headers: proxy.headers,
            mode: 'cors'
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          let data = await response.json();
          
          // Use custom parse function
          data = proxy.parseResponse(data);
          
          // Validate data format
          if (Array.isArray(data) && data.length > 0 && data[0].display_name) {
            return normalizeSearchResults(data, query);
          }
        } catch (error) {
          console.warn(`Proxy service failed: ${proxy.url}`, error);
          lastError = error;
          continue; // Try next proxy
        }
      }
      
      // All proxies failed
      throw lastError || new Error('All proxy services failed');
    }
  } catch (error) {
    console.error('Geocoding API error:', error);
    throw error;
  }
}

// Normalize search results
function normalizeSearchResults(data, query) {
  return data.map((item, index) => ({
    name: item.display_name.split(',')[0] || query,
    address: item.display_name,
    lat: parseFloat(item.lat),
    lng: parseFloat(item.lon),
    type: getLocationType(item),
    importance: item.importance || 0
  })).sort((a, b) => b.importance - a.importance);
}

// Determine location type based on API data
function getLocationType(item) {
  const type = item.type || '';
  const classType = item.class || '';
  
  if (classType === 'amenity' || classType === 'shop' || classType === 'tourism') {
    return 'business';
  } else if (classType === 'building' && type === 'residential') {
    return 'residential';
  } else if (classType === 'highway' || classType === 'railway') {
    return 'transport';
  } else {
    return 'location';
  }
}

function displaySearchResults(results, container) {
  if (results.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <h3>No results found</h3>
        <p>Try a different search term</p>
      </div>
    `;
    return;
  }

  const searchQuery = document.querySelector('app-search-bar').shadowRoot.querySelector('#searchInput').value;
  
  container.innerHTML = `
    <div class="search-results-header">
      <h3>Search results: "${searchQuery}"</h3>
      <p>${results.length} results found</p>
    </div>
    <div class="search-results-list">
      ${results.map((result, index) => `
        <div class="search-result-item" data-index="${index}">
          <h4>${result.name}</h4>
          <p class="result-address">${formatAddress(result.address)}</p>
          <p class="result-distance">Calculating distance...</p>
        </div>
      `).join('')}
    </div>
  `;

  // Calculate and display distances for each result
  calculateDistances(results);

  // Add click handlers to result items
  container.querySelectorAll('.search-result-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      // Navigate to route detail page with the selected result
      navigateToRouteDetail(results[index]);
    });
  });
}

function calculateDistances(results) {
  // Try to get user location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        
        // Calculate distance for each result
        results.forEach((result, index) => {
          const distance = calculateDistance(userLat, userLng, result.lat, result.lng);
          displayDistance(distance, index);
        });
      },
      (error) => {
        console.log('Unable to get user location. Showing default distance');
        // Display default message if location unavailable
        results.forEach((_, index) => {
          displayDistance(null, index);
        });
      },
      {
        enableHighAccuracy: false,
        timeout: 3000,
        maximumAge: 300000
      }
    );
  } else {
    // Browser doesn't support geolocation
    results.forEach((_, index) => {
      displayDistance(null, index);
    });
  }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return distance;
}

function displayDistance(distance, index) {
  const distanceElement = document.querySelectorAll('.result-distance')[index];
  if (!distanceElement) return;
  
  if (distance === null) {
    distanceElement.textContent = '';
    distanceElement.style.display = 'none';
  } else if (distance >= 1) {
    distanceElement.textContent = `📍 ${distance.toFixed(1)}km`;
  } else {
    distanceElement.textContent = `📍 ${Math.round(distance * 1000)}m`;
  }
}

function navigateToRouteDetail(result) {
  // Store the result data for the route detail page
  sessionStorage.setItem('routeDetail', JSON.stringify(result));
  
  // Navigate to route detail page
  window.location.href = './routeDetail.html';
}

function formatAddress(address) {
  // Simplify address display, trim repeated parts
  const parts = address.split(',');
  if (parts.length > 3) {
    return parts.slice(0, 3).join(', ') + '...';
  }
  return address;
}
