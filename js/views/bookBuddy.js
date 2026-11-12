// bookBuddy.js - View Book Buddy (Fitur Dukungan Sosial & Berbagi Rekomendasi)
// Sesuai Teori Bandura (1977) Self-Efficacy & SDT (Keterhubungan Sosial)
import { store } from '../store.js';

export function renderBookBuddy() {
  const posts = store.getCommunityPosts();
  const user = store.getUser();
  const books = store.getBooks();

  const postCards = posts.map(p => `
    <div class="post-card">
      <div class="post-header">
        <div class="post-avatar ${p.avatarBg || 'bg-blue-500'}">
          ${p.avatar || p.author.slice(0, 2).toUpperCase()}
        </div>
        <div style="flex: 1;">
          <div class="post-author-name">${p.author}</div>
          <div class="post-author-meta">${p.grade || 'Siswa SMA'} • 🕒 ${p.time || 'Baru saja'}</div>
        </div>
      </div>

      ${p.bookTitle ? `
        <div class="post-book-tag">
          📖 Buku: <strong>${p.bookTitle}</strong> ${p.bookAuthor ? `(${p.bookAuthor})` : ''}
        </div>
      ` : ''}

      <div class="post-body">
        ${escapeHtml(p.content)}
      </div>

      ${p.quote ? `
        <div class="post-quote">
          “${escapeHtml(p.quote)}”
        </div>
      ` : ''}

      <div class="post-actions">
        <button class="post-action-btn ${p.hasLiked ? 'liked' : ''}" onclick="window.app.toggleLikePost('${p.id}')">
          <span>${p.hasLiked ? '❤️' : '🤍'}</span>
          <span>${p.likes} Semangat</span>
        </button>
        <button class="post-action-btn" onclick="window.app.focusComment('${p.id}')">
          <span>💬</span>
          <span>${p.comments ? p.comments.length : 0} Komentar</span>
        </button>
      </div>

      <!-- Comments List -->
      ${p.comments && p.comments.length > 0 ? `
        <div style="margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--border-color); display: flex; flex-direction: column; gap: 8px;">
          ${p.comments.map(c => `
            <div style="background: #f8fafc; padding: 8px 12px; border-radius: 8px; font-size: 0.84rem;">
              <strong style="color: #1e3a8a;">${c.author}:</strong>
              <span style="color: #334155;"> ${escapeHtml(c.text)}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Add Comment Form -->
      <form onsubmit="window.app.handleAddComment(event, '${p.id}')" style="display: flex; gap: 8px; margin-top: 12px;">
        <input type="text" name="commentText" class="form-control" placeholder="Tulis ucapan semangat atau respon..." style="font-size: 0.82rem; padding: 6px 12px;" required />
        <button type="submit" class="btn btn-sm btn-primary">Kirim</button>
      </form>
    </div>
  `).join('');

  return `
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Book Buddy</h1>
        <p class="page-subtitle">Saling mendukung, berbagi rekomendasi bacaan, dan rayakan pencapaian membaca bersama teman.</p>
      </div>

      <!-- Composer Card -->
      <div class="buddy-composer">
        <h3 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 12px;">
          Bagikan Rekomendasi atau Capaian Membacamu
        </h3>
        <form id="form-buddy-post" onsubmit="window.app.handleSaveBuddyPost(event)">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
            <div>
              <label class="form-label" style="font-size: 0.78rem;">Buku yang Direkomendasikan (Opsional)</label>
              <select id="buddy-book-title" class="form-control" style="font-size: 0.85rem;">
                <option value="">-- Pilih Buku dari Rak --</option>
                ${books.map(b => `<option value="${b.title}">${b.title} (${b.author})</option>`).join('')}
                <option value="Lainnya">+ Buku Lain</option>
              </select>
            </div>
            <div>
              <label class="form-label" style="font-size: 0.78rem;">Kutipan Favorit (Opsional)</label>
              <input type="text" id="buddy-quote" class="form-control" placeholder="Kalimat yang paling menyentuhmu..." style="font-size: 0.85rem;" />
            </div>
          </div>

          <div class="form-group">
            <textarea id="buddy-content" class="form-control" rows="2" placeholder="Tuliskan pengalaman, kesan, atau motivasi membaca untuk teman-teman..." required></textarea>
          </div>

          <div style="display: flex; justify-content: flex-end;">
            <button type="submit" class="btn btn-primary" style="font-size: 0.88rem; padding: 8px 18px;">
              🚀 Bagikan ke Book Buddy
            </button>
          </div>
        </form>
      </div>

      <!-- Feed List -->
      <div class="buddy-feed">
        ${postCards}
      </div>
    </div>
  `;
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

