// catatan.js - View Halaman Catatan Membaca sesuai Mockup 3 (Gambar 3.2 Lampiran 5)
import { ILLUSTRATIONS } from '../../assets/images/illustrations.js';
import { store } from '../store.js';

export function renderCatatan() {
  const logs = store.getLogs();
  const books = store.getBooks();

  const logRows = logs.length > 0
    ? logs.map((l, idx) => `
        <tr>
          <td style="font-weight: 600; color: var(--text-muted); width: 40px; text-align: center;">${idx + 1}</td>
          <td style="min-width: 140px;">
            <div style="font-weight: 700; color: #0f172a;">${l.bookTitle}</div>
            <div style="font-size: 0.76rem; color: var(--text-muted);">${l.pageRange || ''} • ⏱️ ${l.durationMinutes || 30} menit</div>
          </td>
          <td>
            <div style="font-size: 0.88rem; color: #334155; line-height: 1.5; max-width: 460px;">
              ${escapeHtml(l.notes)}
            </div>
          </td>
          <td style="white-space: nowrap; color: #475569; font-weight: 500;">
            📅 ${formatDate(l.date)}
          </td>
          <td style="width: 80px;">
            <button class="btn btn-sm btn-outline" style="color: #ef4444; border-color: #fecaca;" onclick="window.app.deleteLog('${l.id}')" title="Hapus Catatan">
              Hapus
            </button>
          </td>
        </tr>
      `).join('')
    : `<tr><td colspan="5" style="text-align:center; padding: 28px; color: var(--text-muted);">Belum ada catatan membaca tersimpan. Catat bacaan pertamamu di atas!</td></tr>`;

  return `
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Catatan Membaca</h1>
        <p class="page-subtitle">Tuliskan hal-hal penting yang kamu dapatkan dari buku yang kamu baca untuk memperdalam pemahaman.</p>
      </div>

      <!-- Split Layout Sesuai Mockup 3 -->
      <div class="page-split-layout">
        <!-- Form Card Sesuai Mockup 3 -->
        <div class="card">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 16px;">
            Tambah Catatan Sesi Membaca
          </h3>
          <form id="form-add-log" onsubmit="window.app.handleSaveLog(event)">
            <div class="form-group">
              <label class="form-label">Judul Buku</label>
              <select id="log-book-select" class="form-control" onchange="window.app.handleLogBookSelect(this)" required>
                <option value="">-- Pilih Buku yang Sedang Dibaca --</option>
                ${books.map(b => `<option value="${b.id}" data-title="${b.title}">${b.title} (${b.author})</option>`).join('')}
                <option value="custom">+ Judul Buku Lain...</option>
              </select>
              <input type="text" id="log-book-custom" class="form-control" placeholder="Tulis judul buku..." style="display: none; margin-top: 8px;" />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="form-group">
                <label class="form-label">Rentang Halaman / Bab</label>
                <input type="text" id="log-range" class="form-control" placeholder="Contoh: Hal 180 - 210" required />
              </div>
              <div class="form-group">
                <label class="form-label">Jumlah Halaman Dibaca</label>
                <input type="number" id="log-pages-read" class="form-control" placeholder="Contoh: 30" min="1" required />
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="form-group">
                <label class="form-label">Durasi Membaca (Menit)</label>
                <input type="number" id="log-duration" class="form-control" placeholder="Contoh: 35" min="1" value="30" required />
              </div>
              <div class="form-group">
                <label class="form-label">Tanggal Sesi</label>
                <input type="date" id="log-date" class="form-control" value="${new Date().toISOString().split('T')[0]}" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Catatan / Poin Penting / Kutipan</label>
              <textarea id="log-notes" class="form-control" rows="3" placeholder="Tuliskan gagasan utama, pelajaran penting, atau kutipan yang berkesan..." required></textarea>
            </div>

            <div style="display: flex; justify-content: flex-end; margin-top: 18px;">
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                💾 Simpan Catatan & Update Streak
              </button>
            </div>
          </form>
        </div>

        <!-- Illustration Card Sesuai Mockup 3 -->
        <div class="illustration-card">
          ${ILLUSTRATIONS.notesArt}
          <div style="margin-top: 14px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">
              Fase Pemantauan (Performance)
            </h4>
            <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 280px; margin: 0 auto; line-height: 1.45;">
              Mencatat pemahaman membantu memindahkan ingatan jangka pendek ke jangka panjang dan memperkuat rasa pencapaian (Bandura, 1977).
            </p>
          </div>
        </div>
      </div>

      <!-- Section Daftar Catatan Sesuai Mockup 3 -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b;">Daftar Catatan</h3>
            <p style="font-size: 0.84rem; color: var(--text-muted);">Riwayat catatan membaca harian yang telah kamu dokumentasikan.</p>
          </div>
          <span class="badge badge-green">${logs.length} Catatan Tersimpan</span>
        </div>

        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th style="text-align: center;">No</th>
                <th>Judul Buku</th>
                <th>Catatan / Ringkasan</th>
                <th>Tanggal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${logRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  return `${String(d.getDate()).padStart(2, '0')} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

