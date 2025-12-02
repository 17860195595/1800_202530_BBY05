import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import"./components-9bzrBSqj.js";import{d as M,c as $,g as z,a as D}from"./firebaseConfig-D6gRsOSx.js";import{n as j,f as P}from"./trafficService-DxV7s4Yh.js";import{o as N}from"./vendor-DQ-sQAqT.js";let c,k=[],u=null,E=5;function H(){const t=document.getElementById("map");if(!t){console.error("Map container #map not found!");return}if(c){console.warn("Map already initialized, skipping...");return}if(typeof L>"u"||!L.map){console.error("Leaflet library not loaded!");return}const e=L.divIcon({className:"user-location-marker",html:'<div class="marker-pulse"></div><div class="marker-dot"></div>',iconSize:[20,20],iconAnchor:[10,10],popupAnchor:[0,-10]}),n=L.divIcon({className:"city-marker",html:'<div class="city-marker-icon">📍</div>',iconSize:[30,30],iconAnchor:[15,30],popupAnchor:[0,-30]});L.divIcon({className:"search-marker",html:'<div class="search-marker-icon">🔍</div>',iconSize:[30,30],iconAnchor:[15,30],popupAnchor:[0,-30]});try{c=L.map("map",{preferCanvas:!1}).setView([49.2827,-123.1207],12),t.style.height=t.style.height||"500px",t.style.width=t.style.width||"100%",setTimeout(()=>{c&&c.invalidateSize()},100),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(c)}catch(i){console.error("Failed to initialize map:",i);return}L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'});let o=!1;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){const s=i.coords.latitude,l=i.coords.longitude;u={lat:s,lng:l},c.setView([s,l],14),L.marker([s,l],{icon:e}).addTo(c).bindPopup("📍 You are here!").openPopup(),o=!0,I(s,l,E)},function(i){console.warn("Location failed:",i.message),a()}):(console.warn("Geolocation is not supported by this browser."),a());function a(){setTimeout(()=>{o||L.marker([49.2827,-123.1207],{icon:n}).addTo(c).bindPopup("🏔️ Welcome to Vancouver!").openPopup()},1e3)}return c.whenReady(()=>{const i=document.getElementById("map");i&&i.classList.add("map-loaded"),x(),c.on("moveend",()=>{x()}),c.on("zoomend",()=>{x()})}),c}function F(t){if(!c){console.error("Map not initialized");return}if(!t||t.trim()==="")return;const e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",n=`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(t)}&limit=1`;let o;e?o=`/api/nominatim/search?format=json&q=${encodeURIComponent(t)}&limit=1`:o=`https://api.allorigins.win/raw?url=${encodeURIComponent(n)}`,fetch(o,{headers:{Accept:"application/json"}}).then(a=>a.json()).then(a=>{if(a&&a.length>0){const i=a[0],s=parseFloat(i.lat),l=parseFloat(i.lon),m=L.divIcon({className:"search-marker",html:'<div class="search-marker-icon">🔍</div>',iconSize:[30,30],iconAnchor:[15,30],popupAnchor:[0,-30]});L.marker([s,l],{icon:m}).addTo(c).bindPopup(`📍 ${i.display_name}`).openPopup(),c.setView([s,l],14),console.log("Search successful:",i.display_name)}else alert(`Location not found: ${t}`)}).catch(a=>{console.error("Search failed:",a),alert("Search failed, please try again later")})}function J(){const t=document.getElementById("reportBtn");t&&t.addEventListener("click",function(){window.location.href="./report.html"})}document.addEventListener("DOMContentLoaded",function(){if(!document.getElementById("map")){console.error("Map container not found!");return}function e(){if(typeof L<"u"&&L.map)try{H()}catch(o){console.error("Error initializing map:",o),setTimeout(e,200)}else setTimeout(e,100)}e(),setTimeout(()=>{J()},500),setTimeout(()=>{G()},500),setTimeout(()=>{const o=document.querySelector("app-search-bar");o&&o.addEventListener("search",a=>{const i=a.detail.query;F(i)})},500),!u&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(o=>{u={lat:o.coords.latitude,lng:o.coords.longitude},I(u.lat,u.lng,E)},o=>{console.warn("Failed to get location for traffic jam alert:",o),C("Unable to get your location")});const n=document.getElementById("distanceFilter");n&&n.addEventListener("change",o=>{const a=parseInt(o.target.value);E=a;const i=document.getElementById("trafficJamSubtitle");i&&(i.textContent=`Within ${a}km radius`),u&&I(u.lat,u.lng,a)})});async function x(){if(!c||!M){console.log("Map or Firestore not available, skipping traffic reports");return}try{const t=c.getBounds(),e={minLat:t.getSouth(),maxLat:t.getNorth(),minLng:t.getWest(),maxLng:t.getEast()},n=await P(M,e,2);O(),V(n),console.log(`Loaded ${n.length} traffic reports for current view`)}catch(t){console.error("Failed to load traffic reports:",t)}}function O(){c&&(k.forEach(t=>{c.hasLayer(t)&&c.removeLayer(t)}),k=[])}function V(t){!t||!Array.isArray(t)||t.length===0||t.forEach(e=>{if(typeof e.lat!="number"||typeof e.lng!="number"){console.warn("Invalid report position:",e);return}const n=[e.lat,e.lng],o={username:e.username||"Anonymous",type:e.type||"unknown",comment:e.comment||"",createdAt:e.createdAt||e.timestamp};q(n,{tooltip:"点击查看交通状况",report:o})})}function q(t,e={}){if(!c)return console.error("Map not initialized"),null;if(!t||t.length<2)return console.error("Invalid position:",t),null;const n={tooltip:"查看交通状况",onClick:null,iconSize:[40,40],...e},o=U(n);try{const a=L.marker([t[0],t[1]],{icon:o,zIndexOffset:1e3,riseOnHover:!0}).addTo(c);return W(a,t,n),k.push(a),a}catch(a){return console.error("Error adding traffic marker:",a),null}}function U(t){const e=`
    <div style="
      width: ${t.iconSize[0]}px;
      height: ${t.iconSize[1]}px;
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
  `;return L.divIcon({className:"traffic-icon-marker",html:e,iconSize:t.iconSize,iconAnchor:[t.iconSize[0]/2,t.iconSize[1]/2]})}function W(t,e,n){t.on("click",o=>{console.log("Traffic marker clicked"),o.originalEvent.stopPropagation(),n.onClick?n.onClick(o,t,e):(Z(),n.report&&_(n.report))}),n.tooltip&&t.bindTooltip(n.tooltip,{permanent:!1,direction:"top",offset:[0,-15],className:"traffic-tooltip",opacity:.9}),t.on("mouseover",function(){this.setZIndexOffset(1500)}),t.on("mouseout",function(){this.setZIndexOffset(1e3)})}function Z(){const t=document.getElementById("trafficDetailModal");t?t.classList.add("show"):console.error("Traffic detail modal not found")}function _(t){const e=document.getElementById("trafficReporterName"),n=document.getElementById("trafficReportType"),o=document.getElementById("trafficReportComment"),a=document.getElementById("trafficReportTime");e&&(e.textContent=(t==null?void 0:t.username)||"-"),n&&(n.textContent=Y(t==null?void 0:t.type)),o&&(o.textContent=(t==null?void 0:t.comment)||"-"),a&&(a.textContent=R(t==null?void 0:t.createdAt)||"—")}function Y(t){const e={accident:"Accident",construction:"Construction"};if(!t)return"-";const n=String(t).toLowerCase();return e[n]||t}function R(t){if(!t)return"";const e=Date.now(),n=j(t);if(!n||Number.isNaN(n))return"";const o=Math.max(0,e-n),a=Math.floor(o/6e4);if(a<1)return"Just now";if(a<60)return`${a} min ago`;const i=Math.floor(a/60);return i<24?`${i} h ago`:`${Math.floor(i/24)} d ago`}function G(){const t=document.getElementById("trafficDetailModal"),e=document.getElementById("trafficCloseBtn");e&&t&&e.addEventListener("click",()=>{t.classList.remove("show")}),t&&t.addEventListener("click",n=>{n.target===t&&t.classList.remove("show")})}function K(t,e,n,o){const i=(n-t)*Math.PI/180,s=(o-e)*Math.PI/180,l=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(s/2)*Math.sin(s/2);return 6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)))}async function I(t,e,n=5){if(!M){console.warn("Firestore not available for traffic jam alert"),C("Database unavailable");return}try{Q();const o=$(M,"trafficReports"),a=await z(o),i=Date.now(),s=2*60*60*1e3,l=[];a.forEach(m=>{const r=m.data();if(typeof r.lat!="number"||typeof r.lng!="number")return;const p=K(t,e,r.lat,r.lng);if(p>n)return;const d=j(r.createAt||r.timestamp);d&&i-d>s||l.push({id:m.id,lat:r.lat,lng:r.lng,username:r.username||"Anonymous",type:r.type||"traffic",comment:r.comment||"",createdAt:d||i,distance:p})}),l.sort((m,r)=>m.distance-r.distance),X(l)}catch(o){console.error("Failed to load nearby traffic jams:",o),C("Failed to load. Please try again later.")}}function Q(){const t=document.getElementById("trafficJamContent");t&&(t.innerHTML=`
      <div class="traffic-jam-loading">
        <div class="loading-spinner"></div>
        <p>Loading nearby traffic information...</p>
      </div>
    `)}function C(t){const e=document.getElementById("trafficJamContent"),n=document.getElementById("trafficJamCount");e&&(e.innerHTML=`
      <div class="traffic-jam-error">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p>${t}</p>
      </div>
    `),n&&(n.querySelector(".count-number").textContent="0")}function X(t){const e=document.getElementById("trafficJamContent"),n=document.getElementById("trafficJamCount"),o=document.getElementById("trafficJamAlert");if(!e||!n||!o)return;const a=t.length,i=n.querySelector(".count-number");i&&(i.textContent=a),o.classList.remove("traffic-jam-low","traffic-jam-medium","traffic-jam-high");const s=o.querySelector(".traffic-jam-icon");if(a===0?(o.classList.add("traffic-jam-low"),s&&(s.innerHTML=`
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      `),e.innerHTML=`
      <div class="traffic-jam-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
        </svg>
        <p>No traffic reports nearby</p>
        <p class="traffic-jam-empty-sub">All clear!</p>
      </div>
    `):(s&&(s.innerHTML=`
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      `),a<=3?o.classList.add("traffic-jam-medium"):o.classList.add("traffic-jam-high")),a>0){const m=t.slice(0,5).map(r=>{const p={accident:"Accident",traffic:"Traffic",roadblock:"Roadblock",unknown:"Other"},d={accident:"#ff4444",traffic:"#ff8800",roadblock:"#ff6600",unknown:"#999999"},h=p[r.type]||r.type,g=d[r.type]||"#999999",w=R(r.createdAt),S=T(r.username||"Anonymous");return`
        <div class="traffic-jam-item" data-report-id="${r.id}">
          <div class="traffic-jam-item-icon" style="background-color: ${g}20; border-color: ${g};">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${g}" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="traffic-jam-item-content">
            <div class="traffic-jam-item-header">
              <span class="traffic-jam-item-type" style="color: ${g};">${h}</span>
              <span class="traffic-jam-item-distance">${r.distance.toFixed(1)}km</span>
            </div>
            <div class="traffic-jam-item-user">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>${S}</span>
            </div>
            <p class="traffic-jam-item-comment">${T(r.comment||"No details provided")}</p>
            <div class="traffic-jam-item-footer">
              <span class="traffic-jam-item-time">${w}</span>
            </div>
          </div>
        </div>
      `}).join("");e.innerHTML=`
      <div class="traffic-jam-list">
        ${m}
      </div>
      ${a>5?`<div class="traffic-jam-more">${a-5} more reports on the map</div>`:""}
    `,e.querySelectorAll(".traffic-jam-item").forEach(r=>{r.addEventListener("click",()=>{const p=r.getAttribute("data-report-id"),d=t.find(h=>h.id===p);if(d&&c){c.setView([d.lat,d.lng],15);const h=k.find(g=>{const w=g.getLatLng();return Math.abs(w.lat-d.lat)<1e-4&&Math.abs(w.lng-d.lng)<1e-4});h&&h.openPopup()}})})}}function T(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}const B=document.getElementById("welcomeTitle"),f=document.getElementById("welcomeBox"),b=document.getElementById("welcomeMsg"),y=document.getElementById("closeWelcomeBox"),v=document.getElementById("loginRedirectBtn");y&&y.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),f.classList.add("d-none"),f.style.display="none"});v&&v.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),window.location.href="./login.html"});function A(){f.classList.remove("d-none"),f.style.display="flex"}N(D,t=>{if(t){const e=t.displayName||t.email||"User";B.textContent=`Welcome, ${e}!`,b.textContent="You are successfully logged in.",v&&(v.style.display="none"),y&&(y.style.display="block"),f.classList.add("logged-in"),f.classList.remove("logged-out"),f.style.background="linear-gradient(90deg, #e6ffe6 0%, #f6fff6 100%)",f.style.borderColor="#c3e6cb",b.style.color="#155724",A()}else B.textContent="",b.textContent="Please log in to access this page.",v&&(v.style.display="inline-block"),y&&(y.style.display="none"),f.classList.add("logged-out"),f.classList.remove("logged-in"),f.style.background="linear-gradient(90deg, #fff3cd 0%, #fffaf0 100%)",f.style.borderColor="#ffeaa7",b.style.color="#856404",A()});
