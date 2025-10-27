// Route detail page functionality
let map = null;
let userLocationMarker = null;
let userLocation = null;
let destinationMarker = null;
let routePolyline = null;
let currentRouteData = null; // Store current route data globally

document.addEventListener("DOMContentLoaded", function() {
  // Initialize map
  initMap();
  
  // Load route detail from session storage
  loadRouteDetail();
  
  // Try to get user location on page load
  tryGetUserLocationOnInit();
  
  // Setup event listeners
  setupEventListeners();
  
  // Check if route is already saved in favorites
  checkIfRouteIsSaved();
});

function loadRouteDetail() {
  const routeData = sessionStorage.getItem('routeDetail');
  if (routeData) {
    const result = JSON.parse(routeData);
    currentRouteData = result; // Store globally for save functionality
    displayRouteOnMap(result);
    sessionStorage.removeItem('routeDetail'); // Clear after use
  }
}

function displayRouteOnMap(result) {
  if (!map) return;
  
  // Remove previous destination marker and route
  if (destinationMarker) {
    map.removeLayer(destinationMarker);
  }
  if (routePolyline) {
    map.removeLayer(routePolyline);
  }
  
  // Add marker for the selected location
  destinationMarker = L.marker([result.lat, result.lng]).addTo(map);
  destinationMarker.bindPopup(`
    <b>${result.name}</b><br>
    ${result.address}
  `);
  
  // Draw route if user location is available
  if (userLocation) {
    drawRoute(userLocation, [result.lat, result.lng]);
  } else {
    // Center map on destination only
    map.setView([result.lat, result.lng], 15);
  }
  
  console.log('显示路由详情:', result);
}

function drawRoute(start, end) {
  if (!map) return;
  
  // Remove previous route
  if (routePolyline) {
    map.removeLayer(routePolyline);
  }
  
  // Use OpenRouteService API to get actual route
  fetchRouteFromAPI(start, end);
}

// Fetch actual route from OpenRouteService API
async function fetchRouteFromAPI(start, end) {
  try {
    // Using OpenRouteService walking route API
    const apiUrl = `https://api.openrouteservice.org/v2/directions/foot-walking`;
    
    const requestBody = {
      coordinates: [
        [start[1], start[0]], // [lon, lat] for OpenRouteService
        [end[1], end[0]]
      ]
    };
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      throw new Error('Route API request failed');
    }
    
    const data = await response.json();
    
    if (data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      const geometry = route.geometry;
      
      // Decode polyline to get coordinates
      const coordinates = decodePolyline(geometry);
      
      // Draw the route on map
      routePolyline = L.polyline(coordinates, {
        color: '#007bff',
        weight: 4,
        opacity: 0.7
      }).addTo(map);
      
      // Fit map to show the route
      map.fitBounds(routePolyline.getBounds(), { padding: [50, 50] });
      
      // Update route info with actual distance and duration
      const distance = route.summary.distance / 1000; // Convert to km
      const duration = route.summary.duration; // in seconds
      
      updateRouteInfoFromAPI(distance, duration);
      
      console.log('Route fetched successfully:', { distance, duration });
    }
  } catch (error) {
    console.error('Failed to fetch route from API, using straight line:', error);
    
    // Fallback to straight line if API fails
    routePolyline = L.polyline([start, end], {
      color: '#007bff',
      weight: 4,
      opacity: 0.7,
      dashArray: '10, 5'
    }).addTo(map);
    
    const bounds = [[start[0], start[1]], [end[0], end[1]]];
    map.fitBounds(bounds, { padding: [50, 50] });
    
    // Use haversine distance as fallback
    updateRouteInfo(start, end);
  }
}

// Decode polyline from OpenRouteService
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
    
    const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lat += dlat;
    
    result = 0;
    shift = 0;
    
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    
    const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lng += dlng;
    
    coordinates.push([lat / factor, lng / factor]);
  }
  
  return coordinates;
}

// Update route info from API data
function updateRouteInfoFromAPI(distance, durationSeconds) {
  // Update UI
  const distanceElement = document.getElementById('routeDistance');
  const durationElement = document.getElementById('routeDuration');
  
  if (distanceElement) {
    if (distance >= 1) {
      distanceElement.textContent = `${distance.toFixed(1)}km`;
    } else {
      distanceElement.textContent = `${Math.round(distance * 1000)}m`;
    }
  }
  
  if (durationElement) {
    const minutes = Math.round(durationSeconds / 60);
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      durationElement.textContent = `${hours}h ${mins}min`;
    } else {
      durationElement.textContent = `${minutes}min`;
    }
  }
}

function updateRouteInfo(start, end) {
  // Calculate distance (Haversine formula)
  const distance = calculateDistance(start[0], start[1], end[0], end[1]);
  
  // Estimate time based on average walking speed (5 km/h)
  const timeInMinutes = Math.round((distance / 5) * 60);
  
  // Update UI
  const distanceElement = document.getElementById('routeDistance');
  const durationElement = document.getElementById('routeDuration');
  
  if (distanceElement) {
    if (distance >= 1) {
      distanceElement.textContent = `${distance.toFixed(1)}km`;
    } else {
      distanceElement.textContent = `${Math.round(distance * 1000)}m`;
    }
  }
  
  if (durationElement) {
    if (timeInMinutes >= 60) {
      const hours = Math.floor(timeInMinutes / 60);
      const minutes = timeInMinutes % 60;
      durationElement.textContent = `${hours}h ${minutes}min`;
    } else {
      durationElement.textContent = `${timeInMinutes}min`;
    }
  }
}

// Haversine formula to calculate distance between two coordinates
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

function initMap() {
  // Check if Leaflet is loaded
  if (typeof L === 'undefined') {
    console.error('Leaflet map library not loaded');
    return;
  }

  // Initialize map centered on Vancouver, BC
  map = L.map('map').setView([49.2827, -123.1207], 12);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
}

// 页面加载时尝试获取用户位置，如果失败则显示默认位置
function tryGetUserLocationOnInit() {
  if (!navigator.geolocation) {
    // 浏览器不支持地理位置，显示默认位置
    addDefaultMarker();
    return;
  }

  // 尝试获取用户位置
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      // 移除之前的用户位置标记
      if (userLocationMarker) {
        map.removeLayer(userLocationMarker);
      }
      
      // 创建用户位置标记
      userLocationMarker = L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'user-location-marker',
          html: '<div class="user-location-pulse"></div>',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        })
      }).addTo(map);
      
      // 添加用户位置圆圈
      const accuracy = position.coords.accuracy;
      L.circle([lat, lng], {
        radius: accuracy,
        color: '#007bff',
        fillColor: '#007bff',
        fillOpacity: 0.1,
        weight: 2
      }).addTo(map);
      
      // 保存用户位置
      userLocation = [lat, lng];
      
      // 居中地图到用户位置或显示两个位置
      if (destinationMarker) {
        // If destination exists, fit bounds to show both
        const bounds = [[lat, lng], [destinationMarker.getLatLng().lat, destinationMarker.getLatLng().lng]];
        map.fitBounds(bounds, { padding: [50, 50] });
      } else {
        map.setView([lat, lng], 15);
      }
      
      // 显示用户位置信息
      userLocationMarker.bindPopup(`
        <b>我的位置</b><br>
        纬度: ${lat.toFixed(6)}<br>
        经度: ${lng.toFixed(6)}<br>
        精度: ±${Math.round(accuracy)}米
      `).openPopup();
      
      // 如果有目的地，绘制路线
      if (destinationMarker) {
        drawRoute(userLocation, [destinationMarker.getLatLng().lat, destinationMarker.getLatLng().lng]);
      }
      
      console.log('成功获取用户位置');
    },
    (error) => {
      console.log('无法获取用户位置，显示默认位置:', error);
      // 获取位置失败，显示默认位置
      addDefaultMarker();
    },
    {
      enableHighAccuracy: false, // 初始化时不需要高精度
      timeout: 3000,              // 3秒超时
      maximumAge: 300000          // 5分钟缓存
    }
  );
}

// 添加默认位置标记
function addDefaultMarker() {
  const defaultMarker = L.marker([49.2827, -123.1207]).addTo(map);
  defaultMarker.bindPopup('<b>Vancouver</b><br>默认位置').openPopup();
  map.setView([49.2827, -123.1207], 12);
  console.log('显示默认位置');
}

function setupEventListeners() {
  // Location button
  const getLocationBtn = document.getElementById('getLocation');
  if (getLocationBtn) {
    getLocationBtn.addEventListener('click', () => {
      console.log('获取位置按钮被点击');
      getUserLocation();
    });
  }

  // Save button
  const saveBtn = document.getElementById('saveRoute');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      saveRoute();
    });
  }

  // Share button
  const shareBtn = document.getElementById('shareRoute');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      shareRoute();
    });
  }
}

// Check if current route is already saved in favorites
function checkIfRouteIsSaved() {
  // Wait for currentRouteData to be loaded
  if (!currentRouteData) {
    // If not loaded yet, check after a short delay
    setTimeout(checkIfRouteIsSaved, 100);
    return;
  }
  
  // Get all favorite routes from localStorage
  const favoriteRoutes = JSON.parse(localStorage.getItem('favoriteRoutes') || '[]');
  
  // Check if current route is in favorites
  const isSaved = favoriteRoutes.some(fav => 
    Math.abs(fav.toLat - currentRouteData.lat) < 0.001 && 
    Math.abs(fav.toLng - currentRouteData.lng) < 0.001
  );
  
  if (isSaved) {
    // Update button to show saved state
    const saveBtn = document.getElementById('saveRoute');
    if (saveBtn) {
      saveBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>Saved</span>';
      saveBtn.style.background = '#28a745';
    }
  }
}

function saveRoute() {
  // Check if we have current route data
  if (!currentRouteData) {
    console.log('No route data to save');
    alert('No route data available to save');
    return;
  }
  
  // Get existing favorites
  const existingFavorites = JSON.parse(localStorage.getItem('favoriteRoutes') || '[]');
  
  // Check if route already exists (by destination coordinates)
  const existingIndex = existingFavorites.findIndex(fav => 
    Math.abs(fav.toLat - currentRouteData.lat) < 0.001 && 
    Math.abs(fav.toLng - currentRouteData.lng) < 0.001
  );
  
  const saveBtn = document.getElementById('saveRoute');
  
  if (existingIndex !== -1) {
    // Route already saved, remove it
    existingFavorites.splice(existingIndex, 1);
    localStorage.setItem('favoriteRoutes', JSON.stringify(existingFavorites));
    
    // Update button to show unsaved state
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>Unsaved</span>';
    saveBtn.style.background = '#dc3545';
    
    setTimeout(() => {
      saveBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>Save</span>';
      saveBtn.style.background = '#333';
    }, 2000);
    
    console.log('Route removed from favorites');
    return;
  }
  
  // Add new route
  const userLocationInput = document.getElementById('userLocation');
  const distanceElement = document.getElementById('routeDistance');
  const durationElement = document.getElementById('routeDuration');
  
  // Get current route info
  const from = userLocationInput ? userLocationInput.value || 'Current Location' : 'Current Location';
  const to = currentRouteData.name;
  const distance = distanceElement ? distanceElement.textContent : 'Unknown';
  const duration = durationElement ? durationElement.textContent : 'Unknown';
  
  // Create favorite route object
  const favoriteRoute = {
    id: Date.now(), // Unique ID
    from: from,
    to: to,
    toAddress: currentRouteData.address,
    toLat: currentRouteData.lat,
    toLng: currentRouteData.lng,
    distance: distance,
    duration: duration,
    savedAt: new Date().toISOString()
  };
  
  existingFavorites.push(favoriteRoute);
  
  // Save to localStorage
  localStorage.setItem('favoriteRoutes', JSON.stringify(existingFavorites));
  
  // Update button UI
  const originalText = saveBtn.innerHTML;
  saveBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>Saved!</span>';
  saveBtn.style.background = '#28a745';
  
  setTimeout(() => {
    saveBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg><span>Saved</span>';
    saveBtn.style.background = '#28a745';
  }, 2000);
  
  console.log('Route saved to favorites:', favoriteRoute);
}

function shareRoute() {
  // Simulate sharing route
  if (navigator.share) {
    navigator.share({
      title: 'Route Detail',
      text: 'Check out this route!',
      url: window.location.href
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      const shareBtn = document.getElementById('shareRoute');
      const originalText = shareBtn.innerHTML;
      
      shareBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"></path><path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path><path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path><path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"></path><path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"></path></svg><span>Copied!</span>';
      shareBtn.style.background = '#28a745';
      
      setTimeout(() => {
        shareBtn.innerHTML = originalText;
        shareBtn.style.background = '#333';
      }, 2000);
    });
  }
  
  console.log('Route shared');
}

// 更新位置输入框
function updateLocationInput(lat, lng) {
  const locationInput = document.getElementById('userLocation');
  if (locationInput) {
    // 使用反向地理编码获取地址
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`)
      .then(response => response.json())
      .then(data => {
        if (data.display_name) {
          locationInput.value = data.display_name.split(',')[0] || 'Current Location';
        } else {
          locationInput.value = 'Current Location';
        }
      })
      .catch(error => {
        console.error('Reverse geocoding failed:', error);
        locationInput.value = 'Current Location';
      });
  }
}

// 获取用户当前位置
function getUserLocation() {
  if (!navigator.geolocation) {
    alert('您的浏览器不支持地理位置功能');
    return;
  }

  const getLocationBtn = document.getElementById('getLocation');
  if (getLocationBtn) {
    getLocationBtn.disabled = true;
    getLocationBtn.style.opacity = '0.6';
    // 不改变SVG内容，只调整透明度和禁用状态
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      // 移除之前的用户位置标记
      if (userLocationMarker) {
        map.removeLayer(userLocationMarker);
      }
      
      // 创建用户位置标记
      userLocationMarker = L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'user-location-marker',
          html: '<div class="user-location-pulse"></div>',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        })
      }).addTo(map);
      
      // 添加用户位置圆圈
      const accuracy = position.coords.accuracy;
      L.circle([lat, lng], {
        radius: accuracy,
        color: '#007bff',
        fillColor: '#007bff',
        fillOpacity: 0.1,
        weight: 2
      }).addTo(map);
      
      // 保存用户位置
      userLocation = [lat, lng];
      
      // 居中地图到用户位置或显示两个位置
      if (destinationMarker) {
        // If destination exists, fit bounds to show both
        const bounds = [[lat, lng], [destinationMarker.getLatLng().lat, destinationMarker.getLatLng().lng]];
        map.fitBounds(bounds, { padding: [50, 50] });
      } else {
        map.setView([lat, lng], 15);
      }
      
      // 显示用户位置信息
      userLocationMarker.bindPopup(`
        <b>我的位置</b><br>
        纬度: ${lat.toFixed(6)}<br>
        经度: ${lng.toFixed(6)}<br>
        精度: ±${Math.round(accuracy)}米
      `).openPopup();
      
      // 更新位置输入框
      updateLocationInput(lat, lng);
      
      // 如果有目的地，绘制路线
      if (destinationMarker) {
        drawRoute(userLocation, [destinationMarker.getLatLng().lat, destinationMarker.getLatLng().lng]);
      }
      
      // 恢复按钮状态
      if (getLocationBtn) {
        getLocationBtn.disabled = false;
        getLocationBtn.style.opacity = '1';
      }
    },
    (error) => {
      console.error('获取位置失败:', error);
      
      let errorMessage = '获取位置失败: ';
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage += '用户拒绝了位置请求';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage += '位置信息不可用';
          break;
        case error.TIMEOUT:
          errorMessage += '获取位置超时';
          break;
        default:
          errorMessage += '未知错误';
          break;
      }
      
      alert(errorMessage);
      
      // 恢复按钮状态
      if (getLocationBtn) {
        getLocationBtn.disabled = false;
        getLocationBtn.style.opacity = '1';
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000
    }
  );
}

