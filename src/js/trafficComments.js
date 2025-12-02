// trafficComments.js - Traffic Comments Public Page
import { db } from './firebaseConfig.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { normalizeTimestamp } from './trafficService.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let allReports = [];
let filteredReports = [];
const addressCache = new Map(); // Cache for address lookups

// Initialize page
document.addEventListener('DOMContentLoaded', async () => {
    await loadAllTrafficReports();
    setupEventListeners();
    applyFilters();
});

/**
 * Load all traffic reports from Firestore
 */
async function loadAllTrafficReports() {
    try {
        const trafficReportsRef = collection(db, 'trafficReports');
        let snapshot;
        
        // Try to query with orderBy, fallback to simple query if index doesn't exist
        try {
            const q = query(trafficReportsRef, orderBy('createAt', 'desc'));
            snapshot = await getDocs(q);
        } catch (orderByError) {
            // If orderBy fails (likely due to missing index), use simple query
            console.warn('orderBy failed, using simple query:', orderByError);
            snapshot = await getDocs(trafficReportsRef);
        }
        
        allReports = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            const createdAt = normalizeTimestamp(data.createAt || data.timestamp);
            
            if (typeof data.lat === 'number' && typeof data.lng === 'number') {
                allReports.push({
                    id: doc.id,
                    lat: data.lat,
                    lng: data.lng,
                    username: data.username || 'Anonymous',
                    type: data.type || 'unknown',
                    comment: data.comment || '',
                    createdAt: createdAt || Date.now()
                });
            }
        });
        
        // Sort by createdAt in descending order (newest first)
        allReports.sort((a, b) => b.createdAt - a.createdAt);
        
        console.log(`Loaded ${allReports.length} traffic reports`);
        applyFilters();
    } catch (error) {
        console.error('Failed to load traffic reports:', error);
        showError('Failed to load traffic reports, please try again later');
    }
}

/**
 * Setup event listeners for filters
 */
function setupEventListeners() {
    // Time filter buttons
    const timeFilterButtons = document.querySelectorAll('.time-filter-buttons .filter-btn');
    timeFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            timeFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const timeFilter = btn.getAttribute('data-time');
            if (timeFilter === 'custom') {
                document.getElementById('customDateGroup').style.display = 'block';
            } else {
                document.getElementById('customDateGroup').style.display = 'none';
            }
            
            applyFilters();
        });
    });
    
    // Type filter buttons
    const typeFilterButtons = document.querySelectorAll('.type-filter-buttons .filter-btn');
    typeFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            typeFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilters();
        });
    });
    
    // Initialize flatpickr for date inputs with English locale
    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    const startDatePicker = flatpickr('#startDate', {
        dateFormat: 'Y-m-d',
        maxDate: maxDate,
        allowInput: false,
        clickOpens: true,
        onChange: function(selectedDates, dateStr, instance) {
            if (dateStr) {
                validateCustomDateRange();
                applyFilters();
            }
        }
    });
    
    const endDatePicker = flatpickr('#endDate', {
        dateFormat: 'Y-m-d',
        maxDate: maxDate,
        allowInput: false,
        clickOpens: true,
        onChange: function(selectedDates, dateStr, instance) {
            if (dateStr) {
                validateCustomDateRange();
                applyFilters();
            }
        }
    });
    
    // Store picker instances for later use
    window.startDatePicker = startDatePicker;
    window.endDatePicker = endDatePicker;
}

/**
 * Validate custom date range (not more than 1 month)
 */
function validateCustomDateRange() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const startDateStr = startDateInput.value;
    const endDateStr = endDateInput.value;
    
    if (!startDateStr || !endDateStr) {
        return true; // Allow empty dates
    }
    
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return true; // Invalid dates, let flatpickr handle it
    }
    
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 30) {
        alert('Custom date range cannot exceed one month');
        if (window.endDatePicker) {
            window.endDatePicker.clear();
        }
        return false;
    }
    
    if (startDate > endDate) {
        alert('Start date cannot be later than end date');
        if (window.endDatePicker) {
            window.endDatePicker.clear();
        }
        return false;
    }
    
    return true;
}

/**
 * Apply filters to reports
 */
function applyFilters() {
    const activeTimeFilter = document.querySelector('.time-filter-buttons .filter-btn.active');
    const activeTypeFilter = document.querySelector('.type-filter-buttons .filter-btn.active');
    
    const timeFilter = activeTimeFilter?.getAttribute('data-time') || '1day';
    const typeFilter = activeTypeFilter?.getAttribute('data-type') || 'all';
    
    filteredReports = allReports.filter(report => {
        // Time filter
        if (!passesTimeFilter(report, timeFilter)) {
            return false;
        }
        
        // Type filter
        if (typeFilter !== 'all' && report.type !== typeFilter) {
            return false;
        }
        
        return true;
    });
    
    displayTrafficComments(filteredReports);
    updateResultsCount(filteredReports.length);
}

/**
 * Check if report passes time filter
 */
function passesTimeFilter(report, timeFilter) {
    const now = Date.now();
    const reportTime = report.createdAt;
    const diffMs = now - reportTime;
    
    switch (timeFilter) {
        case '1day':
            return diffMs <= 24 * 60 * 60 * 1000;
        case '1week':
            return diffMs <= 7 * 24 * 60 * 60 * 1000;
        case '1month':
            return diffMs <= 30 * 24 * 60 * 60 * 1000;
        case 'custom':
            return passesCustomDateFilter(report);
        default:
            return true;
    }
}

/**
 * Check if report passes custom date filter
 */
function passesCustomDateFilter(report) {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    
    if (!startDateInput.value || !endDateInput.value) {
        return false;
    }
    
    const startDate = new Date(startDateInput.value);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(endDateInput.value);
    endDate.setHours(23, 59, 59, 999);
    
    const reportDate = new Date(report.createdAt);
    
    return reportDate >= startDate && reportDate <= endDate;
}

/**
 * Display traffic comments
 */
function displayTrafficComments(reports) {
    const listContainer = document.getElementById('trafficCommentsList');
    
    if (reports.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M9 10h6a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z"></path>
                    <path d="M5 12h14M3 18h2M19 18h2"></path>
                </svg>
                <h3>No Traffic Reports</h3>
                <p>No traffic reports found under current filter conditions</p>
            </div>
        `;
        return;
    }
    
    listContainer.innerHTML = reports.map(report => createCommentCard(report)).join('');
    
    // Load addresses for all visible reports
    loadAddressesForReports(reports);
}

/**
 * Create comment card HTML
 */
function createCommentCard(report) {
    const typeLabels = {
        'accident': 'Accident',
        'traffic': 'Traffic',
        'roadblock': 'Roadblock',
        'unknown': 'Unknown'
    };
    
    const typeColors = {
        'accident': '#ff4444',
        'traffic': '#ffaa00',
        'roadblock': '#ff8800',
        'unknown': '#999999'
    };
    
    const typeLabel = typeLabels[report.type] || report.type;
    const typeColor = typeColors[report.type] || '#999999';
    const timeAgo = formatTimeAgo(report.createdAt);
    const formattedDate = formatDate(report.createdAt);
    
    return `
        <div class="comment-card">
            <div class="comment-header">
                <div class="comment-type" style="background-color: ${typeColor}20; color: ${typeColor}; border-color: ${typeColor};">
                    ${typeLabel}
                </div>
                <div class="comment-time">${timeAgo}</div>
            </div>
            <div class="comment-body">
                <div class="comment-user">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>${escapeHtml(report.username)}</span>
                </div>
                <div class="comment-text">${escapeHtml(report.comment || 'No comment')}</div>
                <div class="comment-location" data-report-id="${report.id}" data-lat="${report.lat}" data-lng="${report.lng}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span class="location-text">${report.lat.toFixed(4)}, ${report.lng.toFixed(4)}</span>
                    <span class="location-loading" style="display: none;">Loading...</span>
                </div>
            </div>
            <div class="comment-footer">
                <span class="comment-date">${formattedDate}</span>
            </div>
        </div>
    `;
}

/**
 * Format time ago string
 */
function formatTimeAgo(timestamp) {
    if (!timestamp) return '';
    
    const now = Date.now();
    const diffMs = now - timestamp;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays} d ago`;
    
    return formatDate(timestamp);
}

/**
 * Format date string
 */
function formatDate(timestamp) {
    if (!timestamp) return '';
    
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

/**
 * Update results count
 */
function updateResultsCount(count) {
    const countElement = document.getElementById('resultsCount');
    if (countElement) {
        countElement.textContent = count;
    }
}

/**
 * Show error message
 */
function showError(message) {
    const listContainer = document.getElementById('trafficCommentsList');
    listContainer.innerHTML = `
        <div class="error-state">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4M12 16h.01"></path>
            </svg>
            <h3>Load Failed</h3>
            <p>${escapeHtml(message)}</p>
        </div>
    `;
}

/**
 * Load addresses for reports using reverse geocoding
 */
async function loadAddressesForReports(reports) {
    // Process reports in batches to avoid overwhelming the API
    const batchSize = 5;
    const delay = 200; // Delay between batches (ms)
    
    for (let i = 0; i < reports.length; i += batchSize) {
        const batch = reports.slice(i, i + batchSize);
        await Promise.all(batch.map(report => loadAddressForReport(report)));
        
        // Add delay between batches to respect API rate limits
        if (i + batchSize < reports.length) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

/**
 * Load address for a single report
 */
async function loadAddressForReport(report) {
    const cacheKey = `${report.lat.toFixed(4)},${report.lng.toFixed(4)}`;
    
    // Check cache first
    if (addressCache.has(cacheKey)) {
        updateLocationDisplay(report.id, addressCache.get(cacheKey));
        return;
    }
    
    // Find the location element
    const locationElement = document.querySelector(`.comment-location[data-report-id="${report.id}"]`);
    if (!locationElement) return;
    
    const loadingElement = locationElement.querySelector('.location-loading');
    const textElement = locationElement.querySelector('.location-text');
    
    // Show loading state
    if (loadingElement && textElement) {
        loadingElement.style.display = 'inline';
        textElement.style.display = 'none';
    }
    
    try {
        const address = await reverseGeocode(report.lat, report.lng);
        
        // Cache the result
        addressCache.set(cacheKey, address);
        
        // Update display
        updateLocationDisplay(report.id, address);
    } catch (error) {
        console.error(`Failed to get address for report ${report.id}:`, error);
        // Keep showing coordinates on error
        if (loadingElement && textElement) {
            loadingElement.style.display = 'none';
            textElement.style.display = 'inline';
        }
    }
}

/**
 * Reverse geocode coordinates to address
 */
async function reverseGeocode(lat, lng) {
    try {
        // 检测环境：开发环境使用 Vite 代理，生产环境使用 CORS 代理
        const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&zoom=18`;
        
        if (isDev) {
            // 开发环境：使用 Vite 代理
            const url = `/api/nominatim/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&zoom=18`;
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            if (data && data.display_name) {
                return formatAddress(data);
            }
            throw new Error('No address found');
        } else {
            // 生产环境：直接使用 CORS 代理服务（Nominatim 不支持 CORS，跳过直接调用）
            const proxyServices = [
                // 方案1: 使用 allorigins.win raw 模式（最快，返回原始 JSON）
                {
                    url: `https://api.allorigins.win/raw?url=${encodeURIComponent(nominatimUrl)}`,
                    parseResponse: (data) => data,
                    headers: {
                        'Accept': 'application/json'
                    }
                },
                // 方案2: 使用 allorigins.win 标准模式（备用方案）
                {
                    url: `https://api.allorigins.win/get?url=${encodeURIComponent(nominatimUrl)}`,
                    parseResponse: (data) => {
                        if (data && data.contents) {
                            return JSON.parse(data.contents);
                        }
                        return data;
                    },
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            ];
            
            let lastError = null;
            for (const proxy of proxyServices) {
                try {
                    const response = await fetch(proxy.url, {
                        method: 'GET',
                        headers: proxy.headers,
                        mode: 'cors'
                    });
                    
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    
                    let data = await response.json();
                    data = proxy.parseResponse(data);
                    
                    if (data && data.display_name) {
                        return formatAddress(data);
                    }
                } catch (error) {
                    console.warn(`Reverse geocoding proxy failed: ${proxy.url}`, error);
                    lastError = error;
                    continue;
                }
            }
            
            throw lastError || new Error('All proxy services failed');
        }
    } catch (error) {
        console.error('Reverse geocoding error:', error);
        throw error;
    }
}

/**
 * Format address from Nominatim response
 */
function formatAddress(data) {
    const address = data.address || {};
    const displayName = data.display_name || '';
    
    // Priority 1: Road name with house number (most specific)
    if (address.road) {
        if (address.house_number) {
            return `${address.road} ${address.house_number}`;
        }
        // Add nearby landmark if available
        if (address.building) {
            return `${address.road} (${address.building})`;
        }
        return address.road;
    }
    
    // Priority 2: Building name
    if (address.building) {
        return address.building;
    }
    
    // Priority 3: Pedestrian way or path
    if (address.pedestrian) {
        return address.pedestrian;
    }
    
    // Priority 4: Neighbourhood
    if (address.neighbourhood) {
        return address.neighbourhood;
    }
    
    // Priority 5: Suburb
    if (address.suburb) {
        return address.suburb;
    }
    
    // Priority 6: City district
    if (address.city_district) {
        return address.city_district;
    }
    
    // Fallback: Extract meaningful part from display_name
    // Usually the first 1-2 parts contain the most relevant info
    const parts = displayName.split(',');
    if (parts.length >= 2) {
        // Return first two parts (e.g., "Building Name, Street Name")
        return parts.slice(0, 2).map(p => p.trim()).join(', ');
    } else if (parts.length > 0) {
        return parts[0].trim();
    }
    
    // Last resort: full display name (truncated if too long)
    if (displayName.length > 50) {
        return displayName.substring(0, 47) + '...';
    }
    
    return displayName;
}

/**
 * Update location display in the DOM
 */
function updateLocationDisplay(reportId, address) {
    const locationElement = document.querySelector(`.comment-location[data-report-id="${reportId}"]`);
    if (!locationElement) return;
    
    const loadingElement = locationElement.querySelector('.location-loading');
    const textElement = locationElement.querySelector('.location-text');
    
    if (loadingElement && textElement) {
        loadingElement.style.display = 'none';
        textElement.textContent = address;
        textElement.style.display = 'inline';
        textElement.title = address; // Add tooltip with full address
    }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

