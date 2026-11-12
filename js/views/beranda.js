// beranda.js - View Halaman Beranda sesuai Mockup 1 (Gambar 3.2 Lampiran 5)
import { ILLUSTRATIONS } from '../../assets/images/illustrations.js';
import { store } from '../store.js';

export function renderBeranda() {
  const user = store.getUser();
  const streak = store.getStreak();
  const books = store.getBooks();
  const activeBook = books.find(b => b.status === 'reading') || books[0];

  return `
    <div class="page-container">
      <!-- Hero Banner sesuai Mockup Gambar 3.2 Lampiran 5 -->
      <div class="hero-card">
        <div class="hero-content">
          <span class="hero-tag">Media Bimbingan & Konseling Belajar</span>
          <h1 class="hero-title">Selamat Datang di<br>Read Daily!</h1>
          <p class="hero-desc">
            Bersama, wujudkan kebiasaan membaca yang lebih baik, setiap hari. Bangun regulasi diri, pantau progres, dan raih wawasan baru.
          </p>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="window.app.navigate('rencana')">
              Mulai Sekarang &rarr;
            </button>
            <button class="btn btn-outline" style="background: white;" onclick="window.app.navigate('petunjuk')">
              📖 Petunjuk Penggunaan
            </button>
          </div>
        </div>
        <div class="hero-art-container">
          ${ILLUSTRATIONS.booksHero}
        </div>
      </div>

      <!-- Quick Status Strip -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div class="card" style="display: flex; align-items: center; gap: 16px; padding: 18px;">
          <div style="width: 46px; height: 46px; border-radius: 12px; background: #fff7ed; color: #ea580c; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
            🔥
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Reading Streak</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: #9a3412;">${streak.currentStreak} Hari Berturut-turut</div>
          </div>
        </div>

        <div class="card" style="display: flex; align-items: center; gap: 16px; padding: 18px;">
          <div style="width: 46px; height: 46px; border-radius: 12px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
            📖
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Sedang Dibaca</div>
            <div style="font-size: 1.05rem; font-weight: 700; color: #1e3a8a;">${activeBook ? activeBook.title : 'Belum ada buku'}</div>
          </div>
        </div>

        <div class="card" style="display: flex; align-items: center; gap: 16px; padding: 18px;">
          <div style="width: 46px; height: 46px; border-radius: 12px; background: #f0fdf4; color: #16a34a; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
            🎯
          </div>
          <div>
            <div style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Target Harian</div>
            <div style="font-size: 1.15rem; font-weight: 700; color: #166534;">${user.dailyTargetMinutes || 30} Menit / ${user.dailyTargetPages || 15} Halaman</div>
          </div>
        </div>
      </div>

      <!-- Fitur Utama Grid sesuai Mockup -->
      <div style="margin-bottom: 32px;">
        <h2 class="features-section-title">Fitur Utama</h2>
        <p class="features-section-sub">Semua yang kamu butuhkan untuk membantu mengatur, membaca, dan merefleksi kegiatan membaca setiap hari</p>

        <div class="features-grid">
          <!-- Card 1: Rencana Membaca -->
          <div class="feature-card" onclick="window.app.navigate('rencana')">
            <div class="feature-icon-wrapper" style="background: #eff6ff; color: #2563eb;">
              🎯
            </div>
            <div class="feature-card-title">
              Rencana Membaca
              <span class="badge badge-blue">Target</span>
            </div>
            <p class="feature-card-desc">
              Tentukan target membaca harian atau mingguan, baik jumlah halaman maupun durasi waktu membaca yang terukur.
            </p>
            <div class="feature-card-link">
              Buka Rencana Membaca &rarr;
            </div>
          </div>

          <!-- Card 2: Catatan Membaca -->
          <div class="feature-card" onclick="window.app.navigate('catatan')">
            <div class="feature-icon-wrapper" style="background: #ecfdf5; color: #059669;">
              📝
            </div>
            <div class="feature-card-title">
              Catatan Membaca
              <span class="badge badge-green">Jurnal</span>
            </div>
            <p class="feature-card-desc">
              Catat ringkasan, kutipan inspiratif, dan halaman yang telah kamu selesaikan dalam setiap sesi membaca.
            </p>
            <div class="feature-card-link" style="color: #059669;">
              Tulis Catatan Harian &rarr;
            </div>
          </div>

          <!-- Card 3: Progress -->
          <div class="feature-card" onclick="window.app.navigate('progress')">
            <div class="feature-icon-wrapper" style="background: #e0f2fe; color: #0284c7;">
              📊
            </div>
            <div class="feature-card-title">
              Progress
              <span class="badge badge-blue">Pantau</span>
            </div>
            <p class="feature-card-desc">
              Pantau grafik ketercapaian target, persentase buku selesai, serta pertahankan Reading Streak berturut-turut.
            </p>
            <div class="feature-card-link" style="color: #0284c7;">
              Lihat Grafik Progress &rarr;
            </div>
          </div>

          <!-- Card 4: Refleksi -->
          <div class="feature-card" onclick="window.app.navigate('refleksi')">
            <div class="feature-icon-wrapper" style="background: #f5f3ff; color: #7c3aed;">
              💭
            </div>
            <div class="feature-card-title">
              Refleksi
              <span class="badge badge-purple">Evaluasi</span>
            </div>
            <p class="feature-card-desc">
              Evaluasi diri secara mingguan mengenai pemahaman, hambatan yang dihadapi, dan langkah perbaikan ke depan.
            </p>
            <div class="feature-card-link" style="color: #7c3aed;">
              Isi Lembar Refleksi &rarr;
            </div>
          </div>

          <!-- Card 5: Rak Buku Digital -->
          <div class="feature-card" onclick="window.app.navigate('rak')">
            <div class="feature-icon-wrapper" style="background: #fffbeb; color: #d97706;">
              📚
            </div>
            <div class="feature-card-title">
              Perpustakaan Digital
              <span class="badge badge-orange">Rak Buku</span>
            </div>
            <p class="feature-card-desc">
              Simpan dan atur daftar buku favoritmu: ingin dibaca, sedang dibaca, hingga buku yang sudah tuntas dibaca.
            </p>
            <div class="feature-card-link" style="color: #d97706;">
              Kelola Rak Buku &rarr;
            </div>
          </div>

          <!-- Card 6: Book Buddy & Profil -->
          <div class="feature-card" onclick="window.app.navigate('buddy')">
            <div class="feature-icon-wrapper" style="background: #f0fdfa; color: #0d9488;">
              🤝
            </div>
            <div class="feature-card-title">
              Book Buddy
              <span class="badge badge-green">Komunitas</span>
            </div>
            <p class="feature-card-desc">
              Ruang berbagi kesan, kutipan favorit, dan saling memberi semangat bersama teman untuk menjaga motivasi membaca.
            </p>
            <div class="feature-card-link" style="color: #0d9488;">
              Buka Book Buddy &rarr;
            </div>
          </div>
        </div>
      </div>

      <!-- Quote Banner Sesuai Mockup Gambar 3.2 -->
      <div class="quote-banner">
        <div class="quote-icon">“</div>
        <div>
          <div class="quote-text">
            “Membaca bukan hanya tentang menambah pengetahuan, tetapi juga tentang memperluas cara pandang.”
          </div>
          <div class="quote-author">— Read Daily</div>
        </div>
      </div>
    </div>
  `;
}

