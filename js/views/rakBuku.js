// rakBuku.js - View Rak Buku Digital (Perpustakaan Pribadi)
import { store } from '../store.js';

export function renderRakBuku(activeTab = 'all') {
  const books = store.getBooks();

  let filteredBooks = books;
  if (activeTab === 'reading') {
    filteredBooks = books.filter(b => b.status === 'reading');
  } else if (activeTab === 'want_to_read') {
    filteredBooks = books.filter(b => b.status === 'want_to_read');
  } else if (activeTab === 'completed') {
    filteredBooks = books.filter(b => b.status === 'completed');
  }

  const bookCards = filteredBooks.length > 0
    ? filteredBooks.map(b => {
        const percent = Math.min(100, Math.round(((b.currentPage || 0) / (b.totalPages || 1)) * 100));
        let statusBadge = '';
        if (b.status === 'completed') {
          statusBadge = `<span class="badge badge-green">✓ Selesai</span>`;
        } else if (b.status === 'reading') {
          statusBadge = `<span class="badge badge-blue">📖 Sedang Dibaca</span>`;
        } else {
          statusBadge = `<span class="badge badge-orange">⏳ Ingin Dibaca</span>`;
        }

        return `
          <div class="book-card">
            <div class="book-cover">
              <span class="book-cover-emoji">${b.coverEmoji || '📖'}</span>
              <div class="book-status-pill">
                ${statusBadge}
              </div>
            </div>

            <div class="book-card-body">
              <h3 class="book-title">${b.title}</h3>
              <p class="book-author">oleh ${b.author}</p>

              <div class="book-progress-bar-container">
                <div class="book-progress-fill" style="width: ${percent}%;"></div>
              </div>

              <div class="book-pages-meta">
                <span>${b.currentPage || 0} / ${b.totalPages} Hal</span>
                <span>${percent}%</span>
              </div>

              <div class="book-card-actions">
                <button class="btn btn-sm btn-soft" style="flex: 1;" onclick="window.app.openUpdateBookModal('${b.id}')">
                  ✏️ Update
                </button>
                <button class="btn btn-sm btn-outline" style="color: #ef4444; border-color: #fecaca;" onclick="window.app.deleteBook('${b.id}')">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')
    : `<div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: white; border-radius: 12px; border: 1px dashed #cbd5e1; color: var(--text-muted);">
        Tidak ada buku di kategori ini. Tambahkan buku baru ke rak tokomu!
      </div>`;

  return `
    <div class="page-container">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; flex-wrap: wrap; gap: 14px;">
        <div class="page-header" style="margin-bottom: 0;">
          <h1 class="page-title">Rak Buku Digital</h1>
          <p class="page-subtitle">Kelola dan tata koleksi buku yang ingin dibaca, sedang berjalan, maupun yang sudah tuntas.</p>
        </div>
        <button class="btn btn-primary" onclick="window.app.openAddBookModal()">
          + Tambah Buku ke Rak
        </button>
      </div>

      <!-- Bookshelf Tabs Sesuai Spesifikasi Bab 3.4.1 -->
      <div class="bookshelf-tabs">
        <button class="tab-btn ${activeTab === 'all' ? 'active' : ''}" onclick="window.app.filterBookshelf('all')">
          Semua Buku (${books.length})
        </button>
        <button class="tab-btn ${activeTab === 'reading' ? 'active' : ''}" onclick="window.app.filterBookshelf('reading')">
          Sedang Dibaca (${books.filter(b => b.status === 'reading').length})
        </button>
        <button class="tab-btn ${activeTab === 'want_to_read' ? 'active' : ''}" onclick="window.app.filterBookshelf('want_to_read')">
          Ingin Dibaca (${books.filter(b => b.status === 'want_to_read').length})
        </button>
        <button class="tab-btn ${activeTab === 'completed' ? 'active' : ''}" onclick="window.app.filterBookshelf('completed')">
          Selesai Dibaca (${books.filter(b => b.status === 'completed').length})
        </button>
      </div>

      <!-- Books Grid -->
      <div class="books-grid">
        ${bookCards}
      </div>
    </div>
  `;
}

