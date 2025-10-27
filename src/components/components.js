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

// Import and register AppPageHeader
import { AppPageHeader } from './js/appPageHeader.js';
customElements.define("app-page-header", AppPageHeader);

// Export for potential future use
export { AppNavbar, AppFooter, AppSearchBar, AppPageHeader };
