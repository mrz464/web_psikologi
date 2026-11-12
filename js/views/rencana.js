// rencana.js - View Halaman Rencana Membaca sesuai Mockup 2 (Gambar 3.2 Lampiran 5)
import { ILLUSTRATIONS } from '../../assets/images/illustrations.js';
import { store } from '../store.js';

export function renderRencana() {
  const plans = store.getPlans();
  const books = store.getBooks();

  const planRows = plans.length > 0
    ? plans.map((p, idx) => `
        <tr>
          <td style="font-weight: 600; color: var(--text-muted); width: 40px; text-align: center;">${idx + 1}</td>
          <td>
            <div style="font-weight: 700; color: #0f172a;">${p.bookTitle}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${p.dailyPace || 'Target bertahap'}</div>
          </td>
          <td>
            <span class="badge badge-blue">${p.targetValue}</span>
          </td>
          <td style="color: #475569; font-weight: 500;">
            📅 ${p.deadline ? formatDate(p.deadline) : '-'}
          </td>
          <td>
            ${p.status === 'completed'
              ? `<span class="badge badge-green">✓ Tercapai</span>`
              : `<span class="badge badge-orange">⏳ Berjalan</span>`}
          </td>
          <td>
            <div style="display: flex; gap: 8px;">
              ${p.status !== 'completed'
                ? `<button class="btn btn-sm btn-soft" onclick="window.app.togglePlanComplete('${p.id}')" title="Tandai Selesai">
                    ✓ Selesai
                  </button>`
                : ''}
              <button class="btn btn-sm btn-outline" style="color: #ef4444; border-color: #fecaca;" onclick="window.app.deletePlan('${p.id}')" title="Hapus">
                Hapus
              </button>
            </div>
          </td>
        </tr>
      `).join('')
    : `<tr><td colspan="6" style="text-align:center; padding: 28px; color: var(--text-muted);">Belum ada target rencana membaca. Tambahkan target pertamamu di atas!</td></tr>`;

  return `
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Rencana Membaca</h1>
        <p class="page-subtitle">Tetapkan target membaca yang ingin kamu capai untuk membangun regulasi diri dan rutinitas positif.</p>
      </div>

      <!-- Split Layout: Form & Art Sesuai Mockup 2 -->
      <div class="page-split-layout">
        <!-- Form Card -->
        <div class="card">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 16px;">
            Tambah Target Rencana Baru
          </h3>
          <form id="form-add-plan" onsubmit="window.app.handleSavePlan(event)">
            <div class="form-group">
              <label class="form-label">Judul Buku</label>
              <div style="display: flex; gap: 8px;">
                <select id="plan-book-select" class="form-control" onchange="window.app.handlePlanBookSelect(this)">
                  <option value="">-- Pilih Buku dari Rak atau Ketik Baru --</option>
                  ${books.map(b => `<option value="${b.id}" data-title="${b.title}">${b.title} (${b.author})</option>`).join('')}
                  <option value="custom">+ Tulis Judul Buku Lain...</option>
                </select>
              </div>
              <input type="text" id="plan-book-custom" class="form-control" placeholder="Masukkan judul buku..." style="display: none; margin-top: 8px;" />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
              <div class="form-group">
                <label class="form-label">Target Membaca</label>
                <input type="text" id="plan-target" class="form-control" placeholder="Contoh: 200 Halaman / Tamat" required />
              </div>
              <div class="form-group">
                <label class="form-label">Kecepatan Harian</label>
                <input type="text" id="plan-pace" class="form-control" placeholder="Contoh: 15 Hal / Hari" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Deadline / Batas Waktu</label>
              <input type="date" id="plan-deadline" class="form-control" required />
            </div>

            <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                💾 Simpan Rencana
              </button>
            </div>
          </form>
        </div>

        <!-- Illustration Card Sesuai Mockup 2 -->
        <div class="illustration-card">
          ${ILLUSTRATIONS.planningArt}
          <div style="margin-top: 14px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">
              Prinsip Penetapan Target (SRL)
            </h4>
            <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 280px; margin: 0 auto; line-height: 1.45;">
              Target yang spesifik, realistis, dan memiliki batas waktu akan meningkatkan komitmen belajar serta konsistensi membaca secara mandiri.
            </p>
          </div>
        </div>
      </div>

      <!-- Section Daftar Rencana Sesuai Mockup 2 -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b;">Daftar Rencana</h3>
            <p style="font-size: 0.84rem; color: var(--text-muted);">Pantau dan kelola seluruh target bacaan aktif maupun selesai.</p>
          </div>
          <span class="badge badge-blue">${plans.length} Target Tersimpan</span>
        </div>

        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th style="text-align: center;">No</th>
                <th>Judul Buku</th>
                <th>Target</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${planRows}
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

