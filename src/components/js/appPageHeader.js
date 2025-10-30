export class AppPageHeader extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Get title attribute or use default
    const title = this.getAttribute("title") || "Page";

    // Create link tag to load external CSS
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    
    // Check if we're in production build by looking for assets scripts
    const hasAssetsScript = document.querySelector('script[src*="assets/"]') || 
                           document.querySelector('link[href*="assets/"]');
    let cssPath;
    if (hasAssetsScript) {
      // Find the correct CSS file dynamically
      const cssLink = document.querySelector('link[href*="assets/"][href$=".css"]');
      cssPath = cssLink ? cssLink.href : '/assets/components-_ANuRjC4.css';
    } else {
      cssPath = '/src/components/styles/pageHeader.css';
    }
    styleLink.setAttribute("href", cssPath);

    // Create HTML
    const wrapper = document.createElement("div");
    wrapper.className = "page-header";
    wrapper.innerHTML = `
      <button class="back-button" id="backButton" aria-label="Back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <h1 class="page-title">${title}</h1>
    `;

    shadow.appendChild(styleLink);
    shadow.appendChild(wrapper);

    this.setupBackButton(shadow);
  }

  setupBackButton(shadow) {
    const backButton = shadow.querySelector("#backButton");
    
    if (backButton) {
      backButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Use reliable navigation based on current page
        // This ensures components are always loaded correctly
        const currentPath = window.location.pathname;
        
        if (currentPath.includes("/pages/routeDetail.html")) {
          window.location.href = "./search.html";
        } else if (currentPath.includes("/pages/search.html")) {
          window.location.href = "./main.html";
        } else if (currentPath.includes("/pages/favorateList.html")) {
          window.location.href = "./main.html";
        } else if (currentPath.includes("/pages/main.html")) {
          window.location.href = "../index.html";
        } else {
          // Default: try browser back, with fallback to index
          if (window.history.length > 1) {
            window.history.back();
          } else {
            window.location.href = "../index.html";
          }
        }
      });
    }
  }
}

// Component is already exported in class declaration

