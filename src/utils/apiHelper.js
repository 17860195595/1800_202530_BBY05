/**
 * API Helper - Provides environment-aware API endpoints
 * Uses Vite proxy in development, Firebase Functions in production
 */

/**
 * Check if running in development environment
 */
function isDevelopment() {
  return import.meta.env.DEV || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
}

/**
 * Get Nominatim API base URL
 */
export function getNominatimBaseUrl() {
  if (isDevelopment()) {
    // Development: use Vite proxy
    return '/api/nominatim';
  } else {
    // Production: use Firebase Functions
    // Need to get actual functions URL after deployment
    // If using Firebase Hosting rewrites, can use relative path directly
    return '/api/nominatim';
  }
}

/**
 * Build Nominatim search URL
 */
export function buildNominatimSearchUrl(params) {
  const baseUrl = getNominatimBaseUrl();
  const queryParams = new URLSearchParams({
    q: params.query,
    format: params.format || 'json',
    limit: params.limit || '5',
    addressdetails: params.addressdetails || '1',
    ...(params.countrycodes && { countrycodes: params.countrycodes }),
    ...(params.bounded && { bounded: params.bounded }),
    ...(params.viewbox && { viewbox: params.viewbox })
  });
  
  return `${baseUrl}/search?${queryParams.toString()}`;
}

/**
 * Build Nominatim reverse geocoding URL
 */
export function buildNominatimReverseUrl(params) {
  const baseUrl = getNominatimBaseUrl();
  const queryParams = new URLSearchParams({
    lat: params.lat,
    lon: params.lon,
    format: params.format || 'json',
    addressdetails: params.addressdetails || '1',
    ...(params.zoom && { zoom: params.zoom })
  });
  
  return `${baseUrl}/reverse?${queryParams.toString()}`;
}

