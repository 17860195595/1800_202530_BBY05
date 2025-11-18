// favoriteList.js
import { listFavoritesDesc } from './favoritesService.js';

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

async function loadFavoriteRoutes() {
  const container = document.getElementById('favoriteRoutes');
  const loadingEl = document.getElementById('favoritesLoading');
  
  // Show loading state
  if (loadingEl) {
    loadingEl.style.display = 'flex';
  }
  
  try {
    // Add a small delay to show loading state (optional, for better UX)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const favoriteRoutes = await listFavoritesDesc();
    
    // Hide loading state
    if (loadingEl) {
      loadingEl.style.display = 'none';
    }
    //empty state
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
    // Render favorite routes
    const routesHTML = favoriteRoutes.map((route) => `
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
        <button class="detail-button" data-lat="${route.toLat}" data-lng="${route.toLng}" data-name="${escapeHtml(route.to)}" data-address="${escapeHtml(route.toAddress || '')}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          View Detail
        </button>
      </div>
    `).join('');
    
    container.innerHTML = routesHTML;
    container.querySelectorAll('.detail-button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lat = Number(btn.getAttribute('data-lat'));
        const lng = Number(btn.getAttribute('data-lng'));
        const name = btn.getAttribute('data-name');
        const address = btn.getAttribute('data-address');
        sessionStorage.setItem('routeDetail', JSON.stringify({ name, address, lat, lng }));
        window.location.href = './routeDetail.html';
      });
    });
  } catch (e) {
    console.error('Failed to load favorites from Firestore:', e);
    
    // Hide loading state
    const loadingEl = document.getElementById('favoritesLoading');
    if (loadingEl) {
      loadingEl.style.display = 'none';
    }
    
    container.innerHTML = '<div class="empty-favorites"><h3>Failed to load favorites</h3><p>Please try again later.</p></div>';
  }
}


