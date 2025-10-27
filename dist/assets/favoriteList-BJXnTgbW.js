import"./modulepreload-polyfill-B5Qt9EMX.js";import"./components-ZI4bmTv0.js";document.addEventListener("DOMContentLoaded",function(){r()});function a(e){const o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e?e.replace(/[&<>"']/g,t=>o[t]):""}function r(){const e=JSON.parse(localStorage.getItem("favoriteRoutes")||"[]"),o=document.getElementById("favoriteRoutes");if(e.length===0){o.innerHTML=`
      <div class="empty-favorites">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <h3>No favorite routes yet</h3>
        <p>Save routes from the route detail page to see them here</p>
      </div>
    `;return}const t=e.map((i,s)=>`
    <div class="favorite-route-item">
      <div class="route-info">
        <div class="route-from">From: ${a(i.from)}</div>
        <div class="route-to">To: ${a(i.to)}</div>
        <div class="route-details">
          <div class="heart-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <div class="route-stats">${a(i.distance)} • ${a(i.duration)}</div>
        </div>
      </div>
      <button class="detail-button" onclick="viewRouteDetail(${s})">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        View Detail
      </button>
    </div>
  `).join("");o.innerHTML=t}function n(e){const t=JSON.parse(localStorage.getItem("favoriteRoutes")||"[]")[e];t&&(sessionStorage.setItem("routeDetail",JSON.stringify({name:t.to,address:t.toAddress,lat:t.toLat,lng:t.toLng})),window.location.href="./routeDetail.html")}window.viewRouteDetail=n;
