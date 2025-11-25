import"./modulepreload-polyfill-B5Qt9EMX.js";import"./components-YsRQu0Q4.js";let l=null;document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector("app-search-bar");t&&(t.addEventListener("search",n=>{const e=n.detail.query;d(e)}),setTimeout(()=>{const n=t.shadowRoot;if(n){const e=n.querySelector("#searchInput");e&&e.focus()}},100))});async function d(t){const n=document.getElementById("searchResults");if(!t||t.trim()===""){n.innerHTML="<p>Please enter a search term</p>";return}n.innerHTML="<p>Searching...</p>";try{const e=await h(t);if(l=e,e.length===0){n.innerHTML="<p>No results found</p>";return}p(e,n)}catch(e){console.error("Search error:",e),n.innerHTML="<p>Search failed. Please try again later</p>"}}async function h(t){try{const n=`/api/nominatim/search?q=${encodeURIComponent(t)}&format=json&limit=5&countrycodes=ca&bounded=1&viewbox=-123.3,49.2,-123.0,49.3&addressdetails=1`,e=await fetch(n,{method:"GET",headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return(await e.json()).map((a,s)=>({name:a.display_name.split(",")[0]||t,address:a.display_name,lat:parseFloat(a.lat),lng:parseFloat(a.lon),type:u(a),importance:a.importance||0})).sort((a,s)=>s.importance-a.importance)}catch(n){throw console.error("Geocoding API error:",n),n}}function u(t){const n=t.type||"",e=t.class||"";return e==="amenity"||e==="shop"||e==="tourism"?"business":e==="building"&&n==="residential"?"residential":e==="highway"||e==="railway"?"transport":"location"}function p(t,n){if(t.length===0){n.innerHTML=`
      <div class="empty-state">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <h3>No results found</h3>
        <p>Try a different search term</p>
      </div>
    `;return}const e=document.querySelector("app-search-bar").shadowRoot.querySelector("#searchInput").value;n.innerHTML=`
    <div class="search-results-header">
      <h3>Search results: "${e}"</h3>
      <p>${t.length} results found</p>
    </div>
    <div class="search-results-list">
      ${t.map((r,a)=>`
        <div class="search-result-item" data-index="${a}">
          <h4>${r.name}</h4>
          <p class="result-address">${y(r.address)}</p>
          <p class="result-distance">Calculating distance...</p>
        </div>
      `).join("")}
    </div>
  `,f(t),n.querySelectorAll(".search-result-item").forEach((r,a)=>{r.addEventListener("click",()=>{g(t[a])})})}function f(t){navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{const e=n.coords.latitude,r=n.coords.longitude;t.forEach((a,s)=>{const o=m(e,r,a.lat,a.lng);c(o,s)})},n=>{console.log("Unable to get user location. Showing default distance"),t.forEach((e,r)=>{c(null,r)})},{enableHighAccuracy:!1,timeout:3e3,maximumAge:3e5}):t.forEach((n,e)=>{c(null,e)})}function m(t,n,e,r){const s=(e-t)*Math.PI/180,o=(r-n)*Math.PI/180,i=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t*Math.PI/180)*Math.cos(e*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))}function c(t,n){const e=document.querySelectorAll(".result-distance")[n];e&&(t===null?(e.textContent="",e.style.display="none"):t>=1?e.textContent=`📍 ${t.toFixed(1)}km`:e.textContent=`📍 ${Math.round(t*1e3)}m`)}function g(t){sessionStorage.setItem("routeDetail",JSON.stringify(t)),window.location.href="./routeDetail.html"}function y(t){const n=t.split(",");return n.length>3?n.slice(0,3).join(", ")+"...":t}
