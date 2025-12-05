// Route detail page functionality
// ==============================================
// Import Firebase
// ==============================================
import { auth, db } from "./firebaseConfig.js";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  orderBy,
  limit,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {
  buildDestinationKey,
  isFavorite,
  addFavorite,
  removeFavoriteByKey,
} from "./favoritesService.js";
import { fetchDrivingRoute, estimateDrivingMinutes } from "./routingService.js";
import { fetchReportsWithinBounds } from "./trafficService.js";
import {
  showToast,
  showWarn,
  showSuccess,
  showError,
} from "./notifications.js";

export function favoritesRef(userId) {
  if (!userId) throw new Error("No userId provided");
  return collection(db, "users", userId, "favorites");
}

// ==============================================
// State Management
// ==============================================
let map = null;
let userLocationMarker = null;
let userLocation = null;
let destinationMarker = null;
let routePolyline = null;
let currentRouteData = null;
let trafficMarkers = [];

// ==============================================
// Initialization
// ==============================================
document.addEventListener("DOMContentLoaded", function () {
  initMap();
  loadRouteDetail();
  tryGetUserLocationOnInit();
  setupEventListeners();
  
  // Wait for auth state to be ready before checking if route is saved
  onAuthStateChanged(auth, (user) => {
    checkIfRouteIsSaved();
  });

  // Test Firebase connection
  testFirebaseConnection();
});

// ==============================================
// Map Management
// ==============================================

/** Initialize map */
function initMap() {
  if (typeof L === "undefined") {
    console.error("Leaflet map library not loaded");
    return;
  }

  map = L.map("map").setView([49.2427, -123.0007], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
}

/** Clear any map layer if exists */
function clearMapLayer(layer) {
  if (layer && map && map.hasLayer(layer)) {
    map.removeLayer(layer);
  }
}

/** Clear all traffic markers */
function clearAllTrafficMarkers() {
  if (!map) return;

  trafficMarkers.forEach((marker) => {
    if (map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });
  trafficMarkers = [];
}

// ==============================================
// Route Data Management
// ==============================================

/** Load route detail from storage */
function loadRouteDetail() {
  // Prefer sessionStorage (written on navigation)
  let routeData = sessionStorage.getItem("routeDetail");
  // Fallback to localStorage on refresh
  if (!routeData) {
    routeData = localStorage.getItem("lastRouteDetail");
  }
  if (routeData) {
    try {
      const result = JSON.parse(routeData);
      currentRouteData = result;
      displayRouteOnMap(result);
      // Persist last route detail for refresh restore
      localStorage.setItem("lastRouteDetail", JSON.stringify(result));
      // Keep sessionStorage for back navigation reuse
      // Check if route is saved after loading route data
      checkIfRouteIsSaved();
    } catch (e) {
      console.warn("Failed to parse routeDetail:", e);
    }
  } else {
    console.log("No routeDetail found in session/local storage");
    showWarn("No route data found. Please open from Search or Favorites");
  }
}

/** Display route on map */
function displayRouteOnMap(result) {
  if (!map) return;

  // Clear previous marker and route
  clearMapLayer(destinationMarker);
  clearMapLayer(routePolyline);
  clearAllTrafficMarkers();

  // Add destination marker
  destinationMarker = L.marker([result.lat, result.lng]).addTo(map);
  destinationMarker.bindPopup(`
    <b>${result.name}</b><br>
    ${result.address}
  `);

  // Update destination input field dynamically
  updateDestinationInput(result);

  // Draw route if user location exists
  if (userLocation) {
    drawRoute(userLocation, [result.lat, result.lng]);
  } else {
    map.setView([result.lat, result.lng], 15);
  }

  console.log("Display route detail:", result);
}

/** Update destination input field with route data */
function updateDestinationInput(result) {
  const locationInput = document.getElementById("userLocation");
  if (!locationInput) return;

  // Use name or address from route data, truncate if too long
  if (result.name) {
    locationInput.value = result.name.length > 40 
      ? result.name.substring(0, 37) + "..." 
      : result.name;
  } else if (result.address) {
    locationInput.value = result.address.length > 40 
      ? result.address.substring(0, 37) + "..." 
      : result.address;
  } else {
    locationInput.value = "Destination";
  }
}

// ==============================================
// Route Drawing
// ==============================================

/** Draw route */
function drawRoute(start, end) {
  if (!map) return;

  clearMapLayer(routePolyline);
  clearAllTrafficMarkers();

  fetchRouteFromAPI(start, end);
}

/** Fetch real route from OpenRouteService API */
async function fetchRouteFromAPI(start, end) {
  try {
    // Use service to get route
    const apiKey =
      "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjhjMzA4ODEzNTEyNjQ0YmJhOGY3MTQ4NTk2MzJlYWY1IiwiaCI6Im11cm11cjY0In0="; // demo key
    const result = await fetchDrivingRoute(apiKey, start, end);
    if (result && result.primary) {
      const coordinates = result.primary.coordinates;

      // Draw primary route on map
      routePolyline = L.polyline(coordinates, {
        color: "#007bff",
        weight: 4,
        opacity: 0.7,
      }).addTo(map);

      // Draw alternative routes (if any)
      if (result.alternatives && result.alternatives.length > 0) {
        drawAlternativeRoutes(
          result.alternatives.map((a) => ({
            geometry: null,
            coords: a.coordinates,
          }))
        );
      }

      // Fit map to route bounds
      map.fitBounds(routePolyline.getBounds(), { padding: [50, 50] });

      // Update route info (distance and duration)
      const distance = result.primary.distanceKm; // km
      const duration = result.primary.durationSec; // s

      updateRouteInfoFromAPI(distance, duration);

      // Fetch traffic reports for this route if Firestore available
      if (db) {
        fetchTrafficReports(start, end);
      } else {
        console.warn(
          "Firebase Firestore not available, skipping traffic reports"
        );
      }

      console.log("Route fetched successfully:", { distance, duration });
    } else {
      console.warn("No routes found in API response");
      showWarn("No route from service. Using straight line");
      drawFallbackRoute(start, end);
    }
  } catch (error) {
    console.error(
      "Failed to fetch route from API, using straight line:",
      error
    );
    console.error("Error details:", error.message);
    showWarn("Route service unavailable. Using straight line");
    drawFallbackRoute(start, end);
  }
}

/** Draw fallback straight-line route */
function drawFallbackRoute(start, end) {
  console.log("Using fallback straight line route");

  routePolyline = L.polyline([start, end], {
    color: "#007bff",
    weight: 4,
    opacity: 0.7,
    dashArray: "10, 5",
  }).addTo(map);

  const bounds = [
    [start[0], start[1]],
    [end[0], end[1]],
  ];
  map.fitBounds(bounds, { padding: [50, 50] });

  // Use Haversine distance as fallback
  updateRouteInfo(start, end);

  // Fetch traffic reports if Firestore available
  if (db) {
    fetchTrafficReports(start, end);
  } else {
    console.warn("Firebase Firestore not available, skipping traffic reports");
  }
}

/** Draw alternative routes (semi-transparent dashed) */
function drawAlternativeRoutes(routes) {
  try {
    routes.forEach((r) => {
      let coords = null;
      if (r.coords && Array.isArray(r.coords)) {
        coords = r.coords;
      } else if (r.geometry) {
        coords = decodePolyline(r.geometry);
      }
      if (!coords || coords.length === 0) return;
      L.polyline(coords, {
        color: "#6c757d",
        weight: 3,
        opacity: 0.5,
        dashArray: "6,6",
      }).addTo(map);
    });
  } catch (e) {
    console.warn("Failed to draw alternative routes:", e);
  }
}

/** Decode OpenRouteService polyline */
function decodePolyline(encoded) {
  if (!encoded) return [];

  const coordinates = [];
  const factor = 1e5;
  let index = 0;
  let lat = 0;
  let lng = 0;

  while (index < encoded.length) {
    let byte = 0;
    let shift = 0;
    let result = 0;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const dlat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    result = 0;
    shift = 0;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const dlng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    coordinates.push([lat / factor, lng / factor]);
  }

  return coordinates;
}

// ==============================================
// Route Info Updates
// ==============================================

/** Update route info from API data */
function updateRouteInfoFromAPI(distance, durationSeconds) {
  const distanceElement = document.getElementById("routeDistance");
  const durationElement = document.getElementById("routeDuration");

  if (distanceElement) {
    distanceElement.textContent = formatDistance(distance);
  }

  if (durationElement) {
    durationElement.textContent = formatDuration(durationSeconds);
  }
}

/** Update route info (Haversine) */
function updateRouteInfo(start, end) {
  const distance = calculateDistance(start[0], start[1], end[0], end[1]);
  // Fallback driving estimate: average 50 km/h
  const avgSpeedKmh = 50;
  const timeInMinutes = Math.round((distance / avgSpeedKmh) * 60);

  const distanceElement = document.getElementById("routeDistance");
  const durationElement = document.getElementById("routeDuration");

  if (distanceElement) {
    distanceElement.textContent = formatDistance(distance);
  }

  if (durationElement) {
    durationElement.textContent = formatDurationFromMinutes(timeInMinutes);
  }
}

/** Format distance */
function formatDistance(distanceKm) {
  if (distanceKm >= 1) {
    return `${distanceKm.toFixed(1)}km`;
  } else {
    return `${Math.round(distanceKm * 1000)}m`;
  }
}

/** Format duration (from seconds) */
function formatDuration(durationSeconds) {
  const minutes = Math.round(durationSeconds / 60);
  return formatDurationFromMinutes(minutes);
}

/** Format duration (from minutes) */
function formatDurationFromMinutes(minutes) {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  } else {
    return `${minutes}min`;
  }
}

/** Calculate distance using Haversine */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// ==============================================
// User Location Management
// ==============================================

/** Try to get user location on page load */
function tryGetUserLocationOnInit() {
  if (!navigator.geolocation) {
    addDefaultMarker();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => handleUserLocationSuccess(position),
    (error) => {
      console.log("Unable to get user location. Showing default:", error);
      addDefaultMarker();
    },
    {
      enableHighAccuracy: false,
      timeout: 3000,
      maximumAge: 300000,
    }
  );
}

/** Get current user location */
function getUserLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  const getLocationBtn = document.getElementById("getLocation");
  if (getLocationBtn) {
    getLocationBtn.disabled = true;
    getLocationBtn.style.opacity = "0.6";
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      handleUserLocationSuccess(position);

      // Update location input field
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      updateLocationInput(lat, lng);

      // If destination exists, redraw route
      if (destinationMarker) {
        drawRoute(userLocation, [
          destinationMarker.getLatLng().lat,
          destinationMarker.getLatLng().lng,
        ]);
      }

      // Restore button state
      if (getLocationBtn) {
        getLocationBtn.disabled = false;
        getLocationBtn.style.opacity = "1";
      }
    },
    (error) => {
      console.error("Failed to get location:", error);
      const errorMessage = getGeolocationErrorMessage(error);
      alert(errorMessage);

      if (getLocationBtn) {
        getLocationBtn.disabled = false;
        getLocationBtn.style.opacity = "1";
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000,
    }
  );
}

/** Handle successful user location retrieval */
function handleUserLocationSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  // Remove previous user location marker
  clearMapLayer(userLocationMarker);

  // Create user location marker
  userLocationMarker = createUserLocationMarker(lat, lng);

  // Add accuracy circle
  L.circle([lat, lng], {
    radius: accuracy,
    color: "#007bff",
    fillColor: "#007bff",
    fillOpacity: 0.1,
    weight: 2,
  }).addTo(map);

  // Save user location
  userLocation = [lat, lng];

  // Adjust map view
  adjustMapViewForUserLocation(lat, lng);

  // Bind popup
  userLocationMarker
    .bindPopup(
      `
        <b>My location</b><br>
        Lat: ${lat.toFixed(6)}<br>
        Lng: ${lng.toFixed(6)}<br>
        Accuracy: ±${Math.round(accuracy)}m
      `
    )
    .openPopup();

  // If destination exists, draw route
  if (destinationMarker) {
    drawRoute(userLocation, [
      destinationMarker.getLatLng().lat,
      destinationMarker.getLatLng().lng,
    ]);
  }

  console.log("User location obtained");
}

/** Create user location marker */
function createUserLocationMarker(lat, lng) {
  return L.marker([lat, lng], {
    icon: L.divIcon({
      className: "user-location-marker",
      html: '<div class="user-location-pulse"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    }),
  }).addTo(map);
}

/** Adjust map view for user location */
function adjustMapViewForUserLocation(lat, lng) {
  if (destinationMarker) {
    const bounds = [
      [lat, lng],
      [destinationMarker.getLatLng().lat, destinationMarker.getLatLng().lng],
    ];
    map.fitBounds(bounds, { padding: [50, 50] });
  } else {
    map.setView([lat, lng], 15);
  }
}

/** Get geolocation error message */
function getGeolocationErrorMessage(error) {
  let errorMessage = "Failed to get location: ";
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMessage += "Permission denied";
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage += "Position unavailable";
      break;
    case error.TIMEOUT:
      errorMessage += "Request timed out";
      break;
    default:
      errorMessage += "Unknown error";
      break;
  }
  return errorMessage;
}

/** Add default location marker */
function addDefaultMarker() {
  const defaultMarker = L.marker([49.2827, -123.1207]).addTo(map);
  defaultMarker.bindPopup("<b>Vancouver</b><br>Default location").openPopup();
  map.setView([49.2827, -123.1207], 12);
  console.log("Show default location");
}

/**
 * Update location input field
 */
function updateLocationInput(lat, lng) {
  const locationInput = document.getElementById("userLocation");
  if (!locationInput) return;

  // Detect environment: use Vite proxy in development, CORS proxy in production
  const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`;
  
  let url;
  if (isDev) {
    // Development: use Vite proxy
    url = `/api/nominatim/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`;
  } else {
    // Production: use allorigins.win raw mode (faster, returns JSON directly)
    url = `https://api.allorigins.win/raw?url=${encodeURIComponent(nominatimUrl)}`;
  }

  fetch(url, {
    headers: {
      Accept: "application/json"
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Raw mode returns JSON directly, no parsing needed
      
      if (data && data.display_name) {
        locationInput.value =
          data.display_name.split(",")[0] || "Current Location";
      } else {
        locationInput.value = "Current Location";
      }
    })
    .catch((error) => {
      console.error("Reverse geocoding failed:", error);
      locationInput.value = "Current Location";
    });
}

// ==============================================
// Traffic Reports Data Fetching
// ==============================================

/**
 * Fetch traffic reports from Firestore
 * @param {Array} start - [lat, lng] start coord
 * @param {Array} end - [lat, lng] end coord
 */
async function fetchTrafficReports(start, end) {
  try {
    console.log("Attempting to fetch traffic reports from Firestore...");

    // Ensure db initialized
    if (!db) {
      console.error("Firebase Firestore not initialized");
      return;
    }

    // Calculate route bounds
    const bounds = calculateRouteBounds(start, end);

    // Query Firestore
    const reports = await fetchReportsWithinBounds(db, bounds, 2);
    displayTrafficReports(reports);
    console.log("Traffic reports fetched from Firestore:", reports.length);
  } catch (error) {
    console.error("Failed to fetch traffic reports from Firestore:", error);
    console.error("Error details:", error.message);
    console.error("Error code:", error.code);

    // More specific hints for permission errors
    if (error.code === "permission-denied") {
      console.warn(
        "Firestore permission denied. Please check your security rules."
      );
    } else if (error.code === "unavailable") {
      console.warn(
        "Firestore service unavailable. Please check your internet connection."
      );
    }

    // No user-facing error; traffic reports are optional
  }
}

/** Calculate route bounds */
function calculateRouteBounds(start, end) {
  const lat1 = start[0];
  const lng1 = start[1];
  const lat2 = end[0];
  const lng2 = end[1];

  // Add ~10km buffer to include more reports
  const buffer = 0.1; // ~10km lat/lng buffer

  const bounds = {
    minLat: Math.min(lat1, lat2) - buffer,
    maxLat: Math.max(lat1, lat2) + buffer,
    minLng: Math.min(lng1, lng2) - buffer,
    maxLng: Math.max(lng1, lng2) + buffer,
  };

  console.log("Route bounds:", bounds);
  console.log("Start:", start, "End:", end);

  return bounds;
}

/** Check whether a report is near the route */
function isReportNearRoute(report, start, end) {
  // Use larger threshold to show more
  const maxDistance = 5; // ~5km relaxed threshold

  const distanceToStart = calculateDistance(
    report.lat,
    report.lng,
    start[0],
    start[1]
  );
  const distanceToEnd = calculateDistance(
    report.lat,
    report.lng,
    end[0],
    end[1]
  );

  const isNear = distanceToStart <= maxDistance || distanceToEnd <= maxDistance;

  console.log(`Report ${report.username || "Unknown"}:`, {
    position: [report.lat, report.lng],
    distanceToStart: distanceToStart.toFixed(2) + "km",
    distanceToEnd: distanceToEnd.toFixed(2) + "km",
    maxDistance: maxDistance + "km",
    isNear: isNear,
  });

  return isNear;
}

/**
 * Test Firebase Firestore connection
 */
async function testFirebaseConnection() {
  try {
    console.log("Testing Firebase Firestore connection...");
    console.log("Firestore instance:", db);

    if (!db) {
      console.error("Firebase Firestore not initialized");
      return;
    }

    // Try to read trafficReports collection
    const testRef = collection(db, "trafficReports");
    console.log("Test collection ref created:", testRef);

    const snapshot = await getDocs(testRef);
    console.log("Test snapshot:", snapshot);

    if (!snapshot.empty) {
      console.log("Firebase Firestore connection test successful - data found");
      console.log("Number of documents:", snapshot.size);
    } else {
      console.log(
        "Firebase Firestore connection test successful - no data in collection (this is normal)"
      );
    }
  } catch (error) {
    console.error("Firebase Firestore connection test failed:", error);
    console.error("Error details:", error.message);
    console.error("Error code:", error.code);

    // If permission error, provide more specific help
    if (error.code === "permission-denied") {
      console.warn(
        "Permission denied. Please check your Firestore security rules."
      );
      console.warn(
        "Temporary solution: Go to Firebase Console > Firestore > Rules and set:"
      );
      console.warn('rules_version = "2";');
      console.warn("service cloud.firestore {");
      console.warn("  match /databases/{database}/documents {");
      console.warn("    match /{document=**} {");
      console.warn("      allow read, write: if true;");
      console.warn("    }");
      console.warn("  }");
      console.warn("}");
    } else if (error.code === "unavailable") {
      console.warn(
        "Firestore service unavailable. Please check your internet connection and Firebase project status."
      );
    }
  }
}

/**
 * Add new traffic report to Firebase Firestore (example function)
 * @param {Object} reportData - Report data
 * @param {number} reportData.lat - Latitude
 * @param {number} reportData.lng - Longitude
 * @param {string} reportData.username - Username
 * @param {string} reportData.type - Report type
 * @param {string} reportData.comment - Comment
 */
async function addTrafficReport(reportData) {
  try {
    const trafficReportsRef = collection(db, "trafficReports");

    const report = {
      lat: reportData.lat,
      lng: reportData.lng,
      username: reportData.username || "Anonymous",
      type: reportData.type || "unknown",
      comment: reportData.comment || "",
      createAt: new Date(),
      timestamp: new Date(),
    };

    const docRef = await addDoc(trafficReportsRef, report);
    console.log("Traffic report added to Firestore:", report);
    console.log("Document ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Failed to add traffic report to Firestore:", error);
    throw error;
  }
}

/**
 * Display traffic report markers on map
 * @param {Array} reports - Report array, each report contains coordinates and report data
 */
function displayTrafficReports(reports) {
  if (!reports || !Array.isArray(reports) || reports.length === 0) {
    return;
  }

  // Clear previous traffic markers (if need to clear when fetching new data)
  // clearAllTrafficMarkers();

  reports.forEach((report) => {
    // Parse coordinates (supports [lat, lng] or { lat, lng } format)
    let position = null;
    if (Array.isArray(report.position)) {
      position = report.position;
    } else if (report.position && typeof report.position === "object") {
      position = [report.position.lat, report.position.lng];
    } else if (report.lat !== undefined && report.lng !== undefined) {
      position = [report.lat, report.lng];
    }

    if (!position || position.length < 2) {
      console.warn("Invalid report position:", report);
      return;
    }

    // Build report data object
    const reportData = {
      username: report.username,
      type: report.type,
      comment: report.comment,
      createdAt: report.createdAt || report.created_at || report.timestamp,
    };

    // Add traffic marker with report data
    addTrafficMarker(position, {
      tooltip: "Click to view traffic status",
      report: reportData,
    });
  });
}

// ==============================================
// Traffic Marker Management
// ==============================================

/**
 * Add traffic marker on route
 * @param {Array} position - [lat, lng] coordinates
 * @param {Object} options - Options configuration
 * @returns {Object|null} Marker instance
 */
function addTrafficMarker(position, options = {}) {
  if (!map) {
    console.error("Map not initialized");
    return null;
  }

  if (!position || position.length < 2) {
    console.error("Invalid position:", position);
    return null;
  }

  const defaultOptions = {
    tooltip: "View traffic",
    onClick: null,
    iconSize: [40, 40],
    ...options,
  };

  const trafficIcon = createTrafficIcon(defaultOptions);

  try {
    const marker = L.marker([position[0], position[1]], {
      icon: trafficIcon,
      zIndexOffset: 1000,
      riseOnHover: true,
    }).addTo(map);

    setupTrafficMarkerEvents(marker, position, defaultOptions);
    trafficMarkers.push(marker);

    return marker;
  } catch (error) {
    console.error("Error adding traffic marker:", error);
    return null;
  }
}

/**
 * Create traffic icon
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
    className: "traffic-icon-marker",
    html: trafficIconHtml,
    iconSize: options.iconSize,
    iconAnchor: [options.iconSize[0] / 2, options.iconSize[1] / 2],
  });
}

/**
 * Setup traffic marker events
 */
function setupTrafficMarkerEvents(marker, position, options) {
  marker.on("click", (e) => {
    console.log("Traffic marker clicked");
    e.originalEvent.stopPropagation();

    if (options.onClick) {
      options.onClick(e, marker, position);
    } else {
      showTrafficDetailModal();
      // If marker carries report data, render to modal
      if (options.report) {
        renderTrafficReport(options.report);
      }
    }
  });

  if (options.tooltip) {
    marker.bindTooltip(options.tooltip, {
      permanent: false,
      direction: "top",
      offset: [0, -15],
      className: "traffic-tooltip",
      opacity: 0.9,
    });
  }

  marker.on("mouseover", function () {
    this.setZIndexOffset(1500);
  });

  marker.on("mouseout", function () {
    this.setZIndexOffset(1000);
  });
}

// ==============================================
// Traffic Report Rendering
// ==============================================

/** Render user report into traffic modal */
function renderTrafficReport(report) {
  const nameEl = document.getElementById("trafficReporterName");
  const typeEl = document.getElementById("trafficReportType");
  const commentEl = document.getElementById("trafficReportComment");
  const timeEl = document.getElementById("trafficReportTime");

  if (nameEl) nameEl.textContent = report?.username || "-";
  if (typeEl) typeEl.textContent = mapReportTypeToLabel(report?.type);
  if (commentEl) commentEl.textContent = report?.comment || "-";
  if (timeEl) timeEl.textContent = formatTimeAgo(report?.createdAt) || "—";
}

/** Map report type to label */
function mapReportTypeToLabel(type) {
  const map = {
    accident: "Accident",
    construction: "Construction",
  };
  if (!type) return "-";
  const key = String(type).toLowerCase();
  return map[key] || type;
}

/** Normalize backend timestamp to milliseconds */
function normalizeTimestamp(input) {
  if (!input) return null;
  try {
    // Firebase Timestamp object
    if (typeof input === "object") {
      if (typeof input.toDate === "function") {
        return input.toDate().getTime();
      }
      if (typeof input.seconds === "number") {
        return (
          input.seconds * 1000 + Math.floor((input.nanoseconds || 0) / 1e6)
        );
      }
    }
    // Number: could be seconds or milliseconds
    if (typeof input === "number") {
      return input < 1e12 ? input * 1000 : input;
    }
    // Date or parseable string
    const parsed =
      input instanceof Date ? input.getTime() : new Date(input).getTime();
    return Number.isNaN(parsed) ? null : parsed;
  } catch (_e) {
    return null;
  }
}

/** Format time ago string */
function formatTimeAgo(input) {
  if (!input) return "";
  const now = Date.now();
  const ts = normalizeTimestamp(input);
  if (Number.isNaN(ts)) return "";
  const diffMs = Math.max(0, now - ts);
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin} min ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} h ago`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay} d ago`;
}

/**
 * Remove specific traffic marker
 */
function removeTrafficMarker(marker) {
  if (!map || !marker) return;

  clearMapLayer(marker);

  const index = trafficMarkers.indexOf(marker);
  if (index > -1) {
    trafficMarkers.splice(index, 1);
  }
}

// ==============================================
// Favorite Management
// ==============================================

/** Check if current route is saved */
function checkIfRouteIsSaved() {
  if (!currentRouteData) {
    setTimeout(checkIfRouteIsSaved, 100);
    return;
  }

  // Firestore: check via service
  if (!db) {
    updateSaveButtonUI(false);
    return;
  }
  
  const userId = auth.currentUser?.uid;
  if (!userId) {
    // User not logged in, button should show "Save"
    updateSaveButtonUI(false);
    return;
  }
  
  isFavorite(userId, currentRouteData.lat, currentRouteData.lng)
    .then((ok) => {
      if (ok) {
        updateSaveButtonUI(true);
      } else {
        updateSaveButtonUI(false);
      }
    })
    .catch((err) => {
      console.warn("checkIfRouteIsSaved failed:", err);
      updateSaveButtonUI(false);
    });
}

/** Save or unsave route */
async function saveRoute() {
  if (!currentRouteData) {
    console.log("No route data to save");
    alert("No route data available to save");
    return;
  }
  if (!db) {
    alert("Database not available.");
    showError("Database unavailable");
    return;
  }

  const userId = auth.currentUser?.uid;
  if (!userId) {
    alert("You must be logged in to save favorites");
    return;
  }

  const key = buildDestinationKey(currentRouteData.lat, currentRouteData.lng);

  // check if already favorite
  if (await isFavorite(userId, currentRouteData.lat, currentRouteData.lng)) {
    await removeFavoriteByKey(
      userId,
      currentRouteData.lat,
      currentRouteData.lng
    );
    updateSaveButtonUI(false, true);
    setTimeout(() => updateSaveButtonUI(false), 1500);
    console.log("Route removed from favorites (Firestore)");
    showWarn("Removed from favorites");
    return;
  }

  // add new favorite
  const fav = createFavoriteRouteObject();
  const payload = {
    ...fav,
    key,
    savedAt: new Date(),
  };
  const newDoc = await addFavorite(userId, payload);
  console.log("Route saved to favorites (Firestore):", newDoc.id, payload);
  updateSaveButtonUI(true);
  setTimeout(() => updateSaveButtonUI(true, false, true), 1500);
  showSuccess("Added to favorites");
}

/**
 * obtain favorite routes from localStorage
 */
function getFavoriteRoutes() {
  return JSON.parse(localStorage.getItem("favoriteRoutes") || "[]");
}

/**
 * save favorite routes to database
 * @param {Array} routes - favorite routes array
 */
function saveFavoriteRoutes(routes) {
  localStorage.setItem("favoriteRoutes", JSON.stringify(routes));
}

/** Create favorite route object */
function createFavoriteRouteObject() {
  const userLocationInput = document.getElementById("userLocation");
  const distanceElement = document.getElementById("routeDistance");
  const durationElement = document.getElementById("routeDuration");

  return {
    id: Date.now(),
    from: userLocationInput
      ? userLocationInput.value || "Current Location"
      : "Current Location",
    to: currentRouteData.name,
    toAddress: currentRouteData.address,
    toLat: currentRouteData.lat,
    toLng: currentRouteData.lng,
    distance: distanceElement ? distanceElement.textContent : "Unknown",
    duration: durationElement ? durationElement.textContent : "Unknown",
    savedAt: new Date().toISOString(),
  };
}

/** Update save button UI */
function updateSaveButtonUI(isSaved, isUnsaved = false, isJustSaved = false) {
  const saveBtn = document.getElementById("saveRoute");
  if (!saveBtn) return;

  if (isUnsaved) {
    saveBtn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>Unsaved</span>';
    saveBtn.style.background = "#dc3545";
  } else if (isJustSaved) {
    saveBtn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>Saved!</span>';
    saveBtn.style.background = "#28a745";
  } else if (isSaved) {
    saveBtn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>Saved</span>';
    saveBtn.style.background = "#28a745";
  } else {
    saveBtn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>Save</span>';
    saveBtn.style.background = "#333";
  }
}

/** Share route */
function shareRoute() {
  if (navigator.share) {
    navigator.share({
      title: "Route Detail",
      text: "Check out this route!",
      url: window.location.href,
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      const shareBtn = document.getElementById("shareRoute");
      const originalText = shareBtn.innerHTML;

      shareBtn.innerHTML =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"></path><path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path><path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path><path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"></path><path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"></path></svg><span>Copied!</span>';
      shareBtn.style.background = "#28a745";

      setTimeout(() => {
        shareBtn.innerHTML = originalText;
        shareBtn.style.background = "#333";
      }, 2000);
    });
  }

  console.log("Route shared");
}

// ==============================================
// Traffic Info Modal
// ==============================================

/** Show traffic detail modal */
function showTrafficDetailModal() {
  const trafficDetailModal = document.getElementById("trafficDetailModal");
  if (trafficDetailModal) {
    trafficDetailModal.classList.add("show");
  } else {
    console.error("Traffic detail modal not found");
  }
}

// ==============================================
// Event Listeners Setup
// ==============================================

/** Setup all event listeners */
function setupEventListeners() {
  setupLocationButton();
  setupSaveButton();
  setupShareButton();
  setupTrafficModal();
}

/** Setup location button */
function setupLocationButton() {
  const getLocationBtn = document.getElementById("getLocation");
  if (getLocationBtn) {
    getLocationBtn.addEventListener("click", () => {
      console.log("Get location button clicked");
      getUserLocation();
    });
  }
}

/** Setup save button */
function setupSaveButton() {
  const saveBtn = document.getElementById("saveRoute");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      saveRoute();
    });
  }
}

/** Setup share button */
function setupShareButton() {
  const shareBtn = document.getElementById("shareRoute");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      shareRoute();
    });
  }
}

/** Setup traffic modal events */
function setupTrafficModal() {
  const trafficDetailModal = document.getElementById("trafficDetailModal");
  const trafficCloseBtn = document.getElementById("trafficCloseBtn");

  if (trafficCloseBtn && trafficDetailModal) {
    trafficCloseBtn.addEventListener("click", () => {
      trafficDetailModal.classList.remove("show");
    });
  }

  if (trafficDetailModal) {
    trafficDetailModal.addEventListener("click", (e) => {
      if (e.target === trafficDetailModal) {
        trafficDetailModal.classList.remove("show");
      }
    });
  }
}
