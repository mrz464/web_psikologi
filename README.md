# Read Daily - Media Pendukung Regulasi Diri Membaca Siswa SMA/SMK

Website **Read Daily** dikembangkan berdasarkan proposal penelitian:
> **"Pengembangan Website Read Daily sebagai Media Pendukung Regulasi Diri dalam Membangun Kebiasaan Membaca pada Siswa SMA/SMK"**
>
> **Penyusun:** Hurratud Daraini (NPM 2411080120, Semester V/A)  
> **Dosen Pengampu:** Mega Aria Monica, M.Pd  
> **Program Studi:** Bimbingan Konseling Pendidikan Islam, Fakultas Tarbiyah dan Keguruan  
> **Institusi:** Universitas Islam Negeri (UIN) Raden Intan Lampung, 2026

---

## 🎯 Landasan Teori & Fitur Utama

Pengembangan website ini menggunakan model **ADDIE** dan berlandaskan pada teori:
1. **Self-Regulated Learning (SRL - Zimmerman, 2002)**:
   - **Perencanaan (*Forethought*)**: Rak Buku Digital & Rencana Membaca (Target waktu & halaman).
   - **Pemantauan (*Performance*)**: Catatan Membaca harian, Grafik Progress, dan Reading Streak.
   - **Refleksi Diri (*Self-Reflection*)**: Lembar evaluasi mingguan, analisis kendala/distraksi, dan strategi perbaikan.
2. **Self-Efficacy (Bandura, 1977)**: Bukti pencapaian bertahap dan Book Buddy (pembelajaran vikarius/sosial).
3. **Habit Formation (Lally et al., 2010; Deterding et al., 2011)**: Reading Streak penanda konsistensi harian.

---

## 🖥️ Struktur Halaman Sesuai Mockup Proposal (Lampiran 5)

1. **Halaman Beranda (`#beranda`)**:
   - Hero banner ramah pelajar dengan ilustrasi tumpukan buku dan balon ucapan: *"Buku adalah jendela dunia."*
   - Kartu navigasi 6 Fitur Utama (Rencana Membaca, Catatan Membaca, Progress, Refleksi, Perpustakaan/Rak Buku, Profil).
   - Kutipan inspirasi harian Read Daily.
2. **Rencana Membaca (`#rencana`)**:
   - Form penetapan target membaca (judul buku, target halaman/durasi, kecepatan harian, batas deadline).
   - Tabel Daftar Rencana aktif dengan status pengerjaan.
3. **Catatan Membaca (`#catatan`)**:
   - Form pencatatan sesi baca (rentang halaman, durasi menit, catatan/kutipan penting).
   - Tabel riwayat catatan bacaan yang otomatis menambah Reading Streak.
4. **Progress Membaca (`#progress`)**:
   - Indikator Reading Streak berturut-turut dengan pesan motivasi.
   - Grafik Donut Chart persentase target buku selesai (40%).
   - Bar Chart durasi membaca mingguan (Senin - Minggu).
   - Tombol cetak/ekspor Rekapitulasi untuk Guru BK.
5. **Refleksi Membaca (`#refleksi`)**:
   - Lembar evaluasi pengalaman membaca mingguan, kendala gawai/waktu, dan strategi tindak lanjut.
   - Kartu riwayat refleksi sebelumnya.
6. **Rak Buku Digital (`#rak`)**:
   - Klasifikasi tab: *Semua*, *Sedang Dibaca*, *Ingin Dibaca*, *Selesai Dibaca*.
   - Modal tambah buku baru dan update progress halaman.
7. **Book Buddy (`#buddy`)**:
   - Ruang berbagi apresiasi, kutipan berkesan, dan saling memberi semangat antar sesama siswa.
8. **Petunjuk Penggunaan (`#petunjuk`)**:
   - Bagan alur penggunaan produk (*Mulai ➔ Beranda ➔ Petunjuk ➔ Rak Buku ➔ Target ➔ Refleksi ➔ Privasi*).
9. **Profil Saya (`#profil`)**:
   - Pengaturan data akun siswa (Nama, Kelas, Asal Sekolah, Email, Guru BK).
   - Opsi reset data demo.
10. **Privasi & Bantuan BK (`#privasi`)**:
    - Penjelasan etika perlindungan kerahasiaan data siswa di bawah umur dan batas fungsi otomasi media.

---

## 🚀 Cara Menjalankan Website

Aplikasi ini menggunakan teknologi web modern murni (**Vanilla JavaScript ES Modules, HTML5, & CSS3**) tanpa dependensi eksternal yang rumit, sehingga dapat dijalankan dengan sangat mudah dan cepat:

### Opsi 1: Menjalankan dengan Node.js (Rekomendasi)
Buka terminal / Command Prompt di folder ini, lalu jalankan:
```bash
npm start
```
atau:
```bash
node server.js
```
Lalu buka peramban (browser) di alamat: **`http://localhost:3000`**

### Opsi 2: Langsung Buka di Browser
Anda juga dapat langsung membuka file **`index.html`** dengan klik ganda (double-click) di File Explorer ke Google Chrome, Microsoft Edge, atau Firefox. Seluruh fitur CRUD tersimpan otomatis dan persisten di `localStorage` peramban Anda.

