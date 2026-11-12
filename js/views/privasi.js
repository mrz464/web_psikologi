// privasi.js - View Privasi, Etika Pengembangan, dan Bantuan Layanan BK
// Disusun berdasarkan Bab 1.6 & Bab 2.5 Proposal Penelitian Read Daily

export function renderPrivasi() {
  return `
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Privasi & Bantuan BK</h1>
        <p class="page-subtitle">Komitmen kerahasiaan data siswa, batas fungsionalitas media, serta kontak pendampingan belajar.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Card 1: Etika Pengembangan & Kerahasiaan Data (Bab 2.5) -->
        <div class="card">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 14px;">
            🔒 Kebijakan Privasi dan Etika Pengembangan
          </h3>
          <p style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 12px;">
            Sesuai dengan etika pengembangan teknologi Bimbingan dan Konseling bagi siswa SMA/SMK (Bab 2.5):
          </p>
          <ul style="padding-left: 20px; font-size: 0.88rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 10px; line-height: 1.55;">
            <li>
              <strong style="color: #1e293b;">Persetujuan Partisipasi & Kerahasiaan:</strong> Seluruh data aktivitas membaca, catatan sesi, dan refleksi pribadi disimpan secara aman di peramban (browser) masing-masing siswa dan tidak disebarluaskan kepada pihak ketiga yang tidak berwenang.
            </li>
            <li>
              <strong style="color: #1e293b;">Batas Otomasi & Transparansi:</strong> Website Read Daily berfungsi sebagai media pendukung regulasi diri (self-regulated learning) siswa, <em>bukan sebagai alat diagnosis psikologis mutlak</em> atau pengukur nilai akademis.
            </li>
            <li>
              <strong style="color: #1e293b;">Peran Pendampingan Guru BK:</strong> Media ini melengkapi dan mendukung layanan Bimbingan Konseling belajar, bukan pengganti hubungan konseling individual atau kelompok secara tatap muka.
            </li>
          </ul>
        </div>

        <!-- Card 2: Informasi Pengembang & Riset Akademik -->
        <div class="card" style="background: #fbfcfe; border-left: 4px solid #2563eb;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e3a8a; margin-bottom: 8px;">
            Informasi Riset & Pengembang
          </h3>
          <p style="font-size: 0.88rem; color: #475569; margin-bottom: 16px;">
            Website ini dikembangkan dalam rangka tugas Ujian Tengah Semester mata kuliah Pengembangan Teknologi Bimbingan dan Konseling.
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; font-size: 0.86rem;">
            <div>
              <span style="color: var(--text-muted); font-size: 0.76rem; text-transform: uppercase; font-weight: 700; display: block;">Pengembang / Peneliti</span>
              <strong>Hurratud Daraini</strong>
              <div style="color: var(--text-muted); font-size: 0.8rem;">NPM: 2411080120 (Semester V/A)</div>
            </div>
            <div>
              <span style="color: var(--text-muted); font-size: 0.76rem; text-transform: uppercase; font-weight: 700; display: block;">Dosen Pengampu</span>
              <strong>Mega Aria Monica, M.Pd</strong>
              <div style="color: var(--text-muted); font-size: 0.8rem;">Pengembangan Teknologi BK</div>
            </div>
            <div>
              <span style="color: var(--text-muted); font-size: 0.76rem; text-transform: uppercase; font-weight: 700; display: block;">Program Studi & Institusi</span>
              <strong>Bimbingan Konseling Pendidikan Islam</strong>
              <div style="color: var(--text-muted); font-size: 0.8rem;">FTK UIN Raden Intan Lampung (2026)</div>
            </div>
          </div>
        </div>

        <!-- Card 3: Bantuan Konseling & Hubungi Guru BK -->
        <div class="card">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 12px;">
            💬 Butuh Konsultasi Kendala Belajar?
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px; line-height: 1.5;">
            Jika kamu mengalami kejenuhan belajar, kesulitan konsentrasi, atau kecemasan akademik dalam membagi waktu membaca dan sekolah, kamu dapat berkonsultasi langsung dengan Guru BK di sekolahmu.
          </p>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="mailto:mega.ariamonica@radenintan.ac.id" class="btn btn-outline" style="font-size: 0.86rem;">
              ✉️ Kirim Pesan ke Guru BK
            </a>
            <button class="btn btn-soft" style="font-size: 0.86rem;" onclick="window.app.navigate('petunjuk')">
              📖 Baca Kembali Panduan
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

