// app.js - Main Application Controller for Read Daily
import { store } from './store.js';
import { showToast, openModal, closeModal } from './ui.js';
import { renderBeranda } from './views/beranda.js';
import { renderRencana } from './views/rencana.js';
import { renderCatatan } from './views/catatan.js';
import { renderProgress } from './views/progress.js';
import { renderRefleksi } from './views/refleksi.js';
import { renderRakBuku } from './views/rakBuku.js';
import { renderBookBuddy } from './views/bookBuddy.js';
import { renderPetunjuk } from './views/petunjuk.js';
import { renderProfil } from './views/profil.js';
import { renderPrivasi } from './views/privasi.js';

class App {
  constructor() {
    this.currentView = 'beranda';
    this.bookshelfTab = 'all';
  }

  init() {
    // Bind to window for HTML event handlers
    window.app = this;

    // Setup mobile drawer toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('app-sidebar');
    if (mobileBtn && sidebar) {
      mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });

      // Close sidebar when clicking outside on mobile
      document.addEventListener('click', (e) => {
        if (window.innerWidth <= 900 && !sidebar.contains(e.target) && !mobileBtn.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      });
    }

    // Subscribe to store updates to keep user info in sidebar/topbar in sync
    store.subscribe((event) => {
      this.updateUserBadge();
      this.updateStreakBadge();
    });

    this.updateUserBadge();
    this.updateStreakBadge();

    // Initial navigation
    this.navigate('beranda');
  }

  updateUserBadge() {
    const user = store.getUser();
    const initials = user.name.split(' ').map(n => n[0]).join('').slice(0, 2);

    const sidebarAvatar = document.getElementById('sidebar-user-avatar');
    const sidebarName = document.getElementById('sidebar-user-name');
    const sidebarRole = document.getElementById('sidebar-user-role');

    if (sidebarAvatar) sidebarAvatar.innerText = initials;
    if (sidebarName) sidebarName.innerText = user.name;
    if (sidebarRole) sidebarRole.innerText = `${user.grade} • ${user.school}`;
  }

  updateStreakBadge() {
    const streak = store.getStreak();
    const pill = document.getElementById('topbar-streak-pill');
    if (pill) {
      pill.innerHTML = `🔥 ${streak.currentStreak} Hari Streak`;
    }
  }

  navigate(viewName, params = {}) {
    this.currentView = viewName;

    // Update active nav items in sidebar
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-view') === viewName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Close mobile sidebar if open
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar) sidebar.classList.remove('open');

    // Render corresponding view
    const mainContainer = document.getElementById('view-content-root');
    if (!mainContainer) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (viewName) {
      case 'beranda':
        mainContainer.innerHTML = renderBeranda();
        break;
      case 'rencana':
        mainContainer.innerHTML = renderRencana();
        break;
      case 'catatan':
        mainContainer.innerHTML = renderCatatan();
        break;
      case 'progress':
        mainContainer.innerHTML = renderProgress();
        break;
      case 'refleksi':
        mainContainer.innerHTML = renderRefleksi();
        break;
      case 'rak':
        mainContainer.innerHTML = renderRakBuku(this.bookshelfTab);
        break;
      case 'buddy':
        mainContainer.innerHTML = renderBookBuddy();
        break;
      case 'petunjuk':
        mainContainer.innerHTML = renderPetunjuk();
        break;
      case 'profil':
        mainContainer.innerHTML = renderProfil();
        break;
      case 'privasi':
        mainContainer.innerHTML = renderPrivasi();
        break;
      default:
        mainContainer.innerHTML = renderBeranda();
    }
  }

  // --- RENCANA MEMBACA HANDLERS ---
  handlePlanBookSelect(selectEl) {
    const customInput = document.getElementById('plan-book-custom');
    if (!customInput) return;
    if (selectEl.value === 'custom') {
      customInput.style.display = 'block';
      customInput.required = true;
      customInput.focus();
    } else {
      customInput.style.display = 'none';
      customInput.required = false;
    }
  }

  handleSavePlan(e) {
    e.preventDefault();
    const selectEl = document.getElementById('plan-book-select');
    const customInput = document.getElementById('plan-book-custom');
    let bookTitle = '';
    let bookId = null;

    if (selectEl.value === 'custom') {
      bookTitle = customInput.value.trim();
    } else if (selectEl.value) {
      const selectedOption = selectEl.options[selectEl.selectedIndex];
      bookTitle = selectedOption.getAttribute('data-title');
      bookId = selectEl.value;
    }

    if (!bookTitle) {
      showToast('Pilih atau masukkan judul buku terlebih dahulu', 'error');
      return;
    }

    const targetValue = document.getElementById('plan-target').value.trim();
    const dailyPace = document.getElementById('plan-pace').value.trim();
    const deadline = document.getElementById('plan-deadline').value;

    store.addPlan({
      bookId,
      bookTitle,
      targetValue,
      dailyPace,
      deadline
    });

    showToast('Target rencana membaca berhasil disimpan!');
    this.navigate('rencana');
  }

  togglePlanComplete(id) {
    store.updatePlan(id, { status: 'completed', currentProgress: 100 });
    showToast('Selamat! Target berhasil diselesaikan 🎉');
    this.navigate('rencana');
  }

  deletePlan(id) {
    if (confirm('Apakah kamu yakin ingin menghapus rencana target ini?')) {
      store.deletePlan(id);
      showToast('Rencana target telah dihapus.');
      this.navigate('rencana');
    }
  }

  // --- CATATAN MEMBACA HANDLERS ---
  handleLogBookSelect(selectEl) {
    const customInput = document.getElementById('log-book-custom');
    if (!customInput) return;
    if (selectEl.value === 'custom') {
      customInput.style.display = 'block';
      customInput.required = true;
      customInput.focus();
    } else {
      customInput.style.display = 'none';
      customInput.required = false;
    }
  }

  handleSaveLog(e) {
    e.preventDefault();
    const selectEl = document.getElementById('log-book-select');
    const customInput = document.getElementById('log-book-custom');
    let bookTitle = '';
    let bookId = null;

    if (selectEl.value === 'custom') {
      bookTitle = customInput.value.trim();
    } else if (selectEl.value) {
      const selectedOption = selectEl.options[selectEl.selectedIndex];
      bookTitle = selectedOption.getAttribute('data-title');
      bookId = selectEl.value;
    }

    if (!bookTitle) {
      showToast('Pilih judul buku terlebih dahulu', 'error');
      return;
    }

    const pageRange = document.getElementById('log-range').value.trim();
    const pagesRead = parseInt(document.getElementById('log-pages-read').value) || 0;
    const durationMinutes = parseInt(document.getElementById('log-duration').value) || 30;
    const date = document.getElementById('log-date').value;
    const notes = document.getElementById('log-notes').value.trim();

    store.addLog({
      bookId,
      bookTitle,
      pageRange,
      pagesRead,
      durationMinutes,
      date,
      notes
    });

    showToast(`Catatan tersimpan! Reading streak bertambah 🔥`);
    this.navigate('catatan');
  }

  deleteLog(id) {
    if (confirm('Hapus catatan membaca ini?')) {
      store.deleteLog(id);
      showToast('Catatan telah dihapus.');
      this.navigate('catatan');
    }
  }

  // --- REFLEKSI HANDLERS ---
  handleSaveReflection(e) {
    e.preventDefault();
    const bookTitle = document.getElementById('ref-book-title').value;
    const date = document.getElementById('ref-date').value;
    const qExperience = document.getElementById('ref-experience').value.trim();
    const qObstacles = document.getElementById('ref-obstacles').value.trim();
    const qImprovement = document.getElementById('ref-improvement').value.trim();

    store.addReflection({
      bookTitle,
      date,
      qExperience,
      qObstacles,
      qImprovement
    });

    showToast('Lembar evaluasi refleksi berhasil didokumentasikan!');
    this.navigate('refleksi');
  }

  deleteReflection(id) {
    if (confirm('Hapus catatan refleksi ini?')) {
      store.deleteReflection(id);
      showToast('Catatan refleksi dihapus.');
      this.navigate('refleksi');
    }
  }

  // --- PROFIL HANDLERS ---
  handleSaveProfile(e) {
    e.preventDefault();
    const name = document.getElementById('prof-name').value.trim();
    const grade = document.getElementById('prof-grade').value.trim();
    const school = document.getElementById('prof-school').value.trim();
    const email = document.getElementById('prof-email').value.trim();
    const bkTeacher = document.getElementById('prof-bkteacher').value.trim();
    const dailyTargetMinutes = parseInt(document.getElementById('prof-target-minutes').value) || 30;
    const dailyTargetPages = parseInt(document.getElementById('prof-target-pages').value) || 15;
    const bio = document.getElementById('prof-bio').value.trim();

    store.saveUser({
      name,
      grade,
      school,
      email,
      bkTeacher,
      dailyTargetMinutes,
      dailyTargetPages,
      bio
    });

    showToast('Data profil berhasil diperbarui!');
    this.navigate('profil');
  }

  resetDemoData() {
    if (confirm('Kembalikan semua data ke kondisi awal sesuai Mockup Proposal?')) {
      store.resetToDefaults();
      showToast('Data demo berhasil dipulihkan!');
      this.navigate('beranda');
    }
  }

  // --- RAK BUKU HANDLERS ---
  filterBookshelf(tab) {
    this.bookshelfTab = tab;
    this.navigate('rak');
  }

  openAddBookModal() {
    const emojis = ['📖', '📘', '📕', '📗', '📙', '🌍', '⚡', '🌈', '🏛️', '🕌', '🧠', '💡'];
    const emojiPills = emojis.map((em, i) => `
      <label style="cursor: pointer; padding: 6px 10px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 1.3rem;">
        <input type="radio" name="bookEmoji" value="${em}" ${i === 0 ? 'checked' : ''} style="display:none;" onchange="this.parentElement.parentElement.querySelectorAll('label').forEach(l=>l.style.borderColor='#e2e8f0'); this.parentElement.style.borderColor='#2563eb';" />
        ${em}
      </label>
    `).join('');

    const modalHtml = `
      <div class="modal-header">
        <h3 class="modal-title">Tambah Buku ke Rak Digital</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">&times;</button>
      </div>
      <form onsubmit="window.app.handleSaveNewBook(event)">
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Judul Buku</label>
            <input type="text" id="modal-book-title" class="form-control" placeholder="Contoh: Bumi Manusia" required />
          </div>
          <div class="form-group">
            <label class="form-label">Penulis / Pengarang</label>
            <input type="text" id="modal-book-author" class="form-control" placeholder="Contoh: Pramoedya Ananta Toer" required />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div class="form-group">
              <label class="form-label">Total Halaman</label>
              <input type="number" id="modal-book-pages" class="form-control" placeholder="Contoh: 350" min="1" required />
            </div>
            <div class="form-group">
              <label class="form-label">Status Awal</label>
              <select id="modal-book-status" class="form-control">
                <option value="want_to_read">Ingin Dibaca</option>
                <option value="reading" selected>Sedang Dibaca</option>
                <option value="completed">Selesai Dibaca</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Pilih Ikon Buku</label>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              ${emojiPills}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline" onclick="window.app.closeModal()">Batal</button>
          <button type="submit" class="btn btn-primary">+ Tambahkan Buku</button>
        </div>
      </form>
    `;
    openModal(modalHtml);
  }

  handleSaveNewBook(e) {
    e.preventDefault();
    const title = document.getElementById('modal-book-title').value.trim();
    const author = document.getElementById('modal-book-author').value.trim();
    const totalPages = parseInt(document.getElementById('modal-book-pages').value) || 200;
    const status = document.getElementById('modal-book-status').value;
    const selectedEmojiEl = document.querySelector('input[name="bookEmoji"]:checked');
    const coverEmoji = selectedEmojiEl ? selectedEmojiEl.value : '📖';

    store.addBook({
      title,
      author,
      totalPages,
      status,
      coverEmoji
    });

    closeModal();
    showToast(`Buku "${title}" berhasil ditambahkan ke rak!`);
    this.navigate('rak');
  }

  openUpdateBookModal(bookId) {
    const book = store.getBooks().find(b => b.id === bookId);
    if (!book) return;

    const modalHtml = `
      <div class="modal-header">
        <h3 class="modal-title">Perbarui Progress Buku</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">&times;</button>
      </div>
      <form onsubmit="window.app.handleUpdateBookProgress(event, '${book.id}')">
        <div class="modal-body">
          <div style="font-weight: 700; font-size: 1.1rem; color: #1e3a8a; margin-bottom: 2px;">
            ${book.title}
          </div>
          <div style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 18px;">
            oleh ${book.author} • Total ${book.totalPages} Halaman
          </div>

          <div class="form-group">
            <label class="form-label">Halaman Terakhir Selesai Dibaca</label>
            <input type="number" id="modal-update-page" class="form-control" value="${book.currentPage || 0}" min="0" max="${book.totalPages}" required />
          </div>

          <div class="form-group">
            <label class="form-label">Status Bacaan</label>
            <select id="modal-update-status" class="form-control">
              <option value="want_to_read" ${book.status === 'want_to_read' ? 'selected' : ''}>Ingin Dibaca</option>
              <option value="reading" ${book.status === 'reading' ? 'selected' : ''}>Sedang Dibaca</option>
              <option value="completed" ${book.status === 'completed' ? 'selected' : ''}>Selesai Dibaca</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline" onclick="window.app.closeModal()">Batal</button>
          <button type="submit" class="btn btn-primary">Simpan Progres</button>
        </div>
      </form>
    `;
    openModal(modalHtml);
  }

  handleUpdateBookProgress(e, bookId) {
    e.preventDefault();
    const currentPage = parseInt(document.getElementById('modal-update-page').value) || 0;
    const status = document.getElementById('modal-update-status').value;

    const book = store.getBooks().find(b => b.id === bookId);
    const isCompleted = status === 'completed' || currentPage >= (book?.totalPages || 0);

    store.updateBook(bookId, {
      currentPage,
      status: isCompleted ? 'completed' : status,
      finishDate: isCompleted ? new Date().toISOString().split('T')[0] : book?.finishDate
    });

    closeModal();
    showToast('Progress buku berhasil diperbarui!');
    this.navigate('rak');
  }

  deleteBook(bookId) {
    if (confirm('Apakah kamu yakin ingin menghapus buku ini dari rak tokomu?')) {
      store.deleteBook(bookId);
      showToast('Buku telah dihapus dari rak.');
      this.navigate('rak');
    }
  }

  // --- BOOK BUDDY HANDLERS ---
  handleSaveBuddyPost(e) {
    e.preventDefault();
    const bookTitle = document.getElementById('buddy-book-title').value;
    const quote = document.getElementById('buddy-quote').value.trim();
    const content = document.getElementById('buddy-content').value.trim();

    store.addCommunityPost({
      bookTitle,
      quote,
      content
    });

    showToast('Postingan dibagikan ke Book Buddy!');
    this.navigate('buddy');
  }

  toggleLikePost(postId) {
    store.toggleLikePost(postId);
    this.navigate('buddy');
  }

  handleAddComment(e, postId) {
    e.preventDefault();
    const form = e.target;
    const textInput = form.querySelector('input[name="commentText"]');
    const text = textInput ? textInput.value.trim() : '';
    if (!text) return;

    store.addCommentToPost(postId, text);
    showToast('Komentar dukungan terkirim!');
    this.navigate('buddy');
  }

  focusComment(postId) {
    showToast('Ketik pesan dukunganmu di bawah postingan.');
  }

  closeModal() {
    closeModal();
  }

  // --- TOPBAR SEARCH ---
  handleGlobalSearch(e) {
    const q = e.target.value.toLowerCase().trim();
    if (!q) return;

    if (e.key === 'Enter') {
      const books = store.getBooks().filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
      if (books.length > 0) {
        showToast(`Ditemukan ${books.length} buku yang cocok di rak.`);
        this.navigate('rak');
      } else {
        showToast(`Mencari "${q}"...`);
      }
    }
  }

  // --- TIMER MEMBACA FOKUS (POMODORO / READING TIMER) ---
  openReadingTimer() {
    const books = store.getBooks();
    let timeLeft = 25 * 60; // 25 minutes default
    let timerInterval = null;
    let isRunning = false;
    let selectedDuration = 25;

    const modalHtml = `
      <div class="modal-header">
        <h3 class="modal-title">⏱️ Timer Membaca Fokus</h3>
        <button class="modal-close-btn" onclick="window.app.closeTimerModal()">&times;</button>
      </div>
      <div class="modal-body" style="text-align: center;">
        <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 14px;">
          Luangkan waktu tanpa distraksi gawai untuk membangun fokus dan rutinitas membaca teratur.
        </p>

        <div class="form-group" style="text-align: left; max-width: 320px; margin: 0 auto 16px auto;">
          <label class="form-label" style="font-size: 0.82rem;">Buku yang Sedang Dibaca</label>
          <select id="timer-book-select" class="form-control">
            ${books.map(b => `<option value="${b.title}">${b.title} (${b.author})</option>`).join('')}
          </select>
        </div>

        <!-- Presets -->
        <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 20px;">
          <button type="button" class="btn btn-sm btn-outline timer-preset-btn" data-min="15" onclick="window.app.setTimerDuration(15)">15 Mnt</button>
          <button type="button" class="btn btn-sm btn-primary timer-preset-btn" data-min="25" onclick="window.app.setTimerDuration(25)">25 Mnt</button>
          <button type="button" class="btn btn-sm btn-outline timer-preset-btn" data-min="30" onclick="window.app.setTimerDuration(30)">30 Mnt</button>
          <button type="button" class="btn btn-sm btn-outline timer-preset-btn" data-min="45" onclick="window.app.setTimerDuration(45)">45 Mnt</button>
        </div>

        <!-- Display -->
        <div style="width: 170px; height: 170px; border-radius: 50%; border: 6px solid #2563eb; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center; background: #eff6ff;">
          <span id="timer-countdown-display" style="font-size: 2.8rem; font-weight: 800; color: #1e3a8a; font-family: monospace;">25:00</span>
        </div>

        <!-- Controls -->
        <div style="display: flex; justify-content: center; gap: 12px;">
          <button id="timer-toggle-btn" class="btn btn-primary" style="min-width: 110px;" onclick="window.app.toggleTimerRun()">
            ▶ Mulai
          </button>
          <button class="btn btn-outline" onclick="window.app.resetTimer()">
            ↺ Reset
          </button>
        </div>
      </div>
      <div class="modal-footer" style="justify-content: center;">
        <span style="font-size: 0.8rem; color: var(--text-muted);">
          💡 Tip: Jauhkan notifikasi media sosial selama sesi berlangsung.
        </span>
      </div>
    `;

    openModal(modalHtml);

    this.timerState = {
      timeLeft: 25 * 60,
      totalDuration: 25,
      isRunning: false,
      interval: null
    };
  }

  setTimerDuration(min) {
    if (this.timerState) {
      clearInterval(this.timerState.interval);
      this.timerState.isRunning = false;
      this.timerState.totalDuration = min;
      this.timerState.timeLeft = min * 60;
      this.updateTimerDisplay();

      document.querySelectorAll('.timer-preset-btn').forEach(btn => {
        if (parseInt(btn.getAttribute('data-min')) === min) {
          btn.className = 'btn btn-sm btn-primary timer-preset-btn';
        } else {
          btn.className = 'btn btn-sm btn-outline timer-preset-btn';
        }
      });

      const toggleBtn = document.getElementById('timer-toggle-btn');
      if (toggleBtn) toggleBtn.innerHTML = '▶ Mulai';
    }
  }

  toggleTimerRun() {
    if (!this.timerState) return;
    const toggleBtn = document.getElementById('timer-toggle-btn');

    if (this.timerState.isRunning) {
      clearInterval(this.timerState.interval);
      this.timerState.isRunning = false;
      if (toggleBtn) toggleBtn.innerHTML = '▶ Lanjutkan';
    } else {
      this.timerState.isRunning = true;
      if (toggleBtn) toggleBtn.innerHTML = '⏸️ Jeda';

      this.timerState.interval = setInterval(() => {
        if (this.timerState.timeLeft > 0) {
          this.timerState.timeLeft--;
          this.updateTimerDisplay();
        } else {
          clearInterval(this.timerState.interval);
          this.timerState.isRunning = false;
          this.playTimerChime();
          showToast('🎉 Waktu membaca selesai! Bagus sekali!');
          if (confirm('Sesi membaca selesai! Apakah kamu ingin langsung mencatat hasil bacaanmu ke Catatan Membaca?')) {
            closeModal();
            this.navigate('catatan');
          }
        }
      }, 1000);
    }
  }

  resetTimer() {
    if (!this.timerState) return;
    clearInterval(this.timerState.interval);
    this.timerState.isRunning = false;
    this.timerState.timeLeft = this.timerState.totalDuration * 60;
    this.updateTimerDisplay();
    const toggleBtn = document.getElementById('timer-toggle-btn');
    if (toggleBtn) toggleBtn.innerHTML = '▶ Mulai';
  }

  updateTimerDisplay() {
    if (!this.timerState) return;
    const el = document.getElementById('timer-countdown-display');
    if (!el) return;
    const m = Math.floor(this.timerState.timeLeft / 60);
    const s = this.timerState.timeLeft % 60;
    el.innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  playTimerChime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.2); // A5
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (e) {
      // Audio context fallback
    }
  }

  closeTimerModal() {
    if (this.timerState && this.timerState.interval) {
      clearInterval(this.timerState.interval);
    }
    closeModal();
  }

  // --- CETAK LAPORAN REKAPITULASI UNTUK GURU BK ---
  openPrintReportModal() {
    const user = store.getUser();
    const stats = store.getStats();
    const plans = store.getPlans();
    const logs = store.getLogs();
    const reflections = store.getReflections();

    const printHtml = `
      <div class="modal-header">
        <h3 class="modal-title">📄 Laporan Rekapitulasi Membaca Siswa</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">&times;</button>
      </div>
      <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
        <div id="printable-bk-report" style="padding: 10px; font-family: serif; color: #000; line-height: 1.5;">
          <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 18px;">
            <h2 style="font-size: 1.25rem; font-weight: bold; margin: 0; text-transform: uppercase;">
              LAPORAN REKAPITULASI PEMBIASAAN MEMBACA SISWA
            </h2>
            <div style="font-size: 0.95rem; margin-top: 4px;">Layanan Bimbingan dan Konseling Belajar — Kemandirian & Regulasi Diri</div>
            <div style="font-size: 0.82rem; font-style: italic; color: #444;">Berdasarkan Implementasi Media Read Daily (UIN Raden Intan Lampung)</div>
          </div>

          <table style="width: 100%; font-size: 0.9rem; margin-bottom: 18px; border-collapse: collapse;">
            <tr>
              <td style="width: 28%; font-weight: bold; padding: 4px 0;">Nama Siswa</td>
              <td style="padding: 4px 0;">: ${user.name}</td>
              <td style="width: 25%; font-weight: bold; padding: 4px 0;">Kelas / Sekolah</td>
              <td style="padding: 4px 0;">: ${user.grade} / ${user.school}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 4px 0;">Guru BK Pembimbing</td>
              <td style="padding: 4px 0;">: ${user.bkTeacher || 'Mega Aria Monica, M.Pd'}</td>
              <td style="font-weight: bold; padding: 4px 0;">Reading Streak</td>
              <td style="padding: 4px 0;">: ${stats.currentStreak} Hari Berturut-turut</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 4px 0;">Total Buku Tamat</td>
              <td style="padding: 4px 0;">: ${stats.completedBooks} dari ${stats.totalBooks} Buku (${stats.completionPercentage}%)</td>
              <td style="font-weight: bold; padding: 4px 0;">Total Halaman & Waktu</td>
              <td style="padding: 4px 0;">: ${stats.totalPagesRead} Hal (${stats.totalMinutesRead} Mnt)</td>
            </tr>
          </table>

          <h4 style="font-size: 0.95rem; font-weight: bold; margin: 14px 0 6px 0; border-bottom: 1px solid #ccc; padding-bottom: 4px;">
            A. Daftar Rencana Target Membaca
          </h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; margin-bottom: 16px;">
            <thead>
              <tr style="background: #f0f0f0;">
                <th style="border: 1px solid #999; padding: 6px; text-align: center;">No</th>
                <th style="border: 1px solid #999; padding: 6px;">Judul Buku</th>
                <th style="border: 1px solid #999; padding: 6px;">Target</th>
                <th style="border: 1px solid #999; padding: 6px;">Deadline</th>
                <th style="border: 1px solid #999; padding: 6px;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${plans.map((p, i) => `
                <tr>
                  <td style="border: 1px solid #999; padding: 6px; text-align: center;">${i+1}</td>
                  <td style="border: 1px solid #999; padding: 6px; font-weight: bold;">${p.bookTitle}</td>
                  <td style="border: 1px solid #999; padding: 6px;">${p.targetValue}</td>
                  <td style="border: 1px solid #999; padding: 6px;">${p.deadline || '-'}</td>
                  <td style="border: 1px solid #999; padding: 6px;">${p.status === 'completed' ? 'Tercapai' : 'Sedang Berjalan'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <h4 style="font-size: 0.95rem; font-weight: bold; margin: 14px 0 6px 0; border-bottom: 1px solid #ccc; padding-bottom: 4px;">
            B. Rekapitulasi Catatan Membaca Terbaru
          </h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; margin-bottom: 16px;">
            <thead>
              <tr style="background: #f0f0f0;">
                <th style="border: 1px solid #999; padding: 6px; text-align: center;">No</th>
                <th style="border: 1px solid #999; padding: 6px;">Tanggal</th>
                <th style="border: 1px solid #999; padding: 6px;">Judul Buku</th>
                <th style="border: 1px solid #999; padding: 6px;">Poin / Ringkasan</th>
              </tr>
            </thead>
            <tbody>
              ${logs.slice(0, 4).map((l, i) => `
                <tr>
                  <td style="border: 1px solid #999; padding: 6px; text-align: center;">${i+1}</td>
                  <td style="border: 1px solid #999; padding: 6px; white-space: nowrap;">${l.date}</td>
                  <td style="border: 1px solid #999; padding: 6px; font-weight: bold;">${l.bookTitle} (${l.pageRange || ''})</td>
                  <td style="border: 1px solid #999; padding: 6px;">${l.notes}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div style="display: flex; justify-content: space-between; margin-top: 36px; padding-top: 20px; font-size: 0.88rem;">
            <div style="text-align: center; width: 40%;">
              <div>Mengetahui,</div>
              <div style="font-weight: bold; margin-bottom: 50px;">Guru Bimbingan Konseling</div>
              <div style="font-weight: bold; text-decoration: underline;">${user.bkTeacher || 'Mega Aria Monica, M.Pd'}</div>
              <div>NIP. Pembimbing</div>
            </div>
            <div style="text-align: center; width: 40%;">
              <div>Bandar Lampung, ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
              <div style="font-weight: bold; margin-bottom: 50px;">Siswa yang Bersangkutan</div>
              <div style="font-weight: bold; text-decoration: underline;">${user.name}</div>
              <div>NISN / Siswa ${user.grade}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline" onclick="window.app.closeModal()">Tutup</button>
        <button type="button" class="btn btn-primary" onclick="window.print()">
          🖨️ Cetak Dokumen / Simpan PDF
        </button>
      </div>
    `;

    openModal(printHtml);
  }
}

// Instantiate and start app on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});

