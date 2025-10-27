// src/main.js
// Initialize Leaflet map with OpenStreetMap tiles

let map; // Declare map as global variable for search functionality

function initMap() {
  // Create custom icons
  const userIcon = L.divIcon({
    className: 'user-location-marker',
    html: '<div class="marker-pulse"></div><div class="marker-dot"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10]
  });

  const cityIcon = L.divIcon({
    className: 'city-marker',
    html: '<div class="city-marker-icon">📍</div>',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  const searchIcon = L.divIcon({
    className: 'search-marker',
    html: '<div class="search-marker-icon">🔍</div>',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });

  // Initialize map
  map = L.map("map").setView([49.2827, -123.1207], 12);

  // Add OpenStreetMap layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add dark map layer option (optional)
  const darkLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'
  });

  // Try to get user location
  let userLocationAdded = false;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        map.setView([lat, lng], 14);
        
        // Add user location marker
        L.marker([lat, lng], { icon: userIcon })
          .addTo(map)
          .bindPopup("📍 You are here!")
          .openPopup();
        
        userLocationAdded = true;
      },
      function (err) {
        console.warn("Location failed:", err.message);
        // If location fails, add default marker
        addDefaultMarker();
      }
    );
  } else {
    console.warn("Geolocation is not supported by this browser.");
    addDefaultMarker();
  }

  // Delay adding default marker if user location not obtained
  function addDefaultMarker() {
    setTimeout(() => {
      if (!userLocationAdded) {
        L.marker([49.2827, -123.1207], { icon: cityIcon })
          .addTo(map)
          .bindPopup("🏔️ Welcome to Vancouver!")
          .openPopup();
      }
    }, 1000);
  }

  // Callback after map loads
  map.whenReady(() => {
    // Add loading completion effect
    const mapContainer = document.getElementById("map");
    if (mapContainer) {
      mapContainer.classList.add("map-loaded");
    }
  });

  // Return map object for external use
  return map;
}

// Search functionality
function handleSearch(query) {
  if (!map) {
    console.error("Map not initialized");
    return;
  }

  if (!query || query.trim() === "") {
    return;
  }

  // Use Nominatim API for geocoding search
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        const result = data[0];
        const lat = parseFloat(result.lat);
        const lon = parseFloat(result.lon);

        // Add search result marker
        const searchIcon = L.divIcon({
          className: 'search-marker',
          html: '<div class="search-marker-icon">🔍</div>',
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -30]
        });

        L.marker([lat, lon], { icon: searchIcon })
          .addTo(map)
          .bindPopup(`📍 ${result.display_name}`)
          .openPopup();

        // Move map to search result
        map.setView([lat, lon], 14);

        console.log("Search successful:", result.display_name);
      } else {
        alert(`Location not found: ${query}`);
      }
    })
    .catch(error => {
      console.error("Search failed:", error);
      alert("Search failed, please try again later");
    });
}

    // Report button functionality
    function initReportBtn() {
      const reportBtn = document.getElementById("reportBtn");
      
      // Handle button click - redirect to report type selection page
      if (reportBtn) {
        reportBtn.addEventListener("click", function() {
          // Redirect to report type selection page
          window.location.href = "./report.html";
        });
      }
    }

    // Initialize map when page loads
    document.addEventListener("DOMContentLoaded", function() {
      // Wait a bit for Leaflet to be fully loaded if needed
      if (typeof L !== 'undefined') {
        initMap();
      } else {
        setTimeout(initMap, 100);
      }

      // Initialize report button functionality
      setTimeout(() => {
        initReportBtn();
      }, 500);

      // Listen for search events from search component
      setTimeout(() => {
        const searchBar = document.querySelector("app-search-bar");
        if (searchBar) {
          searchBar.addEventListener("search", (e) => {
            const query = e.detail.query;
            handleSearch(query);
          });
        }
      }, 500);
    });
