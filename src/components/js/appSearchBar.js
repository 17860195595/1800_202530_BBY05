class AppSearchBar extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Create link tag to load external CSS
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "/src/components/styles/searchbar.css");

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
      <div class="search-suggestions" id="searchSuggestions" style="display: none;"></div>
    `;

    shadow.appendChild(styleLink);
    shadow.appendChild(wrapper);

    this.setupEventListeners(shadow);
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

// Register component
customElements.define("app-search-bar", AppSearchBar);

