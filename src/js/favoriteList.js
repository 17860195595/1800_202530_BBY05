// favoriteList.js
document.addEventListener("DOMContentLoaded", function() {
  loadFavoriteRoutes();
});

// Helper function to escape HTML and prevent XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text ? text.replace(/[&<>"']/g, m => map[m]) : '';
}

function loadFavoriteRoutes() {
  const favoriteRoutes = JSON.parse(localStorage.getItem('favoriteRoutes') || '[]');
  const container = document.getElementById('favoriteRoutes');
  
  if (favoriteRoutes.length === 0) {
    container.innerHTML = `
      <div class="empty-favorites">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <h3>No favorite routes yet</h3>
        <p>Save routes from the route detail page to see them here</p>
      </div>
    `;
    return;
  }
  
  const routesHTML = favoriteRoutes.map((route, index) => `
    <div class="favorite-route-item">
      <div class="route-info">
        <div class="route-from">From: ${escapeHtml(route.from)}</div>
        <div class="route-to">To: ${escapeHtml(route.to)}</div>
        <div class="route-details">
          <div class="heart-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <div class="route-stats">${escapeHtml(route.distance)} • ${escapeHtml(route.duration)}</div>
        </div>
      </div>
      <button class="detail-button" onclick="viewRouteDetail(${index})">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        View Detail
      </button>
    </div>
  `).join('');
  
  container.innerHTML = routesHTML;
}

function viewRouteDetail(index) {
  const favoriteRoutes = JSON.parse(localStorage.getItem('favoriteRoutes') || '[]');
  const route = favoriteRoutes[index];
  
  if (route) {
    // Store route data for route detail page
    sessionStorage.setItem('routeDetail', JSON.stringify({
      name: route.to,
      address: route.toAddress,
      lat: route.toLat,
      lng: route.toLng
    }));
    
    // Navigate to route detail page
    window.location.href = './routeDetail.html';
  }
}

// Make function globally available
window.viewRouteDetail = viewRouteDetail;
