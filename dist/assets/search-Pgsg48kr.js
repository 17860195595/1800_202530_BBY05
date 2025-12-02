import"./modulepreload-polyfill-B5Qt9EMX.js";import"./components-9bzrBSqj.js";let l=null;document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("app-search-bar");e&&(e.addEventListener("search",n=>{const t=n.detail.query;d(t)}),setTimeout(()=>{const n=e.shadowRoot;if(n){const t=n.querySelector("#searchInput");t&&t.focus()}},100))});async function d(e){const n=document.getElementById("searchResults");if(!e||e.trim()===""){n.innerHTML="<p>Please enter a search term</p>";return}n.innerHTML="<p>Searching...</p>";try{const t=await h(e);if(l=t,t.length===0){n.innerHTML="<p>No results found</p>";return}p(t,n)}catch(t){console.error("Search error:",t),n.innerHTML="<p>Search failed. Please try again later</p>"}}async function h(e){try{const n=`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(e)}&format=json&limit=5&countrycodes=ca&bounded=1&viewbox=-123.3,49.2,-123.0,49.3&addressdetails=1`,t=`https://api.allorigins.win/get?url=${encodeURIComponent(n)}`,a=await fetch(t,{method:"GET",headers:{Accept:"application/json"}});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const s=await a.json();return JSON.parse(s.contents).map((r,c)=>({name:r.display_name.split(",")[0]||e,address:r.display_name,lat:parseFloat(r.lat),lng:parseFloat(r.lon),type:u(r),importance:r.importance||0})).sort((r,c)=>c.importance-r.importance)}catch(n){throw console.error("Geocoding API error:",n),n}}function u(e){const n=e.type||"",t=e.class||"";return t==="amenity"||t==="shop"||t==="tourism"?"business":t==="building"&&n==="residential"?"residential":t==="highway"||t==="railway"?"transport":"location"}function p(e,n){if(e.length===0){n.innerHTML=`
      <div class="empty-state">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <h3>No results found</h3>
        <p>Try a different search term</p>
      </div>
    `;return}const t=document.querySelector("app-search-bar").shadowRoot.querySelector("#searchInput").value;n.innerHTML=`
    <div class="search-results-header">
      <h3>Search results: "${t}"</h3>
      <p>${e.length} results found</p>
    </div>
    <div class="search-results-list">
      ${e.map((a,s)=>`
        <div class="search-result-item" data-index="${s}">
          <h4>${a.name}</h4>
          <p class="result-address">${y(a.address)}</p>
          <p class="result-distance">Calculating distance...</p>
        </div>
      `).join("")}
    </div>
  `,f(e),n.querySelectorAll(".search-result-item").forEach((a,s)=>{a.addEventListener("click",()=>{g(e[s])})})}function f(e){navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{const t=n.coords.latitude,a=n.coords.longitude;e.forEach((s,o)=>{const r=m(t,a,s.lat,s.lng);i(r,o)})},n=>{console.log("Unable to get user location. Showing default distance"),e.forEach((t,a)=>{i(null,a)})},{enableHighAccuracy:!1,timeout:3e3,maximumAge:3e5}):e.forEach((n,t)=>{i(null,t)})}function m(e,n,t,a){const o=(t-e)*Math.PI/180,r=(a-n)*Math.PI/180,c=Math.sin(o/2)*Math.sin(o/2)+Math.cos(e*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(r/2)*Math.sin(r/2);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}function i(e,n){const t=document.querySelectorAll(".result-distance")[n];t&&(e===null?(t.textContent="",t.style.display="none"):e>=1?t.textContent=`📍 ${e.toFixed(1)}km`:t.textContent=`📍 ${Math.round(e*1e3)}m`)}function g(e){sessionStorage.setItem("routeDetail",JSON.stringify(e)),window.location.href="./routeDetail.html"}function y(e){const n=e.split(",");return n.length>3?n.slice(0,3).join(", ")+"...":e}
