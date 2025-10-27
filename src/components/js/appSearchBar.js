class AppSearchBar extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Create link tag to load external CSS
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    
    // Use dynamic path based on current location
    const currentPath = window.location.pathname;
    let cssPath = "/src/components/styles/searchbar.css";
    
    if (currentPath.includes("/pages/")) {
      cssPath = "../components/styles/searchbar.css";
    } else if (currentPath.endsWith("/index.html") || currentPath.endsWith("/")) {
      cssPath = "./src/components/styles/searchbar.css";
    }
    
    styleLink.setAttribute("href", cssPath);

    // Check if this is a standalone search page (has 'standalone' attribute)
    const isStandalone = this.hasAttribute('standalone');
    
    // Create component HTML
    const wrapper = document.createElement("div");
    wrapper.className = "search-bar-container";
    wrapper.innerHTML = `
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
      <div class="search-suggestions" id="searchSuggestions" style="display: ${isStandalone ? 'block' : 'none'};"></div>
    `;

    shadow.appendChild(styleLink);
    shadow.appendChild(wrapper);

    // If not standalone, redirect to search page on click
    if (!isStandalone) {
      this.setupRedirectToSearchPage(shadow);
    } else {
      this.setupEventListeners(shadow);
    }
  }

  setupRedirectToSearchPage(shadow) {
    const searchInput = shadow.querySelector("#searchInput");
    const searchWrapper = shadow.querySelector(".search-input-wrapper");
    
    // Redirect to search page when clicking on search input
    searchInput.addEventListener("focus", () => {
      const currentPath = window.location.pathname;
      let searchPath = "";
      
      if (currentPath.includes("/pages/")) {
        // We're in pages folder, go to search.html in same folder
        searchPath = "./search.html";
      } else if (currentPath.endsWith("/index.html") || currentPath.endsWith("/")) {
        // We're in root, go to pages/search.html
        searchPath = "./src/pages/search.html";
      } else {
        // Default fallback
        searchPath = "./src/pages/search.html";
      }
      
      window.location.href = searchPath;
    });
    
    // Also make the entire wrapper clickable
    searchWrapper.style.cursor = "pointer";
    searchWrapper.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const currentPath = window.location.pathname;
      let searchPath = "";
      
      if (currentPath.includes("/pages/")) {
        searchPath = "./search.html";
      } else if (currentPath.endsWith("/index.html") || currentPath.endsWith("/")) {
        searchPath = "./src/pages/search.html";
      } else {
        searchPath = "./src/pages/search.html";
      }
      
      window.location.href = searchPath;
    });
  }

  setupEventListeners(shadow) {
    const searchInput = shadow.querySelector("#searchInput");
    const searchButton = shadow.querySelector(".search-button");
    const suggestionsContainer = shadow.querySelector("#searchSuggestions");

    // Search button click event
    searchButton.addEventListener("click", () => {
      this.handleSearch(searchInput.value);
    });

    // Enter key search
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleSearch(searchInput.value);
      }
    });

    // Show suggestions on input (TODO: implement)
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (query.length > 0) {
        this.showSuggestions(query, suggestionsContainer);
      } else {
        suggestionsContainer.style.display = "none";
      }
    });

    // Close suggestions when clicking outside
    document.addEventListener("click", (e) => {
      if (!shadow.contains(e.target)) {
        suggestionsContainer.style.display = "none";
      }
    });
  }

  handleSearch(query) {
    // Dispatch custom event
    const searchEvent = new CustomEvent("search", {
      detail: { query: query.trim() },
      bubbles: true
    });
    this.dispatchEvent(searchEvent);

    // TODO: Send to server or handle search logic
    console.log("Search:", query);
  }

  showSuggestions(query, container) {
    // TODO: Show search suggestions
    container.innerHTML = `
      <div class="suggestion-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <span>Search "${query}"</span>
      </div>
    `;
    container.style.display = "block";
  }
}

// Export component for registration
export { AppSearchBar };

