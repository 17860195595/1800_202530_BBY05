const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/firebaseConfig-D6gRsOSx.js","assets/vendor-DQ-sQAqT.js","assets/authentication-BuFsRrDW.js"])))=>i.map(i=>d[i]);
const A="modulepreload",g=function(r){return"/"+r},p={},u=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=g(c),c in p)return;p[c]=!0;const h=c.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const l=document.createElement("link");if(l.rel=h?"stylesheet":A,h||(l.as="script"),l.crossOrigin="",l.href=c,i&&l.setAttribute("nonce",i),document.head.appendChild(l),h)return new Promise((f,v)=>{l.addEventListener("load",f),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return s.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return e().catch(o)})},w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACN0lEQVR4nO3cQU7bQBSH8W9FKoX2As0dCCxauBOQZbdcgRauVGBFewc4AIIFrF5lZZCqCjd2PPP88Pw/6e3iaOaHsSUsDEoppZRSSimllFKq6QOwAm6AJ8AmOk/ANXAKzLyRF8DvAAjmPL/S3t3O5BqR7S9slzN7FWCzNvKceEDfBNiojTxXHtCPATZqI09jULyxN2lBRtAIminNZKCfgXPgKzDvuLZ5+vwP4EXQbJw7YG/gOpfpewRN+5k8FPm1/YJn9ruHPs+83gtB8+Z8ybzeQ0Hz5uxmXm/zfYKm+wZKHyvolKAFXSZBI+i2BI2gXRdtgvZZtAnaZ9Em6Hqgvwl6ncexfbCLN2XoPtjFmzp0V+zi1QDdBbt4tUBvwg7RkIekbY3xt+yms8jQQx6SttXl2OaHixN2yPZ7nNltdTn2e8E9/IsdtgsH6Of0G1Q19KEDtKXL1LLWS0fTRydoS5ep5kZ8lOEGOdrNsDRWDuhtpg+yoMkH/T9kQZMHehOyoBkO3QVZ0AyD7oosaLafPsiCxm+KJ2gEbYJeJ+geCRpBm6DXCbpHgkbQVht07oeknwLAhoTO/ZD0KABsSOjcD0kvA8CGhM75kPTA4R/o3y10roekB8B9ANTQ0Ns+JN1Nn78MeiaHhJ7yFG/sDVqQETQTgdbr2ODBA1ovGMTnBYOnATZqI8+xB/QsvQjVKp1bYAenFpVi3wKfcW6W3jp7NfEb5CPwM10u3M5kpZRSSimllFJKKQL3B5uWegWOgCW1AAAAAElFTkSuQmCC",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvUlEQVR4nO3ZsU7DQBRE0at08PkBBF9J0kDraKXUKLYUZyPOkab3TvFcTAEAAAAAAADwUK/VR3WuFumvnKr36mVL0V8TPGB5sozOVjlUvxN8+PJk+bl2p+gmK3pwOlqdzzYYh/3teugf/YBl8nxXx60/QwAAAACAf844280xzrZvjLPtE+NskxY9OB2tjnG2+8Y4CwAAAACwnXG2m2Ocbd8YZ9snxtkmLXpwOlod42z3jXEWAAAAAAAAoAlcAKg/YFCeg92YAAAAAElFTkSuQmCC";class k extends HTMLElement{constructor(){super()}getImagePath(e){return e==="ClearWay_logo.png"?w:e==="menuBtn.png"?y:document.querySelector('script[src*="assets/"]')||document.querySelector('link[href*="assets/"]')?`/assets/${e}`:`/src/assets/images/${e}`}getComponentsPath(e){if(document.querySelector('script[src*="assets/"]')||document.querySelector('link[href*="assets/"]')){const n=document.querySelector('link[href*="assets/"][href$=".css"]');return n?n.href:"/assets/components-_ANuRjC4.css"}return`/src/components/${e}`}connectedCallback(){if(!this.shadowRoot){this.attachShadow({mode:"open"});const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",this.getComponentsPath("styles/navbar.css"));const t=this.getImagePath("ClearWay_logo.png"),n=this.getImagePath("menuBtn.png"),s=document.createElement("div");s.innerHTML=`
          <div class="nav">
        <div class="leftBox">
          <div class="imgBox">
            <img src="${t}" alt="" />
          </div>
          <div class="text">ClearWay</div>
        </div>
        <div class="rightBox">
          <div class="btn">
            <img src="${n}" alt="" />
          </div>
          <div class="menuBox">
            <div class="menuItem" id="homeBtn">Home</div>
            <div class="menuItem" id="aboutBtn">About</div>
            <div class="menuItem" id="servicesBtn">Services</div>
            <div class="menuItem" id="authBtn"></div>
          </div>
        </div>
      </div>
      `,this.shadowRoot.appendChild(e),this.shadowRoot.appendChild(s)}this.checkAuthState(),this.initMenuBtn(),this.initMenuItems()}async checkAuthState(){const e=this.shadowRoot.querySelector("#authBtn");try{const{auth:t}=await u(async()=>{const{auth:s}=await import("./firebaseConfig-D6gRsOSx.js").then(o=>o.l);return{auth:s}},__vite__mapDeps([0,1])),{onAuthStateChanged:n}=await u(async()=>{const{onAuthStateChanged:s}=await import("./vendor-DQ-sQAqT.js").then(o=>o.v);return{onAuthStateChanged:s}},[]);n(t,s=>{s?(e.textContent="Sign Out",e.id="logoutBtn",e.style.display="block",this.setupLogoutHandler()):e.style.display="none"})}catch(t){console.error("Failed to check auth state:",t),e.style.display="none"}}setupLogoutHandler(){const e=this.shadowRoot.querySelector("#logoutBtn"),t=this.shadowRoot.querySelector(".menuBox");e&&!e.hasAttribute("data-logout-handler")&&(e.setAttribute("data-logout-handler","true"),e.addEventListener("click",async n=>{n.preventDefault(),n.stopPropagation(),t.classList.remove("fade");try{const{logoutUser:s}=await u(async()=>{const{logoutUser:o}=await import("./authentication-BuFsRrDW.js");return{logoutUser:o}},__vite__mapDeps([2,0,1]));await s()}catch(s){console.error("Logout failed:",s),window.location.href="../../index.html"}}))}initMenuBtn(){const e=this.shadowRoot.querySelector(".rightBox"),t=this.shadowRoot.querySelector(".menuBox");e&&t?(e.addEventListener("click",n=>{console.log("you click the menu button"),n.stopPropagation(),t.classList.toggle("fade")}),this.handleClickOutside=n=>{this.shadowRoot.contains(n.target)||t.classList.remove("fade")},document.addEventListener("click",this.handleClickOutside)):console.error("Menu elements not found in the shadow DOM")}initMenuItems(){const e=this.shadowRoot.querySelector(".menuBox"),t=this.shadowRoot.querySelector("#homeBtn");t&&t.addEventListener("click",o=>{o.stopPropagation();const a=window.location.pathname;a.includes("/pages/")?window.location.href="./main.html":(a.endsWith("/index.html")||a.endsWith("/"))&&(window.location.href="./src/pages/main.html",console.log("home clicked"),e&&e.classList.remove("fade"))});const n=this.shadowRoot.querySelector("#aboutBtn");n&&n.addEventListener("click",o=>{o.stopPropagation(),console.log("About clicked"),e&&e.classList.remove("fade")});const s=this.shadowRoot.querySelector("#servicesBtn");s&&s.addEventListener("click",o=>{o.stopPropagation(),console.log("Services clicked"),e&&e.classList.remove("fade")})}}function d(r){return`/src/pages/${r}`}class S extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),t=document.createElement("link");t.setAttribute("rel","stylesheet");const n=document.querySelector('script[src*="assets/"]')||document.querySelector('link[href*="assets/"]');let s;if(n){const a=document.querySelector('link[href*="assets/"][href$=".css"]');s=a?a.href:"/assets/components-_ANuRjC4.css"}else s="/src/components/styles/footer.css";t.setAttribute("href",s);const o=document.createElement("div");o.innerHTML=`
         <footer class="foot">
             <div class="foot-nav">
               <a href="#" class="nav-item" data-route="search">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                   <circle cx="12" cy="10" r="3"></circle>
                 </svg>
                 <span>Map</span>
               </a>
               <a href="#" class="nav-item" data-route="favorites">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                 </svg>
                 <span>Favorites</span>
               </a>
               <a href="#" class="nav-item" data-route="traffic">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <path d="M9 10h6a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"></path>
                   <path d="M5 12h14M3 18h2M19 18h2"></path>
                   <path d="M7 20v2M17 20v2"></path>
                 </svg>
                 <span>Traffic</span>
               </a>
               <a href="#" class="nav-item" data-route="settings">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                   <circle cx="12" cy="12" r="3"></circle>
                   <path d="M12 1v6M12 17v6M5.64 5.64l4.24 4.24M14.12 14.12l4.24 4.24M1 12h6M17 12h6M5.64 18.36l4.24-4.24M14.12 9.88l4.24-4.24"></path>
                 </svg>
                 <span>Settings</span>
               </a>
             </div>
         </footer>
    `,e.appendChild(t),e.appendChild(o),this.setupNavigation(e),this.updateActiveState()}setupNavigation(e){e.querySelectorAll(".nav-item").forEach(n=>{n.addEventListener("click",s=>{s.preventDefault();const o=n.getAttribute("data-route");this.handleNavigation(o,e)})})}updateActiveState(){const e=window.location.pathname;let t="";e.includes("favorateList.html")?t="favorites":e.includes("main.html")||e.includes("search.html")?t="search":e.includes("trafficComments.html")&&(t="traffic"),this.shadowRoot.querySelectorAll(".nav-item").forEach(n=>{n.getAttribute("data-route")===t?n.classList.add("active"):n.classList.remove("active")})}handleNavigation(e,t){const n=new CustomEvent("navigate",{detail:{route:e},bubbles:!0});this.dispatchEvent(n),t.querySelectorAll(".nav-item").forEach(s=>{s.getAttribute("data-route")===e?s.classList.add("active"):s.classList.remove("active")}),e==="favorites"?window.location.href=d("favorateList.html"):e==="search"?window.location.href=d("main.html"):e==="traffic"?window.location.href=d("trafficComments.html"):e==="settings"&&(window.location.href=d("settings.html"))}}class E extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),t=document.createElement("link");t.setAttribute("rel","stylesheet");const n=document.querySelector('script[src*="assets/"]')||document.querySelector('link[href*="assets/"]');let s;if(n){const i=document.querySelector('link[href*="assets/"][href$=".css"]');s=i?i.href:"/assets/components-_ANuRjC4.css"}else s="/src/components/styles/searchbar.css";t.setAttribute("href",s);const o=this.hasAttribute("standalone"),a=document.createElement("div");a.className="search-bar-container",a.innerHTML=`
      <div class="search-input-wrapper">
        <input 
          type="text" 
          id="searchInput" 
          placeholder="Search location..." 
          autocomplete="off"
          aria-label="Search location"
        />
        <button class="search-button" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </div>
      <div class="search-suggestions" id="searchSuggestions" style="display: ${o?"block":"none"};"></div>
    `,e.appendChild(t),e.appendChild(a),o?this.setupEventListeners(e):this.setupRedirectToSearchPage(e)}setupRedirectToSearchPage(e){const t=e.querySelector("#searchInput"),n=e.querySelector(".search-input-wrapper");t.addEventListener("focus",()=>{const s=window.location.pathname;let o="";s.includes("/pages/")?o="./search.html":(s.endsWith("/index.html")||s.endsWith("/"),o="./src/pages/search.html"),window.location.href=o}),n.style.cursor="pointer",n.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation();const o=window.location.pathname;let a="";o.includes("/pages/")?a="./search.html":(o.endsWith("/index.html")||o.endsWith("/"),a="./src/pages/search.html"),window.location.href=a})}setupEventListeners(e){const t=e.querySelector("#searchInput"),n=e.querySelector(".search-button"),s=e.querySelector("#searchSuggestions");n.addEventListener("click",()=>{this.handleSearch(t.value)}),t.addEventListener("keypress",o=>{o.key==="Enter"&&(o.preventDefault(),this.handleSearch(t.value))}),t.addEventListener("input",o=>{const a=o.target.value.trim();a.length>0?this.showSuggestions(a,s):s.style.display="none"}),document.addEventListener("click",o=>{e.contains(o.target)||(s.style.display="none")})}handleSearch(e){const t=new CustomEvent("search",{detail:{query:e.trim()},bubbles:!0});this.dispatchEvent(t),console.log("Search:",e)}showSuggestions(e,t){t.innerHTML=`
      <div class="suggestion-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <span>Search "${e}"</span>
      </div>
    `,t.style.display="block"}}class B extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),t=this.getAttribute("title")||"Page",n=document.createElement("link");n.setAttribute("rel","stylesheet");const s=document.querySelector('script[src*="assets/"]')||document.querySelector('link[href*="assets/"]');let o;if(s){const i=document.querySelector('link[href*="assets/"][href$=".css"]');o=i?i.href:"/assets/components-_ANuRjC4.css"}else o="/src/components/styles/pageHeader.css";n.setAttribute("href",o);const a=document.createElement("div");a.className="page-header",a.innerHTML=`
      <button class="back-button" id="backButton" aria-label="Back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <h1 class="page-title">${t}</h1>
    `,e.appendChild(n),e.appendChild(a),this.setupBackButton(e)}setupBackButton(e){const t=e.querySelector("#backButton");t&&t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation();const s=window.location.pathname;s.includes("/pages/routeDetail.html")?window.location.href="./search.html":s.includes("/pages/search.html")||s.includes("/pages/favorateList.html")?window.location.href="./main.html":s.includes("/pages/main.html")?window.location.href="../index.html":window.history.length>1?window.history.back():window.location.href="../index.html"})}}customElements.define("app-navbar",k);customElements.define("app-footer",S);customElements.define("app-search-bar",E);customElements.define("app-page-header",B);
