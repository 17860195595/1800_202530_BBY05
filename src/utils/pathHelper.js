// Path helper utility for handling different deployment paths

/**
 * Get the base path for the application
 * This handles different deployment scenarios:
 * - Local development: root directory
 * - Deployed to subdirectory: /subdirectory/
 */
export function getBasePath() {
  const pathname = window.location.pathname;
  
  // If we're in pages folder
  if (pathname.includes('/pages/')) {
    return '../';
  }
  
  // If we're at root (index.html or /)
  if (pathname.endsWith('/index.html') || pathname === '/' || pathname.endsWith('index.html')) {
    return './';
  }
  
  // For other cases, try to determine the base path from the current location
  const pathParts = pathname.split('/').filter(Boolean);
  
  // If the current file is inside a subdirectory, return the path up to that directory
  if (pathParts.length > 0) {
    return '/' + pathParts.slice(0, -1).join('/') + '/';
  }
  
  return '/';
}

/**
 * Get absolute path from a relative path in src
 */
export function getSrcPath(relativePath) {
  const basePath = getBasePath();
  
  // Remove leading ./ if present
  const cleanPath = relativePath.replace(/^\.\//, '');
  
  // If base path is root, prepend src/
  if (basePath === './' || basePath === '/') {
    return './src/' + cleanPath;
  }
  
  // Otherwise use the base path
  return basePath + 'src/' + cleanPath;
}

/**
 * Get path for components
 */
export function getComponentsPath(relativePath) {
  const basePath = getBasePath();
  
  const cleanPath = relativePath.replace(/^\.\//, '');
  
  if (basePath === './' || basePath === '/') {
    return './src/components/' + cleanPath;
  }
  
  return basePath + 'src/components/' + cleanPath;
}

/**
 * Get path for pages
 */
export function getPagesPath(pageName) {
  const basePath = getBasePath();
  
  if (basePath === './' || basePath === '/') {
    return './src/pages/' + pageName;
  }
  
  return basePath + 'src/pages/' + pageName;
}

/**
 * Get path for assets
 */
export function getAssetsPath(assetName) {
  const basePath = getBasePath();
  
  if (basePath === './' || basePath === '/') {
    return './src/assets/' + assetName;
  }
  
  return basePath + 'src/assets/' + assetName;
}

