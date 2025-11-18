// src/main.js
// Initialize Leaflet map with OpenStreetMap tiles

// Import Firebase and traffic service
import { db } from './firebaseConfig.js';
import { fetchReportsWithinBounds } from './trafficService.js';
import { collection, getDocs } from 'firebase/firestore';
import { normalizeTimestamp } from './trafficService.js';

let map; // Declare map as global variable for search functionality
let trafficMarkers = []; // Store traffic markers for cleanup
let currentUserLocation = null; // Store current user location
let currentRadiusKm = 5; // Current radius filter in kilometers

function initMap() {
  // Check if map container exists
  const mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("Map container #map not found!");
    return;
  }
  
  // Check if map is already initialized
  if (map) {
    console.warn("Map already initialized, skipping...");
    return;
  }
  
  // Check if Leaflet is available
  if (typeof L === 'undefined' || !L.map) {
    console.error("Leaflet library not loaded!");
    return;
  }
  
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
  try {
    map = L.map("map", {
      preferCanvas: false
    }).setView([49.2827, -123.1207], 12);
    
    // Ensure map container has proper dimensions
    mapContainer.style.height = mapContainer.style.height || "500px";
    mapContainer.style.width = mapContainer.style.width || "100%";
    
    // Force map to invalidate size after a short delay
    setTimeout(() => {
      if (map) {
        map.invalidateSize();
      }
    }, 100);

    // Add OpenStreetMap layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  } catch (error) {
    console.error("Failed to initialize map:", error);
    return;
  }

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
        
        // Store user location for traffic jam alert
        currentUserLocation = { lat, lng };
        
        map.setView([lat, lng], 14);
        
        // Add user location marker
        L.marker([lat, lng], { icon: userIcon })
          .addTo(map)
          .bindPopup("📍 You are here!")
          .openPopup();
        
        userLocationAdded = true;
        
        // Load nearby traffic jams with current radius
        loadNearbyTrafficJams(lat, lng, currentRadiusKm);
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
    
    // Load traffic reports for the current map view
    loadTrafficReportsForCurrentView();
    
    // Update traffic reports when map moves or zooms
    map.on('moveend', () => {
      loadTrafficReportsForCurrentView();
    });
    
    map.on('zoomend', () => {
      loadTrafficReportsForCurrentView();
    });
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

  // Use Nominatim API for geocoding search (通过代理避免CORS)
  const url = `/api/nominatim/search?format=json&q=${encodeURIComponent(query)}&limit=1`;

  fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  })
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
      // Ensure map container exists
      const mapContainer = document.getElementById("map");
      if (!mapContainer) {
        console.error("Map container not found!");
        return;
      }
      
      // Wait for Leaflet to be fully loaded
      function tryInitMap() {
        if (typeof L !== 'undefined' && L.map) {
          try {
            initMap();
          } catch (error) {
            console.error("Error initializing map:", error);
            // Retry after a short delay
            setTimeout(tryInitMap, 200);
          }
        } else {
          // Retry if Leaflet not loaded yet
          setTimeout(tryInitMap, 100);
        }
      }
      
      tryInitMap();

      // Initialize report button functionality
      setTimeout(() => {
        initReportBtn();
      }, 500);

      // Initialize traffic modal
      setTimeout(() => {
        setupTrafficModal();
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
      
      // Try to get location for traffic jam alert if not already obtained
      if (!currentUserLocation && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            currentUserLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            loadNearbyTrafficJams(currentUserLocation.lat, currentUserLocation.lng, currentRadiusKm);
          },
          (error) => {
            console.warn('Failed to get location for traffic jam alert:', error);
            showTrafficJamError('Unable to get your location');
          }
        );
      }
      
      // Setup distance filter event listener
      const distanceFilter = document.getElementById('distanceFilter');
      if (distanceFilter) {
        distanceFilter.addEventListener('change', (e) => {
          const selectedRadius = parseInt(e.target.value);
          currentRadiusKm = selectedRadius;
          
          // Update subtitle
          const subtitle = document.getElementById('trafficJamSubtitle');
          if (subtitle) {
            subtitle.textContent = `Within ${selectedRadius}km radius`;
          }
          
          // Reload traffic jams with new radius
          if (currentUserLocation) {
            loadNearbyTrafficJams(currentUserLocation.lat, currentUserLocation.lng, selectedRadius);
          }
        });
      }
    });

// ==============================================
// Traffic Reports Management
// ==============================================

/**
 * Load traffic reports for the current map view
 */
async function loadTrafficReportsForCurrentView() {
  if (!map || !db) {
    console.log('Map or Firestore not available, skipping traffic reports');
    return;
  }

  try {
    // Get current map bounds
    const bounds = map.getBounds();
    const boundsData = {
      minLat: bounds.getSouth(),
      maxLat: bounds.getNorth(),
      minLng: bounds.getWest(),
      maxLng: bounds.getEast()
    };

    // Fetch traffic reports within bounds
    const reports = await fetchReportsWithinBounds(db, boundsData, 2);
    
    // Clear existing markers
    clearAllTrafficMarkers();
    
    // Display new traffic reports
    displayTrafficReports(reports);
    
    console.log(`Loaded ${reports.length} traffic reports for current view`);
  } catch (error) {
    console.error('Failed to load traffic reports:', error);
  }
}

/**
 * Clear all traffic markers from the map
 */
function clearAllTrafficMarkers() {
  if (!map) return;
  
  trafficMarkers.forEach(marker => {
    if (map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });
  trafficMarkers = [];
}

/**
 * Display traffic reports on the map
 * @param {Array} reports - Array of traffic report objects
 */
function displayTrafficReports(reports) {
  if (!reports || !Array.isArray(reports) || reports.length === 0) {
    return;
  }
  
  reports.forEach(report => {
    // Validate report position
    if (typeof report.lat !== 'number' || typeof report.lng !== 'number') {
      console.warn('Invalid report position:', report);
      return;
    }
    
    const position = [report.lat, report.lng];
    
    // Build report data object
    const reportData = {
      username: report.username || 'Anonymous',
      type: report.type || 'unknown',
      comment: report.comment || '',
      createdAt: report.createdAt || report.timestamp
    };
    
    // Add traffic marker
    addTrafficMarker(position, {
      tooltip: '点击查看交通状况',
      report: reportData
    });
  });
}

/**
 * Add a traffic marker to the map
 * @param {Array} position - [lat, lng] coordinates
 * @param {Object} options - Marker options
 * @returns {Object|null} Marker instance
 */
function addTrafficMarker(position, options = {}) {
  if (!map) {
    console.error('Map not initialized');
    return null;
  }
  
  if (!position || position.length < 2) {
    console.error('Invalid position:', position);
    return null;
  }
  
  const defaultOptions = {
    tooltip: '查看交通状况',
    onClick: null,
    iconSize: [40, 40],
    ...options
  };
  
  const trafficIcon = createTrafficIcon(defaultOptions);
  
  try {
    const marker = L.marker([position[0], position[1]], {
      icon: trafficIcon,
      zIndexOffset: 1000,
      riseOnHover: true
    }).addTo(map);
    
    setupTrafficMarkerEvents(marker, position, defaultOptions);
    trafficMarkers.push(marker);
    
    return marker;
  } catch (error) {
    console.error('Error adding traffic marker:', error);
    return null;
  }
}

/**
 * Create traffic icon
 * @param {Object} options - Icon options
 * @returns {Object} Leaflet icon
 */
function createTrafficIcon(options) {
  const trafficIconHtml = `
    <div style="
      width: ${options.iconSize[0]}px;
      height: ${options.iconSize[1]}px;
      background-color: #ff4444;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.5);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
      font-weight: bold;
      transition: transform 0.2s ease;
    ">🚦</div>
  `;
  
  return L.divIcon({
    className: 'traffic-icon-marker',
    html: trafficIconHtml,
    iconSize: options.iconSize,
    iconAnchor: [options.iconSize[0] / 2, options.iconSize[1] / 2]
  });
}

/**
 * Setup traffic marker events
 * @param {Object} marker - Leaflet marker
 * @param {Array} position - [lat, lng] coordinates
 * @param {Object} options - Marker options
 */
function setupTrafficMarkerEvents(marker, position, options) {
  marker.on('click', (e) => {
    console.log('Traffic marker clicked');
    e.originalEvent.stopPropagation();
    
    if (options.onClick) {
      options.onClick(e, marker, position);
    } else {
      showTrafficDetailModal();
      // 如果标记携带报告数据，则渲染到模态框
      if (options.report) {
        renderTrafficReport(options.report);
      }
    }
  });
  
  if (options.tooltip) {
    marker.bindTooltip(options.tooltip, {
      permanent: false,
      direction: 'top',
      offset: [0, -15],
      className: 'traffic-tooltip',
      opacity: 0.9
    });
  }
  
  marker.on('mouseover', function() {
    this.setZIndexOffset(1500);
  });
  
  marker.on('mouseout', function() {
    this.setZIndexOffset(1000);
  });
}

/**
 * Format timestamp for display
 * @param {number|Date} timestamp - Timestamp in milliseconds or Date object
 * @returns {string} Formatted date string
 */
function formatTimestamp(timestamp) {
  if (!timestamp) return '';
  
  try {
    const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp;
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return '刚刚';
    if (diffMins < 60) return `${diffMins}分钟前`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}小时前`;
    
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays}天前`;
    
    return date.toLocaleDateString('zh-CN');
  } catch (error) {
    return '';
  }
}

// ==============================================
// Traffic Detail Modal
// ==============================================

/**
 * Show traffic detail modal
 */
function showTrafficDetailModal() {
  const trafficDetailModal = document.getElementById('trafficDetailModal');
  if (trafficDetailModal) {
    trafficDetailModal.classList.add('show');
  } else {
    console.error('Traffic detail modal not found');
  }
}

/**
 * Render traffic report into modal
 * @param {Object} report - Traffic report object
 */
function renderTrafficReport(report) {
  const nameEl = document.getElementById('trafficReporterName');
  const typeEl = document.getElementById('trafficReportType');
  const commentEl = document.getElementById('trafficReportComment');
  const timeEl = document.getElementById('trafficReportTime');
  
  if (nameEl) nameEl.textContent = report?.username || '-';
  if (typeEl) typeEl.textContent = mapReportTypeToLabel(report?.type);
  if (commentEl) commentEl.textContent = report?.comment || '-';
  if (timeEl) timeEl.textContent = formatTimeAgo(report?.createdAt) || '—';
}

/**
 * Map report type to label
 * @param {string} type - Report type
 * @returns {string} Formatted label
 */
function mapReportTypeToLabel(type) {
  const map = {
    accident: 'Accident',
    construction: 'Construction'
  };
  if (!type) return '-';
  const key = String(type).toLowerCase();
  return map[key] || type;
}

/**
 * Format time ago string
 * @param {any} input - Timestamp input
 * @returns {string} Formatted time ago string
 */
function formatTimeAgo(input) {
  if (!input) return '';
  const now = Date.now();
  const ts = normalizeTimestamp(input);
  if (!ts || Number.isNaN(ts)) return '';
  const diffMs = Math.max(0, now - ts);
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return 'Just now';
  if (diffMin < 60) return `${diffMin} min ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} h ago`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay} d ago`;
}

/**
 * Setup traffic modal event listeners
 */
function setupTrafficModal() {
  const trafficDetailModal = document.getElementById('trafficDetailModal');
  const trafficCloseBtn = document.getElementById('trafficCloseBtn');

  if (trafficCloseBtn && trafficDetailModal) {
    trafficCloseBtn.addEventListener('click', () => {
      trafficDetailModal.classList.remove('show');
    });
  }

  if (trafficDetailModal) {
    trafficDetailModal.addEventListener('click', (e) => {
      if (e.target === trafficDetailModal) {
        trafficDetailModal.classList.remove('show');
      }
    });
  }
}

// ==============================================
// Nearby Traffic Jam Alert (5km radius)
// ==============================================

/**
 * Calculate distance between two coordinates in kilometers
 * @param {number} lat1 - Latitude of first point
 * @param {number} lon1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lon2 - Longitude of second point
 * @returns {number} Distance in kilometers
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

/**
 * Load traffic jams within specified radius of user location
 * @param {number} userLat - User latitude
 * @param {number} userLng - User longitude
 * @param {number} radiusKm - Radius in kilometers (default: 5)
 */
async function loadNearbyTrafficJams(userLat, userLng, radiusKm = 5) {
  if (!db) {
    console.warn('Firestore not available for traffic jam alert');
    showTrafficJamError('Database unavailable');
    return;
  }

  try {
    // Show loading state
    showTrafficJamLoading();

    // Get all traffic reports (we'll filter by distance)
    const trafficReportsRef = collection(db, 'trafficReports');
    const snapshot = await getDocs(trafficReportsRef);
    
    const now = Date.now();
    const maxAgeMs = 2 * 60 * 60 * 1000; // 2 hours
    
    const nearbyReports = [];
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (typeof data.lat !== 'number' || typeof data.lng !== 'number') return;
      
      // Calculate distance
      const distance = calculateDistance(userLat, userLng, data.lat, data.lng);
      if (distance > radiusKm) return;
      
      // Check if report is recent (within 2 hours)
      const createdAt = normalizeTimestamp(data.createAt || data.timestamp);
      if (createdAt && now - createdAt > maxAgeMs) return;
      
      nearbyReports.push({
        id: doc.id,
        lat: data.lat,
        lng: data.lng,
        username: data.username || 'Anonymous',
        type: data.type || 'traffic',
        comment: data.comment || '',
        createdAt: createdAt || now,
        distance: distance
      });
    });
    
    // Sort by distance (closest first)
    nearbyReports.sort((a, b) => a.distance - b.distance);
    
    // Display results
    displayTrafficJamAlert(nearbyReports);
    
  } catch (error) {
    console.error('Failed to load nearby traffic jams:', error);
    showTrafficJamError('Failed to load. Please try again later.');
  }
}

/**
 * Show loading state in traffic jam alert
 */
function showTrafficJamLoading() {
  const content = document.getElementById('trafficJamContent');
  if (content) {
    content.innerHTML = `
      <div class="traffic-jam-loading">
        <div class="loading-spinner"></div>
        <p>Loading nearby traffic information...</p>
      </div>
    `;
  }
}

/**
 * Show error state in traffic jam alert
 * @param {string} message - Error message
 */
function showTrafficJamError(message) {
  const content = document.getElementById('trafficJamContent');
  const countEl = document.getElementById('trafficJamCount');
  
  if (content) {
    content.innerHTML = `
      <div class="traffic-jam-error">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p>${message}</p>
      </div>
    `;
  }
  
  if (countEl) {
    countEl.querySelector('.count-number').textContent = '0';
  }
}

/**
 * Display traffic jam alert with nearby reports
 * @param {Array} reports - Array of nearby traffic reports
 */
function displayTrafficJamAlert(reports) {
  const content = document.getElementById('trafficJamContent');
  const countEl = document.getElementById('trafficJamCount');
  const alertEl = document.getElementById('trafficJamAlert');
  
  if (!content || !countEl || !alertEl) return;
  
  const count = reports.length;
  const countNumber = countEl.querySelector('.count-number');
  if (countNumber) {
    countNumber.textContent = count;
  }
  
  // Update alert class based on count
  alertEl.classList.remove('traffic-jam-low', 'traffic-jam-medium', 'traffic-jam-high');
  const iconEl = alertEl.querySelector('.traffic-jam-icon');
  
  if (count === 0) {
    alertEl.classList.add('traffic-jam-low');
    // Update icon to green checkmark when no reports
    if (iconEl) {
      iconEl.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      `;
    }
    content.innerHTML = `
      <div class="traffic-jam-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
        </svg>
        <p>No traffic reports nearby</p>
        <p class="traffic-jam-empty-sub">All clear!</p>
      </div>
    `;
  } else {
    // Restore warning icon when there are reports
    if (iconEl) {
      iconEl.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      `;
    }
    if (count <= 3) {
      alertEl.classList.add('traffic-jam-medium');
    } else {
      alertEl.classList.add('traffic-jam-high');
    }
  }
  
  if (count > 0) {
    // Show top 5 closest reports
    const topReports = reports.slice(0, 5);
    const reportsHTML = topReports.map(report => {
      const typeLabels = {
        'accident': 'Accident',
        'traffic': 'Traffic',
        'roadblock': 'Roadblock',
        'unknown': 'Other'
      };
      const typeColors = {
        'accident': '#ff4444',
        'traffic': '#ff8800',
        'roadblock': '#ff6600',
        'unknown': '#999999'
      };
      
      const typeLabel = typeLabels[report.type] || report.type;
      const typeColor = typeColors[report.type] || '#999999';
      const timeAgo = formatTimeAgo(report.createdAt);
      const username = escapeHtml(report.username || 'Anonymous');
      
      return `
        <div class="traffic-jam-item" data-report-id="${report.id}">
          <div class="traffic-jam-item-icon" style="background-color: ${typeColor}20; border-color: ${typeColor};">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${typeColor}" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="traffic-jam-item-content">
            <div class="traffic-jam-item-header">
              <span class="traffic-jam-item-type" style="color: ${typeColor};">${typeLabel}</span>
              <span class="traffic-jam-item-distance">${report.distance.toFixed(1)}km</span>
            </div>
            <div class="traffic-jam-item-user">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>${username}</span>
            </div>
            <p class="traffic-jam-item-comment">${escapeHtml(report.comment || 'No details provided')}</p>
            <div class="traffic-jam-item-footer">
              <span class="traffic-jam-item-time">${timeAgo}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    content.innerHTML = `
      <div class="traffic-jam-list">
        ${reportsHTML}
      </div>
      ${count > 5 ? `<div class="traffic-jam-more">${count - 5} more reports on the map</div>` : ''}
    `;
    
    // Add click handlers to items
    content.querySelectorAll('.traffic-jam-item').forEach(item => {
      item.addEventListener('click', () => {
        const reportId = item.getAttribute('data-report-id');
        const report = reports.find(r => r.id === reportId);
        if (report && map) {
          // Center map on the report location
          map.setView([report.lat, report.lng], 15);
          // Find and trigger the marker click if it exists
          const marker = trafficMarkers.find(m => {
            const pos = m.getLatLng();
            return Math.abs(pos.lat - report.lat) < 0.0001 && 
                   Math.abs(pos.lng - report.lng) < 0.0001;
          });
          if (marker) {
            marker.openPopup();
          }
        }
      });
    });
  }
}

/**
 * Escape HTML to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped HTML
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
