/**
 * API Helper - 提供环境感知的 API 端点
 * 在开发环境使用 Vite 代理，在生产环境使用 Firebase Functions
 */

/**
 * 检测是否为开发环境
 */
function isDevelopment() {
  return import.meta.env.DEV || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
}

/**
 * 获取 Nominatim API 基础 URL
 */
export function getNominatimBaseUrl() {
  if (isDevelopment()) {
    // 开发环境：使用 Vite 代理
    return '/api/nominatim';
  } else {
    // 生产环境：使用 Firebase Functions
    // 需要部署后获取实际的 functions URL
    // 如果使用 Firebase Hosting rewrites，可以直接使用相对路径
    return '/api/nominatim';
  }
}

/**
 * 构建 Nominatim 搜索 URL
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
 * 构建 Nominatim 反向地理编码 URL
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

