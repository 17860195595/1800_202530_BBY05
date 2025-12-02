import"./modulepreload-polyfill-B5Qt9EMX.js";import"./components-9bzrBSqj.js";let d=null;document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector("app-search-bar");t&&(t.addEventListener("search",n=>{const e=n.detail.query;h(e)}),setTimeout(()=>{const n=t.shadowRoot;if(n){const e=n.querySelector("#searchInput");e&&e.focus()}},100))});async function h(t){const n=document.getElementById("searchResults");if(!t||t.trim()===""){n.innerHTML="<p>Please enter a search term</p>";return}n.innerHTML="<p>Searching...</p>";try{const e=await u(t);if(d=e,e.length===0){n.innerHTML="<p>No results found</p>";return}f(e,n)}catch(e){console.error("Search error:",e),n.innerHTML="<p>Search failed. Please try again later</p>"}}async function u(t){try{const n=`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(t)}&format=json&limit=5&countrycodes=ca&bounded=1&viewbox=-123.3,49.2,-123.0,49.3&addressdetails=1`;if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.port==="5173"||window.location.port==="4173"){const r=`/api/nominatim/search?q=${encodeURIComponent(t)}&format=json&limit=5&countrycodes=ca&bounded=1&viewbox=-123.3,49.2,-123.0,49.3&addressdetails=1`,s=await fetch(r,{method:"GET",headers:{Accept:"application/json"}});if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);const o=await s.json();return l(o,t)}else{const r=[{url:`https://api.allorigins.win/raw?url=${encodeURIComponent(n)}`,parseResponse:o=>o,headers:{Accept:"application/json"}},{url:`https://api.allorigins.win/get?url=${encodeURIComponent(n)}`,parseResponse:o=>o&&o.contents?JSON.parse(o.contents):o,headers:{Accept:"application/json"}}];let s=null;for(const o of r)try{const a=await fetch(o.url,{method:"GET",headers:o.headers,mode:"cors"});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);let c=await a.json();if(c=o.parseResponse(c),Array.isArray(c)&&c.length>0&&c[0].display_name)return l(c,t)}catch(a){console.warn(`Proxy service failed: ${o.url}`,a),s=a;continue}throw s||new Error("All proxy services failed")}}catch(n){throw console.error("Geocoding API error:",n),n}}function l(t,n){return t.map((e,r)=>({name:e.display_name.split(",")[0]||n,address:e.display_name,lat:parseFloat(e.lat),lng:parseFloat(e.lon),type:p(e),importance:e.importance||0})).sort((e,r)=>r.importance-e.importance)}function p(t){const n=t.type||"",e=t.class||"";return e==="amenity"||e==="shop"||e==="tourism"?"business":e==="building"&&n==="residential"?"residential":e==="highway"||e==="railway"?"transport":"location"}function f(t,n){if(t.length===0){n.innerHTML=`
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
      ${t.map((r,s)=>`
        <div class="search-result-item" data-index="${s}">
          <h4>${r.name}</h4>
          <p class="result-address">${w(r.address)}</p>
          <p class="result-distance">Calculating distance...</p>
        </div>
      `).join("")}
    </div>
  `,m(t),n.querySelectorAll(".search-result-item").forEach((r,s)=>{r.addEventListener("click",()=>{g(t[s])})})}function m(t){navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{const e=n.coords.latitude,r=n.coords.longitude;t.forEach((s,o)=>{const a=y(e,r,s.lat,s.lng);i(a,o)})},n=>{console.log("Unable to get user location. Showing default distance"),t.forEach((e,r)=>{i(null,r)})},{enableHighAccuracy:!1,timeout:3e3,maximumAge:3e5}):t.forEach((n,e)=>{i(null,e)})}function y(t,n,e,r){const o=(e-t)*Math.PI/180,a=(r-n)*Math.PI/180,c=Math.sin(o/2)*Math.sin(o/2)+Math.cos(t*Math.PI/180)*Math.cos(e*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}function i(t,n){const e=document.querySelectorAll(".result-distance")[n];e&&(t===null?(e.textContent="",e.style.display="none"):t>=1?e.textContent=`📍 ${t.toFixed(1)}km`:e.textContent=`📍 ${Math.round(t*1e3)}m`)}function g(t){sessionStorage.setItem("routeDetail",JSON.stringify(t)),window.location.href="./routeDetail.html"}function w(t){const n=t.split(",");return n.length>3?n.slice(0,3).join(", ")+"...":t}
