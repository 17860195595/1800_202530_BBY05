// routingService.js - 路线规划相关封装（OpenRouteService）

export async function fetchDrivingRoute(apiKey, start, end) {
  const apiUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}`;
  const requestBody = {
    coordinates: [
      [start[1], start[0]],
      [end[1], end[0]]
    ],
    preference: 'fastest',
    alternative_routes: {
      target_count: 3,
      share_factor: 0.6,
      weight_factor: 2
    }
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'User-Agent': 'ClearWay/1.0'
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`ORS failed ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  if (!data.routes || data.routes.length === 0) {
    return null;
  }

  return normalizeRoutes(data.routes);
}

export function normalizeRoutes(routes) {
  const primary = routes[0];
  return {
    primary: {
      coordinates: decodePolyline(primary.geometry),
      distanceKm: primary.summary.distance / 1000,
      durationSec: primary.summary.duration
    },
    alternatives: routes.slice(1).map((r) => ({
      coordinates: decodePolyline(r.geometry)
    }))
  };
}

export function decodePolyline(encoded) {
  if (!encoded) return [];
  const coordinates = [];
  const factor = 1e5;
  let index = 0, lat = 0, lng = 0;
  while (index < encoded.length) {
    let byte = 0, shift = 0, result = 0;
    do { byte = encoded.charCodeAt(index++) - 63; result |= (byte & 0x1f) << shift; shift += 5; } while (byte >= 0x20);
    const dlat = (result & 1) ? ~(result >> 1) : (result >> 1); lat += dlat;
    result = 0; shift = 0;
    do { byte = encoded.charCodeAt(index++) - 63; result |= (byte & 0x1f) << shift; shift += 5; } while (byte >= 0x20);
    const dlng = (result & 1) ? ~(result >> 1) : (result >> 1); lng += dlng;
    coordinates.push([lat / factor, lng / factor]);
  }
  return coordinates;
}

export function estimateDrivingMinutes(distanceKm, avgSpeedKmh = 50) {
  return Math.round((distanceKm / avgSpeedKmh) * 60);
}


