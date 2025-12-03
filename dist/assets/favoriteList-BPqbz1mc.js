import"./modulepreload-polyfill-B5Qt9EMX.js";import"./components-9bzrBSqj.js";import{l as u}from"./favoritesService-ifpvRFdY.js";import{a as m}from"./firebaseConfig-D6gRsOSx.js";import"./vendor-DQ-sQAqT.js";document.addEventListener("DOMContentLoaded",function(){f()});function i(a){const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return a?a.replace(/[&<>"']/g,o=>e[o]):""}async function f(){var o;const a=document.getElementById("favoriteRoutes"),e=document.getElementById("favoritesLoading");e&&(e.style.display="flex");try{await new Promise(t=>setTimeout(t,300));const s=(o=m.currentUser)==null?void 0:o.uid;if(!s){e&&(e.style.display="none"),a.innerHTML=`
        <div class="empty-favorites">
          <h3>Please log in to view your favorite routes</h3>
        </div>
      `;return}const r=await u(s);if(e&&(e.style.display="none"),r.length===0){a.innerHTML=`
        <div class="empty-favorites">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h3>No favorite routes yet</h3>
          <p>Save routes from the route detail page to see them here</p>
        </div>
      `;return}const n=r.map(t=>`
      <div class="favorite-route-item">
        <div class="route-info">
          <div class="route-from">From: ${i(t.from)}</div>
          <div class="route-to">To: ${i(t.to)}</div>
          <div class="route-details">
            <div class="heart-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div class="route-stats">${i(t.distance)} • ${i(t.duration)}</div>
          </div>
        </div>
        <button class="detail-button" 
          data-lat="${t.toLat}" 
          data-lng="${t.toLng}" 
          data-name="${i(t.to)}" 
          data-address="${i(t.toAddress||"")}">
          
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          View Detail
        </button>
      </div>
    `).join("");a.innerHTML=n,a.querySelectorAll(".detail-button").forEach(t=>{t.addEventListener("click",()=>{const l=Number(t.getAttribute("data-lat")),d=Number(t.getAttribute("data-lng")),c=t.getAttribute("data-name"),v=t.getAttribute("data-address");sessionStorage.setItem("routeDetail",JSON.stringify({name:c,address:v,lat:l,lng:d})),window.location.href="./routeDetail.html"})})}catch(s){console.error("Failed to load favorites from Firestore:",s),e&&(e.style.display="none"),a.innerHTML=`
      <div class="empty-favorites">
        <h3>Failed to load favorites</h3>
        <p>Please try again later.</p>
      </div>
    `}}
