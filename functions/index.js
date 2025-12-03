const functions = require('firebase-functions');
const https = require('https');

/**
 * Proxy for Nominatim Search API
 * Handles CORS and forwards requests to Nominatim
 */
exports.nominatimSearch = functions.https.onRequest((req, res) => {
  // Set CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  // Extract query parameters
  const query = req.query.q || '';
  const format = req.query.format || 'json';
  const limit = req.query.limit || '5';
  const countrycodes = req.query.countrycodes || '';
  const bounded = req.query.bounded || '';
  const viewbox = req.query.viewbox || '';
  const addressdetails = req.query.addressdetails || '1';

  // Build Nominatim API URL
  let nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=${format}&limit=${limit}&addressdetails=${addressdetails}`;
  
  if (countrycodes) {
    nominatimUrl += `&countrycodes=${countrycodes}`;
  }
  if (bounded) {
    nominatimUrl += `&bounded=${bounded}`;
  }
  if (viewbox) {
    nominatimUrl += `&viewbox=${viewbox}`;
  }

  // Make request to Nominatim
  https.get(nominatimUrl, {
    headers: {
      'User-Agent': 'ClearWay Search App',
      'Accept': 'application/json'
    }
  }, (nominatimRes) => {
    let data = '';

    nominatimRes.on('data', (chunk) => {
      data += chunk;
    });

    nominatimRes.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        res.status(200).json(jsonData);
      } catch (error) {
        res.status(500).json({ error: 'Failed to parse response' });
      }
    });
  }).on('error', (error) => {
    console.error('Nominatim API error:', error);
    res.status(500).json({ error: 'Failed to fetch from Nominatim API' });
  });
});

/**
 * Proxy for Nominatim Reverse Geocoding API
 * Handles CORS and forwards requests to Nominatim
 */
exports.nominatimReverse = functions.https.onRequest((req, res) => {
  // Set CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  // Extract query parameters
  const lat = req.query.lat || '';
  const lon = req.query.lon || '';
  const format = req.query.format || 'json';
  const addressdetails = req.query.addressdetails || '1';
  const zoom = req.query.zoom || '18';

  if (!lat || !lon) {
    res.status(400).json({ error: 'Missing required parameters: lat and lon' });
    return;
  }

  // Build Nominatim API URL
  const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=${format}&addressdetails=${addressdetails}&zoom=${zoom}`;

  // Make request to Nominatim
  https.get(nominatimUrl, {
    headers: {
      'User-Agent': 'ClearWay Search App',
      'Accept': 'application/json'
    }
  }, (nominatimRes) => {
    let data = '';

    nominatimRes.on('data', (chunk) => {
      data += chunk;
    });

    nominatimRes.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        res.status(200).json(jsonData);
      } catch (error) {
        res.status(500).json({ error: 'Failed to parse response' });
      }
    });
  }).on('error', (error) => {
    console.error('Nominatim API error:', error);
    res.status(500).json({ error: 'Failed to fetch from Nominatim API' });
  });
});

