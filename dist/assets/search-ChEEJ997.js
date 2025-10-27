import"./modulepreload-polyfill-B5Qt9EMX.js";import"./components-ZI4bmTv0.js";let l=null;document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("app-search-bar");e&&(e.addEventListener("search",n=>{const t=n.detail.query;h(t)}),setTimeout(()=>{const n=e.shadowRoot;if(n){const t=n.querySelector("#searchInput");t&&t.focus()}},100))});async function h(e){const n=document.getElementById("searchResults");if(!e||e.trim()===""){n.innerHTML="<p>请输入搜索内容</p>";return}n.innerHTML="<p>搜索中...</p>";try{const t=await d(e);if(l=t,t.length===0){n.innerHTML="<p>未找到相关位置</p>";return}p(t,n)}catch(t){console.error("搜索错误:",t),n.innerHTML="<p>搜索失败，请稍后重试</p>"}}async function d(e){try{const n=`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(e)}&format=json&limit=5&countrycodes=ca&bounded=1&viewbox=-123.3,49.2,-123.0,49.3&addressdetails=1`,t=await fetch(n,{headers:{"User-Agent":"ClearWay Search App"}});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return(await t.json()).map((a,r)=>({name:a.display_name.split(",")[0]||e,address:a.display_name,lat:parseFloat(a.lat),lng:parseFloat(a.lon),type:u(a),importance:a.importance||0})).sort((a,r)=>r.importance-a.importance)}catch(n){throw console.error("地理编码API错误:",n),n}}function u(e){const n=e.type||"",t=e.class||"";return t==="amenity"||t==="shop"||t==="tourism"?"business":t==="building"&&n==="residential"?"residential":t==="highway"||t==="railway"?"transport":"location"}function p(e,n){if(e.length===0){n.innerHTML=`
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
      <h3>搜索结果: "${t}"</h3>
      <p>找到 ${e.length} 个结果</p>
    </div>
    <div class="search-results-list">
      ${e.map((s,a)=>`
        <div class="search-result-item" data-index="${a}">
          <h4>${s.name}</h4>
          <p class="result-address">${g(s.address)}</p>
          <p class="result-distance">计算距离中...</p>
        </div>
      `).join("")}
    </div>
  `,f(e),n.querySelectorAll(".search-result-item").forEach((s,a)=>{s.addEventListener("click",()=>{y(e[a])})})}function f(e){navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{const t=n.coords.latitude,s=n.coords.longitude;e.forEach((a,r)=>{const o=m(t,s,a.lat,a.lng);c(o,r)})},n=>{console.log("无法获取用户位置，显示默认距离"),e.forEach((t,s)=>{c(null,s)})},{enableHighAccuracy:!1,timeout:3e3,maximumAge:3e5}):e.forEach((n,t)=>{c(null,t)})}function m(e,n,t,s){const r=(t-e)*Math.PI/180,o=(s-n)*Math.PI/180,i=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))}function c(e,n){const t=document.querySelectorAll(".result-distance")[n];t&&(e===null?(t.textContent="",t.style.display="none"):e>=1?t.textContent=`📍 ${e.toFixed(1)}km`:t.textContent=`📍 ${Math.round(e*1e3)}m`)}function y(e){sessionStorage.setItem("routeDetail",JSON.stringify(e)),window.location.href="./routeDetail.html"}function g(e){const n=e.split(",");return n.length>3?n.slice(0,3).join(", ")+"...":e}
