// profil.js - View Halaman Profil Saya sesuai Mockup 6 (Gambar 3.2 Lampiran 5)
import { store } from '../store.js';

export function renderProfil() {
  const user = store.getUser();
  const stats = store.getStats();

  return `
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Profil Saya</h1>
        <p class="page-subtitle">Kelola informasi diri, identitas akademik sekolah, serta preferensi pembiasaan membaca.</p>
      </div>

      <div class="profile-card-layout">
        <!-- Sidebar Profile Card Sesuai Mockup 6 -->
        <div class="profile-sidebar-card">
          <div class="profile-big-avatar">
            ${user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <h2 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">
            ${user.name}
          </h2>
          <div style="font-size: 0.88rem; color: #2563eb; font-weight: 600; margin-bottom: 4px;">
            ${user.grade} • ${user.school}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 20px;">
            ${user.email}
          </div>

          <div style="width: 100%; border-top: 1px solid var(--border-color); padding-top: 18px; text-align: left;">
            <div style="margin-bottom: 12px;">
              <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Guru BK Pendamping</span>
              <strong style="font-size: 0.88rem; color: #1e293b;">${user.bkTeacher || 'Mega Aria Monica, M.Pd'}</strong>
            </div>
            <div style="margin-bottom: 12px;">
              <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Reading Streak</span>
              <strong style="font-size: 0.88rem; color: #ea580c;">🔥 ${stats.currentStreak} Hari Aktif</strong>
            </div>
            <div>
              <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Total Buku Diselesaikan</span>
              <strong style="font-size: 0.88rem; color: #059669;">✅ ${stats.completedBooks} dari ${stats.totalBooks} Buku</strong>
            </div>
          </div>

          <div style="margin-top: 24px; width: 100%;">
            <button class="btn btn-outline" style="width: 100%; font-size: 0.82rem;" onclick="window.app.resetDemoData()">
              🔄 Reset ke Data Demo Proposal
            </button>
          </div>
        </div>

        <!-- Form Edit Profil Sesuai Mockup 6 -->
        <div class="card">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 20px;">
            Informasi Pribadi & Pengaturan Akun
          </h3>

          <form id="form-user-profile" onsubmit="window.app.handleSaveProfile(event)">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div class="form-group">
                <label class="form-label">Nama Lengkap</label>
                <input type="text" id="prof-name" class="form-control" value="${user.name}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Kelas</label>
                <input type="text" id="prof-grade" class="form-control" value="${user.grade}" required />
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div class="form-group">
                <label class="form-label">Asal Sekolah</label>
                <input type="text" id="prof-school" class="form-control" value="${user.school}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Email Siswa</label>
                <input type="email" id="prof-email" class="form-control" value="${user.email}" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Guru Bimbingan & Konseling (BK)</label>
              <input type="text" id="prof-bkteacher" class="form-control" value="${user.bkTeacher || 'Mega Aria Monica, M.Pd'}" required />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div class="form-group">
                <label class="form-label">Komitmen Waktu Harian (Menit)</label>
                <input type="number" id="prof-target-minutes" class="form-control" value="${user.dailyTargetMinutes || 30}" min="5" required />
              </div>
              <div class="form-group">
                <label class="form-label">Target Halaman / Hari</label>
                <input type="number" id="prof-target-pages" class="form-control" value="${user.dailyTargetPages || 15}" min="1" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Bio Singkat / Motivasi Membaca</label>
              <textarea id="prof-bio" class="form-control" rows="3">${user.bio || ''}</textarea>
            </div>

            <div style="display: flex; justify-content: flex-end; margin-top: 24px;">
              <button type="submit" class="btn btn-primary" style="min-width: 170px;">
                💾 Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

