// refleksi.js - View Halaman Refleksi sesuai Mockup 5 (Gambar 3.2 Lampiran 5)
import { store } from '../store.js';

export function renderRefleksi() {
  const reflections = store.getReflections();
  const books = store.getBooks();

  const reflectionCards = reflections.length > 0
    ? reflections.map(r => `
        <div class="reflection-highlight-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="reflection-date-pill">📅 ${formatDate(r.date)}</span>
              <strong style="color: #1e3a8a; font-size: 0.95rem;">Buku: ${r.bookTitle || 'Bacaan Minggu Ini'}</strong>
            </div>
            <button class="btn btn-sm btn-outline" style="color: #ef4444; border-color: #fecaca;" onclick="window.app.deleteReflection('${r.id}')" title="Hapus">
              Hapus
            </button>
          </div>

          <div class="reflection-quote-block">
            “${escapeHtml(r.qExperience)}”
          </div>

          <div class="reflection-sub-meta">
            <div class="reflection-meta-item">
              <strong>Hambatan / Distraksi yang Dihadapi:</strong>
              <span>${escapeHtml(r.qObstacles || '-')}</span>
            </div>
            <div class="reflection-meta-item">
              <strong>Rencana Perbaikan Minggu Depan:</strong>
              <span>${escapeHtml(r.qImprovement || '-')}</span>
            </div>
          </div>
        </div>
      `).join('')
    : `<div style="text-align: center; padding: 32px; background: white; border-radius: 12px; border: 1px dashed #cbd5e1; color: var(--text-muted);">
        Belum ada lembar refleksi yang disimpan. Tulis refleksi mingguan pertamamu di atas!
      </div>`;

  return `
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Refleksi Membaca</h1>
        <p class="page-subtitle">Apa yang kamu rasakan setelah membaca buku ini? Evaluasi hambatan dan tentukan perbaikan untuk sesi berikutnya.</p>
      </div>

      <!-- Form Pengisian Refleksi Sesuai Mockup 5 -->
      <div class="card" style="margin-bottom: 28px;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 16px;">
          Lembar Evaluasi Diri Mingguan (Self-Reflection)
        </h3>

        <form id="form-add-reflection" onsubmit="window.app.handleSaveReflection(event)">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="form-group">
              <label class="form-label">Buku yang Direfleksikan</label>
              <select id="ref-book-title" class="form-control" required>
                <option value="">-- Pilih Buku --</option>
                ${books.map(b => `<option value="${b.title}">${b.title} (${b.author})</option>`).join('')}
                <option value="Bacaan Umum / Artikel">+ Bacaan Lain / Umum</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Tanggal Refleksi</label>
              <input type="date" id="ref-date" class="form-control" value="${new Date().toISOString().split('T')[0]}" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">1. Apa pemahaman baru atau kesan yang paling berharga yang kamu dapatkan?</label>
            <textarea id="ref-experience" class="form-control" rows="3" placeholder="Tuliskan pengalaman membacamu dan intisari hikmah yang dipetik..." required></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">2. Hambatan apa yang paling menyulitkanmu mempertahankan jadwal membaca minggu ini? (Misal: gawai/sosmed, tugas sekolah, rasa kantuk)</label>
            <textarea id="ref-obstacles" class="form-control" rows="2" placeholder="Ceritakan kendala atau distraksi yang dialami secara jujur..." required></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">3. Strategi apa yang akan kamu lakukan untuk mengatasi kendala tersebut minggu depan?</label>
            <textarea id="ref-improvement" class="form-control" rows="2" placeholder="Contoh: Mengatur alarm membaca, membatasi durasi scroll media sosial sebelum tidur..." required></textarea>
          </div>

          <div style="display: flex; justify-content: flex-end; margin-top: 18px;">
            <button type="submit" class="btn btn-primary" style="min-width: 160px;">
              💾 Simpan Refleksi
            </button>
          </div>
        </form>
      </div>

      <!-- Section Refleksi Terakhir Sesuai Mockup 5 -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b;">Refleksi Terakhir</h3>
            <p style="font-size: 0.84rem; color: var(--text-muted);">Riwayat evaluasi berkala untuk melihat pertumbuhan kebiasaan membacamu.</p>
          </div>
          <span class="badge badge-purple">${reflections.length} Catatan Refleksi</span>
        </div>

        <div>
          ${reflectionCards}
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

