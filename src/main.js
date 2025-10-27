// src/main.js
// Initialize Leaflet map with OpenStreetMap tiles
document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([49.2827, -123.1207], 12); // Vancouver
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
  
// get user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        map.setView([lat, lng], 15);
        L.marker([lat, lng]).addTo(map).bindPopup("You are here!").openPopup();
      },
      function (err) {
        console.warn("定位失败:", err.message);
      }
    );
  } else {
    console.warn("Geolocation is not supported by this browser.");
  }

  // default marker
  L.marker([49.2827, -123.1207])
    .addTo(map)
    .bindPopup("Welcome to Vancouver!")
    .openPopup();
});
