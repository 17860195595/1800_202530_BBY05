// Component registration file
// Central location to import and register all components

// Import and register AppNavbar
import { AppNavbar } from './js/appNavbar.js';
customElements.define("app-navbar", AppNavbar);

// Import and register AppFooter
import { AppFooter } from './js/appFooter.js';
customElements.define("app-footer", AppFooter);

// Import and register AppSearchBar
import { AppSearchBar } from './js/appSearchBar.js';
customElements.define("app-search-bar", AppSearchBar);

// Export for potential future use
export { AppNavbar, AppFooter, AppSearchBar };
