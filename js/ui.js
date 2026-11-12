// ui.js - Modal helpers, toast notifications, and UI feedback

export function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : 'toast-success'}`;
  toast.innerHTML = `
    <span>${type === 'error' ? '⚠️' : '✅'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

export function openModal(contentHtml) {
  let overlay = document.getElementById('global-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'global-modal-overlay';
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal();
      }
    });
  }

  overlay.innerHTML = `
    <div class="modal-dialog">
      ${contentHtml}
    </div>
  `;
  overlay.classList.add('active');
}

export function closeModal() {
  const overlay = document.getElementById('global-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

