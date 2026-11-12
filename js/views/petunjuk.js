// petunjuk.js - View Petunjuk Penggunaan Produk Read Daily
// Mengikuti Gambar 3.1 Bagan Alur Penggunaan Produk (Lampiran 4)

export function renderPetunjuk() {
  return `
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">Petunjuk Penggunaan</h1>
        <p class="page-subtitle">Panduan langkah demi langkah menggunakan Read Daily untuk membangun kebiasaan membaca secara mandiri.</p>
      </div>

      <!-- Bagan Alur Interaktif Sesuai Gambar 3.1 Lampiran 4 -->
      <div class="card" style="margin-bottom: 28px;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 12px;">
          Bagan Alur Penggunaan Read Daily
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px;">
          Ikuti alur tahapan regulasi diri (Zimmerman, 2002) berikut untuk mendapatkan hasil pembiasaan yang optimal:
        </p>

        <div style="display: flex; align-items: center; justify-content: space-between; overflow-x: auto; padding: 10px 0; gap: 8px;">
          <div style="background: #ea580c; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 75px;">
            Mulai
          </div>
          <span style="color: #94a3b8; font-weight: bold;">➔</span>
          <div style="background: #64748b; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 85px;">
            Beranda
          </div>
          <span style="color: #94a3b8; font-weight: bold;">➔</span>
          <div style="background: #f59e0b; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 95px;">
            Petunjuk
          </div>
          <span style="color: #94a3b8; font-weight: bold;">➔</span>
          <div style="background: #0284c7; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 85px;">
            Rak Buku
          </div>
          <span style="color: #94a3b8; font-weight: bold;">➔</span>
          <div style="background: #10b981; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 85px;">
            Target
          </div>
          <span style="color: #94a3b8; font-weight: bold;">➔</span>
          <div style="background: #ea580c; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 85px;">
            Refleksi
          </div>
          <span style="color: #94a3b8; font-weight: bold;">➔</span>
          <div style="background: #475569; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 105px;">
            Privasi & Info
          </div>
        </div>
      </div>

      <!-- Step Cards -->
      <div class="steps-timeline">
        <div class="step-card">
          <div class="step-number">1</div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 1: Tata Rak Buku Digital</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">
              Buka menu <strong>Rak Buku</strong> untuk mencatat buku-buku yang ingin kamu baca. Kamu dapat mengelompokkannya menjadi buku yang sedang dibaca, buku rencana mendatang, atau yang sudah tamat.
            </p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">2</div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 2: Tentukan Target pada Rencana Membaca</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">
              Masuk ke menu <strong>Rencana Membaca</strong>. Buat target yang realistis (misal: 15-20 halaman per hari atau 30 menit per hari) beserta batas tanggal penyelesaian (deadline).
            </p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">3</div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 3: Catat Sesi Bacaan di Catatan Membaca</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">
              Setiap kali selesai membaca, buka menu <strong>Catatan Membaca</strong>. Tuliskan rentang halaman yang selesai, durasi, serta poin-poin penting atau kutipan berharga. Sistem otomatis akan memperbarui <strong>Reading Streak</strong> harianmu!
            </p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">4</div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 4: Pantau Ketercapaian di Menu Progress</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">
              Periksa menu <strong>Progress</strong> untuk melihat persentase penyelesaian target, total menit membaca dalam sepekan, dan grafik aktivitas harian.
            </p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">5</div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 5: Isi Lembar Refleksi Mingguan</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">
              Di akhir pekan, luangkan 5 menit untuk mengisi menu <strong>Refleksi</strong>. Identifikasi apakah ada hambatan (seperti gawai atau distraksi tugas) dan rencanakan langkah solutif untuk minggu berikutnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

