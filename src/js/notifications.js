// notifications.js - Global toast notifications (info/success/warn/error)

function ensureContainer() {
  let container = document.getElementById('global-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'global-toast-container';
    container.style.position = 'fixed';
    container.style.top = '16px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '10px';
    document.body.appendChild(container);

    // Inject base styles
    const style = document.createElement('style');
    style.textContent = `
      .global-toast{min-width:260px;max-width:88vw;padding:10px 14px;border-radius:10px;color:#fff;box-shadow:0 6px 20px rgba(0,0,0,.18);display:flex;align-items:center;gap:10px;opacity:0;transform:translateY(-8px);transition:all .25s ease}
      .global-toast.show{opacity:1;transform:translateY(0)}
      .global-toast .icon{font-size:18px}
      .global-toast.info{background:#2563eb}
      .global-toast.success{background:#16a34a}
      .global-toast.warn{background:#d97706}
      .global-toast.error{background:#dc2626}
      @media (prefers-color-scheme: dark){
        .global-toast{box-shadow:0 6px 20px rgba(0,0,0,.35)}
      }
    `;
    document.head.appendChild(style);
  }
  return container;
}

export function showToast(type, message, duration = 2600) {
  const container = ensureContainer();
  const toast = document.createElement('div');
  toast.className = `global-toast ${type || 'info'}`;

  const iconSpan = document.createElement('span');
  iconSpan.className = 'icon';
  iconSpan.textContent = type === 'success' ? '✔' : type === 'warn' ? '⚠' : type === 'error' ? '✖' : 'ℹ';

  const textSpan = document.createElement('span');
  textSpan.textContent = String(message || '');

  toast.appendChild(iconSpan);
  toast.appendChild(textSpan);
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  const ttl = Math.max(1200, duration);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => container.removeChild(toast), 250);
  }, ttl);
}

export function showInfo(msg, duration){ showToast('info', msg, duration); }
export function showSuccess(msg, duration){ showToast('success', msg, duration); }
export function showWarn(msg, duration){ showToast('warn', msg, duration); }
export function showError(msg, duration){ showToast('error', msg, duration); }


