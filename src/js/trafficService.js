// trafficService.js - Fetch/normalize traffic reports from Firestore
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function fetchReportsWithinBounds(db, bounds, filterHours = 2) {
  const trafficReportsRef = collection(db, 'trafficReports');
  const q = query(
    trafficReportsRef,
    where('lat', '>=', bounds.minLat),
    where('lat', '<=', bounds.maxLat)
  );
  const snap = await getDocs(q);
  const res = [];
  const now = Date.now();
  const maxAgeMs = filterHours * 60 * 60 * 1000;
  snap.forEach((d) => {
    const r = d.data();
    if (typeof r.lat !== 'number' || typeof r.lng !== 'number') return;
    if (r.lng < bounds.minLng || r.lng > bounds.maxLng) return;
    const createdAt = normalizeTimestamp(r.timestamp ?? r.createAt);
    if (createdAt && now - createdAt > maxAgeMs) return;
    res.push({
      id: d.id,
      lat: r.lat,
      lng: r.lng,
      username: r.username || 'Anonymous',
      type: r.type || 'unknown',
      comment: r.comment || '',
      createdAt: createdAt || now
    });
  });
  return res;
}

export function normalizeTimestamp(input) {
  if (!input) return null;
  try {
    if (typeof input === 'object') {
      if (typeof input.toDate === 'function') return input.toDate().getTime();
      if (typeof input.seconds === 'number') return (input.seconds * 1000) + Math.floor((input.nanoseconds || 0) / 1e6);
    }
    if (typeof input === 'number') return input < 1e12 ? input * 1000 : input;
    const parsed = (input instanceof Date) ? input.getTime() : new Date(input).getTime();
    return Number.isNaN(parsed) ? null : parsed;
  } catch { return null; }
}


