/**
 * Navigation helper utility
 * Provides centralized path management for the application
 */

/**
 * Get the correct path to a page
 * @param {string} pageName - The page file name (e.g., 'main.html')
 * @returns {string} The correct path to the page
 */
export function getPagePath(pageName) {
  const pathname = window.location.pathname;
  
  // If we're in the pages folder
  if (pathname.includes('/pages/')) {
    return `./${pageName}`;
  }
  
  // If we're at root
  if (pathname.endsWith('/index.html') || pathname === '/' || pathname.endsWith('index.html')) {
    return `./src/pages/${pageName}`;
  }
  
  // Default
  return `./src/pages/${pageName}`;
}

/**
 * Get the correct path to index.html
 * @returns {string} The correct path to index
 */
export function getIndexPath() {
  const pathname = window.location.pathname;
  
  if (pathname.includes('/pages/')) {
    return '../index.html';
  }
  
  return './index.html';
}

/**
 * Get the correct path to main.html
 * @returns {string} The correct path to main
 */
export function getMainPath() {
  return getPagePath('main.html');
}

/**
 * Get the correct path to a component asset
 * @param {string} assetPath - The component asset path (e.g., 'styles/footer.css')
 * @returns {string} The correct path to the asset
 */
export function getComponentPath(assetPath) {
  const pathname = window.location.pathname;
  
  if (pathname.includes('/pages/')) {
    return `../components/${assetPath}`;
  }
  
  return `./src/components/${assetPath}`;
}

/**
 * Get the correct path to an image
 * @param {string} filename - The image filename
 * @returns {string} The correct path to the image
 */
export function getImagePath(filename) {
  const pathname = window.location.pathname;
  
  if (pathname.includes('/pages/')) {
    return `../assets/images/${filename}`;
  }
  
  return `./src/assets/images/${filename}`;
}

/**
 * Navigate to a page
 * @param {string} pageName - The page file name
 */
export function navigateToPage(pageName) {
  window.location.href = getPagePath(pageName);
}

/**
 * Navigate back to index
 */
export function navigateToIndex() {
  window.location.href = getIndexPath();
}

