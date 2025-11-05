// src/main.js
// Initialize Leaflet map with OpenStreetMap tiles

// Import Firebase and traffic service
import { db } from './firebaseConfig.js';
import { fetchReportsWithinBounds } from './trafficService.js';

let map; // Declare map as global variable for search functionality
let trafficMarkers = []; // Store traffic markers for cleanup

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
 * Normalize timestamp to milliseconds
 * @param {any} input - Timestamp input (various formats)
 * @returns {number|null} Timestamp in milliseconds
 */
function normalizeTimestamp(input) {
  if (!input) return null;
  try {
    // Firebase Timestamp 对象
    if (typeof input === 'object') {
      if (typeof input.toDate === 'function') {
        return input.toDate().getTime();
      }
      if (typeof input.seconds === 'number') {
        return (input.seconds * 1000) + Math.floor((input.nanoseconds || 0) / 1e6);
      }
    }
    // 数字：可能是秒或毫秒
    if (typeof input === 'number') {
      return input < 1e12 ? input * 1000 : input;
    }
    // Date 或可解析字符串
    const parsed = (input instanceof Date) ? input.getTime() : new Date(input).getTime();
    return Number.isNaN(parsed) ? null : parsed;
  } catch (_e) {
    return null;
  }
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
