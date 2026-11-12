// progress.js - View Halaman Progress Membaca sesuai Mockup 4 (Gambar 3.2 Lampiran 5)
import { store } from '../store.js';

export function renderProgress() {
  const stats = store.getStats();
  const streak = store.getStreak();
  const books = store.getBooks();

  // Calculate SVG circular stroke
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const percent = stats.completionPercentage || 0;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  // Max minutes for weekly bar scaling
  const maxMinutes = Math.max(60, ...streak.historyDays.map(d => d.minutes || 0));

  const barElements = streak.historyDays.map(d => {
    const heightPercent = Math.min(100, Math.round(((d.minutes || 0) / maxMinutes) * 100));
    return `
      <div class="bar-col">
        <div class="bar-track">
          <div class="bar-tooltip">${d.minutes} mnt (${d.pages || 0} hal)</div>
          <div class="bar-fill" style="height: ${heightPercent}%;"></div>
        </div>
        <span class="bar-day-label">${d.day}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="page-container">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; flex-wrap: wrap; gap: 14px;">
        <div class="page-header" style="margin-bottom: 0;">
          <h1 class="page-title">Progress Membaca</h1>
          <p class="page-subtitle">Lihat perkembangan membacamu dan raih targetmu secara konsisten.</p>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-primary" onclick="window.app.openReadingTimer()">
            ⏱️ Timer Membaca Fokus
          </button>
          <button class="btn btn-outline" style="background: white;" onclick="window.app.openPrintReportModal()">
            🖨️ Cetak Rekapitulasi untuk Guru BK
          </button>
        </div>
      </div>

      <!-- Streak Banner Sesuai Teori Habit Formation & Gamifikasi Mockup -->
      <div class="streak-banner">
        <div class="streak-left">
          <div class="streak-flame-circle">🔥</div>
          <div>
            <div class="streak-title">${streak.currentStreak} Hari Reading Streak!</div>
            <div class="streak-sub">
              ${streak.currentStreak >= 5
                ? 'Luar biasa! Konsistensimu menjaga kebiasaan membaca terbentuk kuat. Pertahankan!'
                : 'Bagus! Lanjutkan membaca hari ini untuk menambah streak-mu.'}
            </div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.76rem; color: #9a3412; font-weight: 700; text-transform: uppercase;">Rekor Tertinggi</div>
          <div style="font-size: 1.35rem; font-weight: 800; color: #c2410c;">🏆 ${streak.longestStreak} Hari</div>
        </div>
      </div>

      <!-- Stat Cards Ringkasan Sesuai Mockup 4 -->
      <div class="progress-stats-grid">
        <div class="stat-metric-card">
          <div class="stat-icon" style="background: #eff6ff; color: #2563eb;">📚</div>
          <div>
            <div class="stat-number">${stats.totalBooks}</div>
            <div class="stat-label">Total Buku</div>
          </div>
        </div>

        <div class="stat-metric-card">
          <div class="stat-icon" style="background: #ecfdf5; color: #059669;">✅</div>
          <div>
            <div class="stat-number">${stats.completedBooks}</div>
            <div class="stat-label">Buku Selesai</div>
          </div>
        </div>

        <div class="stat-metric-card">
          <div class="stat-icon" style="background: #fffbeb; color: #d97706;">📖</div>
          <div>
            <div class="stat-number">${stats.readingBooks}</div>
            <div class="stat-label">Sedang Dibaca</div>
          </div>
        </div>

        <div class="stat-metric-card">
          <div class="stat-icon" style="background: #f1f5f9; color: #64748b;">⏳</div>
          <div>
            <div class="stat-number">${stats.wantToReadBooks}</div>
            <div class="stat-label">Belum Dibaca</div>
          </div>
        </div>
      </div>

      <!-- Two-Column Progress Grid Sesuai Mockup 4 -->
      <div class="progress-charts-grid">
        <!-- Donut Progress Chart Sesuai Mockup 4 -->
        <div class="card donut-chart-box">
          <h3 style="font-size: 1.1rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">
            Target Tercapai
          </h3>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 20px;">
            Rasio penyelesaian buku di rak digital
          </p>

          <div class="donut-visual-wrapper">
            <svg viewBox="0 0 160 160" width="170" height="170" class="donut-svg">
              <circle
                cx="80"
                cy="80"
                r="${radius}"
                fill="none"
                stroke="#e2e8f0"
                stroke-width="14"
              />
              <circle
                cx="80"
                cy="80"
                r="${radius}"
                fill="none"
                stroke="#2563eb"
                stroke-width="14"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${strokeDashoffset}"
                stroke-linecap="round"
                transform="rotate(-90 80 80)"
                style="transition: stroke-dashoffset 0.8s ease;"
              />
            </svg>
            <div class="donut-center-text">
              <div class="donut-percentage">${percent}%</div>
              <div class="donut-label">Tercapai</div>
            </div>
          </div>

          <div style="width: 100%; border-top: 1px solid var(--border-color); padding-top: 16px; margin-top: 8px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.86rem; margin-bottom: 6px;">
              <span style="color: var(--text-muted);">Total Halaman Dibaca</span>
              <strong style="color: #0f172a;">${stats.totalPagesRead} Hal</strong>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.86rem;">
              <span style="color: var(--text-muted);">Total Waktu Membaca</span>
              <strong style="color: #0f172a;">${stats.totalMinutesRead} Menit</strong>
            </div>
          </div>
        </div>

        <!-- Weekly Bar Chart Sesuai Mockup 4 (Grafik Progress) -->
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div>
              <h3 style="font-size: 1.1rem; font-weight: 700; color: #1e293b;">Grafik Progress</h3>
              <p style="font-size: 0.82rem; color: var(--text-muted);">Durasi waktu membaca (menit) dalam 7 hari terakhir</p>
            </div>
            <span class="badge badge-blue">Minggu Ini</span>
          </div>

          <div class="bar-chart-container">
            <div class="bar-chart-bars">
              ${barElements}
            </div>
          </div>

          <div style="display: flex; justify-content: space-around; margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border-color); text-align: center;">
            <div>
              <div style="font-size: 0.74rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Rata-rata Harian</div>
              <div style="font-size: 1.15rem; font-weight: 800; color: #2563eb;">
                ${Math.round(streak.historyDays.reduce((a, c) => a + (c.minutes || 0), 0) / 7)} mnt
              </div>
            </div>
            <div>
              <div style="font-size: 0.74rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Hari Paling Produktif</div>
              <div style="font-size: 1.15rem; font-weight: 800; color: #10b981;">Sabtu (60 mnt)</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Self-Regulation Assessment Insight Card (Sesuai Bab II Teori Zimmerman) -->
      <div class="card" style="background: #fbfcfe; border-left: 4px solid #3b82f6;">
        <h4 style="font-size: 0.98rem; font-weight: 700; color: #1e3a8a; margin-bottom: 4px;">
          Indikator Regulasi Diri Siswa (Self-Regulated Learning)
        </h4>
        <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 14px;">
          Berdasarkan teori Zimmerman (2002), pemantauan ini mencakup 3 pilar utama:
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
          <div style="background: white; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <div style="font-size: 0.82rem; font-weight: 700; color: #2563eb;">1. Perencanaan (Forethought)</div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">Penetapan target bacaan di rak digital & rencana deadline.</div>
          </div>
          <div style="background: white; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <div style="font-size: 0.82rem; font-weight: 700; color: #059669;">2. Pemantauan (Performance)</div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">Pencatatan sesi harian & menjaga Reading Streak.</div>
          </div>
          <div style="background: white; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <div style="font-size: 0.82rem; font-weight: 700; color: #7c3aed;">3. Refleksi Diri (Self-Reflection)</div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">Evaluasi hambatan & strategi perbaikan mingguan.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

