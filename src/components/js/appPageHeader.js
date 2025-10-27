class AppPageHeader extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Get title attribute or use default
    const title = this.getAttribute("title") || "Page";

    // Create link tag to load external CSS
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    
    const pathname = window.location.pathname;
    const cssPath = pathname.includes('/pages/') 
      ? "../components/styles/pageHeader.css" 
      : "./src/components/styles/pageHeader.css";
    
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
      backButton.addEventListener("click", () => {
        // Determine where to go back based on the page
        const currentPath = window.location.pathname;
        
        if (currentPath.includes("/pages/search.html")) {
          // From search page, go back to main or index
          if (document.referrer && document.referrer.includes("main.html")) {
            window.location.href = "./main.html";
          } else if (document.referrer && document.referrer.includes("index.html")) {
            window.location.href = "../index.html";
          } else {
            window.history.back();
          }
        } else if (currentPath.includes("/pages/main.html")) {
          // From main page, go back to index
          window.location.href = "../index.html";
        } else {
          // Default: use browser back
          window.history.back();
        }
      });
    }
  }
}

// Export component for registration
export { AppPageHeader };

