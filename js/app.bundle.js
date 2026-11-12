// app.bundle.js - Unified Application Bundle for Read Daily (Siswa & Guru BK Multi-Role)
// Works seamlessly in both file:/// (direct click) and http:// (server) without CORS errors.
(function() {
  'use strict';

  // --- 1. DEFAULT MOCK DATA ---
  const DEFAULT_STUDENT = {
    id: "user-1",
    role: "siswa",
    name: "Andi Pratama",
    email: "andi@gmail.com",
    password: "123",
    school: "SMA Negeri 1",
    grade: "XI IPA 1",
    bkTeacher: "Mega Aria Monica, M.Pd",
    bio: "Siswa SMA yang sedang berkomitmen membangun rutinitas membaca 20-30 menit setiap hari untuk memperluas wawasan.",
    interests: ["Fiksi Inspiratif", "Pengembangan Diri", "Sains & Teknologi", "Sejarah"],
    dailyTargetMinutes: 30,
    dailyTargetPages: 15,
    joinedDate: "2026-02-01"
  };

  const DEFAULT_TEACHER = {
    id: "teacher-1",
    role: "guru_bk",
    name: "Mega Aria Monica, M.Pd",
    email: "mega@radenintan.ac.id",
    password: "123",
    school: "SMA Negeri 1",
    nip: "198506122011012014",
    title: "Guru Bimbingan dan Konseling",
    bio: "Mendampingi siswa dalam membangun kemandirian belajar, pembentukan kebiasaan positif, dan regulasi diri.",
    joinedDate: "2024-01-10"
  };

  const DEFAULT_STUDENTS_LIST = [
    {
      id: "user-1",
      name: "Andi Pratama",
      grade: "XI IPA 1",
      school: "SMA Negeri 1",
      currentStreak: 5,
      completedBooks: 2,
      readingBooks: 1,
      totalMinutes: 280,
      lastObstacle: "Sempat terdistraksi Instagram dan game malam hari selama 40 menit.",
      status: "Sangat Aktif",
      statusColor: "badge-green"
    },
    {
      id: "user-2",
      name: "Rina Safitri",
      grade: "XI IPS 2",
      school: "SMA Negeri 1",
      currentStreak: 8,
      completedBooks: 3,
      readingBooks: 1,
      totalMinutes: 390,
      lastObstacle: "Jadwal padat tugas proyek sekolah.",
      status: "Sangat Aktif",
      statusColor: "badge-green"
    },
    {
      id: "user-3",
      name: "Dimas Kurniawan",
      grade: "X-4",
      school: "SMA Negeri 1",
      currentStreak: 7,
      completedBooks: 1,
      readingBooks: 1,
      totalMinutes: 220,
      lastObstacle: "Rasa kantuk setelah kegiatan ekstrakurikuler.",
      status: "Aktif",
      statusColor: "badge-blue"
    },
    {
      id: "user-4",
      name: "Siti Rahmawati",
      grade: "XI IPA 1",
      school: "SMA Negeri 1",
      currentStreak: 3,
      completedBooks: 1,
      readingBooks: 1,
      totalMinutes: 140,
      lastObstacle: "Kesulitan konsentrasi jika suasana rumah bising.",
      status: "Perlu Pendampingan",
      statusColor: "badge-orange"
    },
    {
      id: "user-5",
      name: "Budi Santoso",
      grade: "XI IPS 1",
      school: "SMA Negeri 1",
      currentStreak: 0,
      completedBooks: 0,
      readingBooks: 1,
      totalMinutes: 45,
      lastObstacle: "Kecanduan bermain game daring sampai larut malam.",
      status: "Perlu Konseling",
      statusColor: "badge-purple"
    }
  ];

  const DEFAULT_BOOKS = [
    {
      id: "b-1",
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      category: "Novel / Fiksi",
      totalPages: 529,
      currentPage: 210,
      status: "reading",
      coverColor: "from-blue-500 to-indigo-600",
      coverEmoji: "🌈",
      startDate: "2026-04-01",
      finishDate: null,
      notesCount: 3,
      rating: 5
    },
    {
      id: "b-2",
      title: "Bumi Manusia",
      author: "Pramoedya Ananta Toer",
      category: "Sastra & Sejarah",
      totalPages: 535,
      currentPage: 535,
      status: "completed",
      coverColor: "from-amber-600 to-orange-700",
      coverEmoji: "🌍",
      startDate: "2026-03-05",
      finishDate: "2026-03-25",
      notesCount: 5,
      rating: 5
    },
    {
      id: "b-3",
      title: "Atomic Habits",
      author: "James Clear",
      category: "Pengembangan Diri",
      totalPages: 320,
      currentPage: 320,
      status: "completed",
      coverColor: "from-emerald-500 to-teal-700",
      coverEmoji: "⚡",
      startDate: "2026-01-15",
      finishDate: "2026-02-10",
      notesCount: 4,
      rating: 5
    },
    {
      id: "b-4",
      title: "Filosofi Teras",
      author: "Henry Manampiring",
      category: "Pengembangan Diri",
      totalPages: 344,
      currentPage: 0,
      status: "want_to_read",
      coverColor: "from-cyan-600 to-blue-700",
      coverEmoji: "🏛️",
      startDate: null,
      finishDate: null,
      notesCount: 0,
      rating: 0
    },
    {
      id: "b-5",
      title: "Negeri 5 Menara",
      author: "A. Fuadi",
      category: "Fiksi Inspiratif",
      totalPages: 423,
      currentPage: 0,
      status: "want_to_read",
      coverColor: "from-purple-600 to-pink-600",
      coverEmoji: "🕌",
      startDate: null,
      finishDate: null,
      notesCount: 0,
      rating: 0
    }
  ];

  const DEFAULT_PLANS = [
    {
      id: "plan-1",
      bookId: "b-1",
      bookTitle: "Laskar Pelangi",
      targetType: "pages",
      targetValue: "200 Halaman",
      dailyPace: "15 Halaman / Hari",
      deadline: "2026-04-25",
      currentProgress: 40,
      status: "active",
      createdDate: "2026-04-01"
    },
    {
      id: "plan-2",
      bookId: "b-2",
      bookTitle: "Bumi Manusia",
      targetType: "finish",
      targetValue: "Tamat (535 Halaman)",
      dailyPace: "25 Halaman / Hari",
      deadline: "2026-03-25",
      currentProgress: 100,
      status: "completed",
      createdDate: "2026-03-05"
    },
    {
      id: "plan-3",
      bookId: "b-3",
      bookTitle: "Atomic Habits",
      targetType: "finish",
      targetValue: "Tamat (320 Halaman)",
      dailyPace: "15 Halaman / Hari",
      deadline: "2026-02-10",
      currentProgress: 100,
      status: "completed",
      createdDate: "2026-01-15"
    },
    {
      id: "plan-4",
      bookId: "b-4",
      bookTitle: "Filosofi Teras",
      targetType: "minutes",
      targetValue: "30 Menit / Hari",
      dailyPace: "30 Menit",
      deadline: "2026-05-15",
      currentProgress: 0,
      status: "active",
      createdDate: "2026-04-10"
    }
  ];

  const DEFAULT_LOGS = [
    {
      id: "log-1",
      bookId: "b-1",
      bookTitle: "Laskar Pelangi",
      pageRange: "Hal 180 - 210",
      pagesRead: 31,
      durationMinutes: 40,
      date: "2026-04-13",
      notes: "Semangat Ikal dan Lintang untuk sekolah menempuh jarak puluhan kilometer dan ancaman buaya sangat menginspirasi. Kutipan: 'Bermimpilah, karena Tuhan akan memeluk mimpi-mimpimu'.",
      keyInsight: "Keteguhan niat mengalahkan keterbatasan fasilitas."
    },
    {
      id: "log-2",
      bookId: "b-1",
      bookTitle: "Laskar Pelangi",
      pageRange: "Hal 140 - 179",
      pagesRead: 40,
      durationMinutes: 45,
      date: "2026-04-12",
      notes: "Pengenalan kecerdasan Lintang saat lomba cerdas cermat. Guru Bu Muslimah sangat tulus membimbing murid-muridnya.",
      keyInsight: "Peran guru yang penuh dedikasi mampu mengubah masa depan anak."
    },
    {
      id: "log-3",
      bookId: "b-2",
      bookTitle: "Bumi Manusia",
      pageRange: "Hal 490 - 535",
      pagesRead: 46,
      durationMinutes: 50,
      date: "2026-03-25",
      notes: "Minke memperlihatkan perjuangan harga diri seorang pribumi terpelajar melalui tulisan di surat kabar. Bahwa pena bisa lebih tajam dari pedang.",
      keyInsight: "Pendidikan memerdekakan cara berpikir kita."
    },
    {
      id: "log-4",
      bookId: "b-3",
      bookTitle: "Atomic Habits",
      pageRange: "Hal 1 - 75",
      pagesRead: 75,
      durationMinutes: 60,
      date: "2026-01-20",
      notes: "Hukum perubahan perilaku: Buat menjadi jelas, menarik, mudah, dan memuaskan. 1% lebih baik setiap hari menghasilkan dampak eksponensial dalam 1 tahun.",
      keyInsight: "Fokus pada sistem dan identitas, bukan hanya sasaran semata."
    }
  ];

  const DEFAULT_REFLECTIONS = [
    {
      id: "ref-1",
      date: "2026-04-20",
      studentName: "Andi Pratama",
      studentGrade: "XI IPA 1",
      bookTitle: "Laskar Pelangi",
      qExperience: "Buku yang saya baca minggu ini mengajarkan saya tentang pentingnya ketekunan dan pantang menyerah dalam meraih cita-cita meskipun di tengah keterbatasan sarana belajar.",
      qObstacles: "Sempat terdistraksi media sosial Instagram dan game ponsel di malam hari selama 40 menit sehingga membaca agak tertunda.",
      qImprovement: "Mematikan notifikasi ponsel dan menyimpannya di ruangan lain 30 menit sebelum jadwal membaca rutin pukul 20:00 WIB.",
      counselingNote: "Bagus sekali Andi, kesadaranmu mengidentifikasi distraksi ponsel adalah langkah awal regulasi diri yang hebat! Coba gunakan timer 25 menit. - Bu Mega (Guru BK)",
      mood: "Semangat",
      streakMaintained: true
    },
    {
      id: "ref-2",
      date: "2026-04-13",
      studentName: "Andi Pratama",
      studentGrade: "XI IPA 1",
      bookTitle: "Laskar Pelangi",
      qExperience: "Berhasil membaca 5 hari berturut-turut tanpa terputus. Pikiran terasa lebih fokus dan kosakata bahasa Indonesia semakin kaya.",
      qObstacles: "Hari Rabu agak lelah karena ada kegiatan ekstrakurikuler Pramuka hingga sore hari.",
      qImprovement: "Membagi waktu membaca menjadi 15 menit di pagi hari setelah subuh dan 15 menit di malam hari.",
      counselingNote: "Strategi membagi waktu 15 menit pagi & malam sangat realistis! Pertahankan konsistensi ini. - Bu Mega (Guru BK)",
      mood: "Puas",
      streakMaintained: true
    }
  ];

  const DEFAULT_STREAK = {
    currentStreak: 5,
    longestStreak: 12,
    lastReadDate: "2026-04-20",
    historyDays: [
      { day: "Sen", minutes: 30, pages: 15, status: "completed" },
      { day: "Sel", minutes: 45, pages: 22, status: "completed" },
      { day: "Rab", minutes: 20, pages: 12, status: "completed" },
      { day: "Kam", minutes: 50, pages: 28, status: "completed" },
      { day: "Jum", minutes: 35, pages: 18, status: "completed" },
      { day: "Sab", minutes: 60, pages: 35, status: "completed" },
      { day: "Min", minutes: 40, pages: 20, status: "completed" }
    ]
  };

  const DEFAULT_COMMUNITY_POSTS = [
    {
      id: "post-1",
      author: "Rina Safitri",
      grade: "XI IPS 2",
      avatar: "RS",
      avatarBg: "bg-pink-500",
      time: "2 jam yang lalu",
      bookTitle: "Bumi Manusia",
      bookAuthor: "Pramoedya Ananta Toer",
      content: "Baru saja menyelesaikan Bumi Manusia! Sungguh novel yang membuka mata tentang kesetaraan, martabat, dan pentingnya literasi bagi kemajuan bangsa. Teman-teman wajib baca!",
      quote: "Seorang terpelajar harus sudah berbuat adil sejak dalam pikiran apalagi dalam perbuatan.",
      likes: 14,
      hasLiked: false,
      comments: [
        { author: "Dimas K.", text: "Keren banget Rina! Novel legendaris itu!" },
        { author: "Andi Pratama", text: "Terima kasih rekomendasinya, aku masukkan ke rak ingin dibaca!" }
      ]
    },
    {
      id: "post-2",
      author: "Dimas Kurniawan",
      grade: "X-4",
      avatar: "DK",
      avatarBg: "bg-blue-500",
      time: "5 jam yang lalu",
      bookTitle: "Atomic Habits",
      bookAuthor: "James Clear",
      content: "Hari ini Reading Streak tembus hari ke-7 berturut-turut! Tips dari saya: letakkan buku tepat di atas meja belajar sebelum tidur, jadi pas bangun pagi langsung terlihat.",
      quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
      likes: 19,
      hasLiked: true,
      comments: [
        { author: "Siti Rahma", text: "Mantap streak-nya Dimas, menginspirasi!" }
      ]
    },
    {
      id: "post-3",
      author: "Nurul Hidayah",
      grade: "XII MIPA 3",
      avatar: "NH",
      avatarBg: "bg-emerald-500",
      time: "1 hari yang lalu",
      bookTitle: "Filosofi Teras",
      bookAuthor: "Henry Manampiring",
      content: "Buku ini sangat menolong mengatasi kecemasan menjelang ujian sekolah dan persiapan masuk perguruan tinggi. Mengajarkan mana hal yang bisa kita kendalikan dan mana yang di luar kendali.",
      quote: "Bukan hal di luar kita yang membuat cemas, melainkan persepsi kita terhadapnya.",
      likes: 27,
      hasLiked: false,
      comments: []
    }
  ];

  // --- 2. VECTOR ILLUSTRATIONS ---
  const ILLUSTRATIONS = {
    booksHero: `
      <svg viewBox="0 0 420 300" class="w-full h-auto drop-shadow-md select-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadowSoft" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#1e293b" flood-opacity="0.12"/>
          </filter>
        </defs>
        <circle cx="280" cy="180" r="100" fill="#e0f2fe" opacity="0.6"/>
        <circle cx="160" cy="140" r="70" fill="#fef3c7" opacity="0.5"/>
        <ellipse cx="270" cy="265" rx="130" ry="18" fill="#cbd5e1" opacity="0.45"/>
        <g transform="translate(110, 160)">
          <path d="M25 25 C10 10 5 -5 15 -18 C25 -2 30 10 25 25 Z" fill="#10b981"/>
          <path d="M25 25 C38 8 48 0 54 -8 C52 10 40 20 25 25 Z" fill="#059669"/>
          <path d="M25 20 C20 -5 22 -20 25 -30 C30 -15 32 0 25 20 Z" fill="#34d399"/>
          <path d="M12 25 L38 25 L33 58 L17 58 Z" fill="#f97316"/>
          <rect x="10" y="20" width="30" height="7" rx="3" fill="#ea580c"/>
        </g>
        <g transform="translate(170, 215)">
          <path d="M0 25 L160 0 L195 18 L35 43 Z" fill="#047857"/>
          <path d="M0 25 L35 43 L35 58 L0 40 Z" fill="#065f46"/>
          <path d="M35 43 L195 18 L195 33 L35 58 Z" fill="#e2e8f0"/>
          <line x1="8" y1="28" x2="8" y2="38" stroke="#34d399" stroke-width="2"/>
        </g>
        <g transform="translate(190, 185)">
          <path d="M0 20 L135 0 L168 15 L32 35 Z" fill="#f59e0b"/>
          <path d="M0 20 L32 35 L32 48 L0 33 Z" fill="#d97706"/>
          <path d="M32 35 L168 15 L168 28 L32 48 Z" fill="#f8fafc"/>
          <path d="M70 29 L82 28 L82 46 L76 40 L70 46 Z" fill="#ef4444"/>
        </g>
        <g transform="translate(205, 155)">
          <path d="M0 20 L115 0 L145 15 L30 35 Z" fill="#2563eb"/>
          <path d="M0 20 L30 35 L30 47 L0 32 Z" fill="#1d4ed8"/>
          <path d="M30 35 L145 15 L145 27 L30 47 Z" fill="#f1f5f9"/>
          <line x1="38" y1="23" x2="85" y2="17" stroke="#93c5fd" stroke-width="3" stroke-linecap="round"/>
        </g>
        <g transform="translate(225, 130)">
          <path d="M0 16 L90 0 L115 12 L25 28 Z" fill="#10b981"/>
          <path d="M0 16 L25 28 L25 38 L0 26 Z" fill="#059669"/>
          <path d="M25 28 L115 12 L115 22 L25 38 Z" fill="#f8fafc"/>
        </g>
        <g transform="translate(245, 126)">
          <circle cx="15" cy="8" r="7" fill="none" stroke="#334155" stroke-width="2"/>
          <circle cx="35" cy="6" r="7" fill="none" stroke="#334155" stroke-width="2"/>
          <path d="M22 7 Q25 4 28 6" fill="none" stroke="#334155" stroke-width="2"/>
        </g>
        <g transform="translate(50, 45)" filter="url(#shadowSoft)">
          <path d="M20 0 L170 0 C181 0 190 9 190 20 L190 60 C190 71 181 80 170 80 L80 80 L55 98 L60 80 L20 80 C9 80 0 71 0 60 L0 20 C0 9 9 0 20 0 Z" fill="#ffffff"/>
          <path d="M195 10 L200 0 L205 10 L215 15 L205 20 L200 30 L195 20 L185 15 Z" fill="#f59e0b"/>
          <text x="95" y="38" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e3a8a" text-anchor="middle" font-style="italic">
            “Buku adalah
          </text>
          <text x="95" y="58" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e3a8a" text-anchor="middle" font-style="italic">
            jendela dunia.”
          </text>
        </g>
      </svg>
    `,
    planningArt: `
      <svg viewBox="0 0 240 220" class="w-full h-auto drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="120" cy="195" rx="85" ry="14" fill="#e2e8f0"/>
        <g transform="translate(45, 40)">
          <rect x="0" y="0" width="130" height="120" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
          <rect x="0" y="0" width="130" height="32" rx="14" fill="#2563eb"/>
          <rect x="0" y="20" width="130" height="12" fill="#2563eb"/>
          <rect x="25" y="-6" width="8" height="14" rx="4" fill="#64748b"/>
          <rect x="95" y="-6" width="8" height="14" rx="4" fill="#64748b"/>
          <circle cx="65" cy="68" r="22" fill="#eff6ff"/>
          <path d="M55 68 L62 75 L76 59" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <text x="65" y="105" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">TARGET 100%</text>
        </g>
        <g transform="translate(125, 125)">
          <rect x="0" y="20" width="70" height="14" rx="3" fill="#10b981"/>
          <rect x="5" y="7" width="60" height="13" rx="3" fill="#f59e0b"/>
          <rect x="10" y="-6" width="50" height="13" rx="3" fill="#3b82f6"/>
        </g>
      </svg>
    `,
    notesArt: `
      <svg viewBox="0 0 240 220" class="w-full h-auto drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="120" cy="195" rx="80" ry="12" fill="#e2e8f0"/>
        <g transform="translate(45, 35)">
          <rect x="0" y="0" width="125" height="145" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
          <rect x="0" y="0" width="22" height="145" rx="12" fill="#0284c7"/>
          <rect x="10" y="0" width="12" height="145" fill="#0284c7"/>
          <line x1="34" y1="35" x2="110" y2="35" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="34" y1="55" x2="110" y2="55" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
          <line x1="34" y1="75" x2="95" y2="75" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
          <line x1="34" y1="95" x2="105" y2="95" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
          <path d="M75 0 L87 0 L87 35 L81 30 L75 35 Z" fill="#f59e0b"/>
        </g>
        <g transform="translate(130, 70) rotate(35)">
          <rect x="0" y="0" width="14" height="95" rx="4" fill="#3b82f6"/>
          <polygon points="0,95 14,95 7,112" fill="#1e293b"/>
          <polygon points="5,112 9,112 7,118" fill="#cbd5e1"/>
        </g>
      </svg>
    `
  };

  // --- 3. STORAGE & MULTI-USER STATE ---
  const STORAGE_KEYS = {
    SESSION: 'read_daily_current_session',
    USERS: 'read_daily_registered_users',
    STUDENTS_LIST: 'read_daily_students_list',
    BOOKS: 'read_daily_books',
    PLANS: 'read_daily_plans',
    LOGS: 'read_daily_logs',
    REFLECTIONS: 'read_daily_reflections',
    STREAK: 'read_daily_streak',
    COMMUNITY: 'read_daily_community'
  };

  class Store {
    constructor() {
      this.init();
      this.subscribers = [];
    }

    init() {
      if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([DEFAULT_STUDENT, DEFAULT_TEACHER]));
      }
      if (!localStorage.getItem(STORAGE_KEYS.STUDENTS_LIST)) {
        localStorage.setItem(STORAGE_KEYS.STUDENTS_LIST, JSON.stringify(DEFAULT_STUDENTS_LIST));
      }
      if (!localStorage.getItem(STORAGE_KEYS.BOOKS)) {
        this.resetData();
      }
    }

    resetData() {
      localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(DEFAULT_BOOKS));
      localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(DEFAULT_PLANS));
      localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(DEFAULT_LOGS));
      localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(DEFAULT_REFLECTIONS));
      localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(DEFAULT_STREAK));
      localStorage.setItem(STORAGE_KEYS.COMMUNITY, JSON.stringify(DEFAULT_COMMUNITY_POSTS));
    }

    getCurrentUser() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.SESSION)) || null;
      } catch {
        return null;
      }
    }

    login(email, password) {
      const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [DEFAULT_STUDENT, DEFAULT_TEACHER];
      const found = users.find(u => u.email.toLowerCase() === email.toLowerCase().trim());
      if (!found) {
        return { success: false, message: 'Email tidak terdaftar. Silakan periksa kembali atau daftar baru.' };
      }
      if (found.password && found.password !== password) {
        return { success: false, message: 'Kata sandi salah. Silakan coba lagi.' };
      }
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(found));
      this.notify('auth_change', found);
      return { success: true, user: found };
    }

    loginDemo(role = 'siswa') {
      const targetUser = role === 'guru_bk' ? DEFAULT_TEACHER : DEFAULT_STUDENT;
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(targetUser));
      this.notify('auth_change', targetUser);
      return { success: true, user: targetUser };
    }

    register(userData) {
      const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [DEFAULT_STUDENT, DEFAULT_TEACHER];
      const exists = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase().trim());
      if (exists) {
        return { success: false, message: 'Email sudah terdaftar. Silakan langsung masuk.' };
      }
      const newUser = {
        id: (userData.role === 'guru_bk' ? 'teacher-' : 'user-') + Date.now(),
        joinedDate: new Date().toISOString().split('T')[0],
        ...userData
      };
      users.push(newUser);
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(newUser));

      // If registered as student, also add to student list
      if (userData.role === 'siswa') {
        const studentList = this.getStudentsList();
        studentList.push({
          id: newUser.id,
          name: newUser.name,
          grade: newUser.grade || 'Siswa SMA',
          school: newUser.school || 'SMA Negeri 1',
          currentStreak: 0,
          completedBooks: 0,
          readingBooks: 0,
          totalMinutes: 0,
          lastObstacle: 'Baru mendaftar.',
          status: 'Siswa Baru',
          statusColor: 'badge-blue'
        });
        localStorage.setItem(STORAGE_KEYS.STUDENTS_LIST, JSON.stringify(studentList));
      }

      this.notify('auth_change', newUser);
      return { success: true, user: newUser };
    }

    logout() {
      localStorage.removeItem(STORAGE_KEYS.SESSION);
      this.notify('auth_change', null);
    }

    subscribe(cb) { this.subscribers.push(cb); }
    notify(event, data) { this.subscribers.forEach(cb => cb(event, data)); }

    // Students list for Guru BK
    getStudentsList() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDENTS_LIST)) || DEFAULT_STUDENTS_LIST; } catch { return DEFAULT_STUDENTS_LIST; }
    }

    // Books
    getBooks() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKS)) || []; } catch { return []; }
    }
    addBook(book) {
      const books = this.getBooks();
      const newBook = {
        id: 'b-' + Date.now(),
        currentPage: 0,
        notesCount: 0,
        coverEmoji: book.coverEmoji || '📖',
        coverColor: 'from-blue-500 to-indigo-600',
        status: book.status || 'want_to_read',
        ...book
      };
      books.unshift(newBook);
      localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
      return newBook;
    }
    updateBook(id, data) {
      const books = this.getBooks().map(b => b.id === id ? { ...b, ...data } : b);
      localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
    }
    deleteBook(id) {
      const books = this.getBooks().filter(b => b.id !== id);
      localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
    }

    // Plans
    getPlans() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.PLANS)) || []; } catch { return []; }
    }
    addPlan(plan) {
      const plans = this.getPlans();
      const newPlan = { id: 'plan-' + Date.now(), currentProgress: 0, status: 'active', ...plan };
      plans.unshift(newPlan);
      localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(plans));
      return newPlan;
    }
    updatePlan(id, data) {
      const plans = this.getPlans().map(p => p.id === id ? { ...p, ...data } : p);
      localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(plans));
    }
    deletePlan(id) {
      const plans = this.getPlans().filter(p => p.id !== id);
      localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(plans));
    }

    // Logs
    getLogs() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.LOGS)) || []; } catch { return []; }
    }
    addLog(log) {
      const logs = this.getLogs();
      const newLog = { id: 'log-' + Date.now(), ...log };
      logs.unshift(newLog);
      localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));

      if (log.bookId) {
        const book = this.getBooks().find(b => b.id === log.bookId);
        if (book) {
          const pages = parseInt(log.pagesRead) || 0;
          const newCurrentPage = Math.min(book.totalPages, (book.currentPage || 0) + pages);
          const isDone = newCurrentPage >= book.totalPages;
          this.updateBook(book.id, {
            currentPage: newCurrentPage,
            status: isDone ? 'completed' : 'reading',
            notesCount: (book.notesCount || 0) + 1
          });
        }
      }
      this.incrementStreak(parseInt(log.durationMinutes) || 30, parseInt(log.pagesRead) || 15);
      return newLog;
    }
    deleteLog(id) {
      const logs = this.getLogs().filter(l => l.id !== id);
      localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
    }

    // Reflections
    getReflections() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.REFLECTIONS)) || []; } catch { return []; }
    }
    addReflection(ref) {
      const refs = this.getReflections();
      const user = this.getCurrentUser() || DEFAULT_STUDENT;
      const newRef = {
        id: 'ref-' + Date.now(),
        studentName: user.name,
        studentGrade: user.grade || 'Siswa SMA',
        counselingNote: '',
        ...ref
      };
      refs.unshift(newRef);
      localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(refs));
      return newRef;
    }
    addCounselingNote(refId, noteText) {
      const refs = this.getReflections().map(r => {
        if (r.id === refId) {
          return { ...r, counselingNote: noteText };
        }
        return r;
      });
      localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(refs));
      this.notify('reflection_updated');
    }
    deleteReflection(id) {
      const refs = this.getReflections().filter(r => r.id !== id);
      localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(refs));
    }

    // Streak
    getStreak() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.STREAK)) || DEFAULT_STREAK; } catch { return DEFAULT_STREAK; }
    }
    incrementStreak(minutes = 30, pages = 15) {
      const streak = this.getStreak();
      streak.currentStreak += 1;
      if (streak.currentStreak > streak.longestStreak) streak.longestStreak = streak.currentStreak;
      streak.lastReadDate = new Date().toISOString().split('T')[0];

      const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
      const today = dayNames[new Date().getDay()];
      const dayObj = streak.historyDays.find(d => d.day === today);
      if (dayObj) {
        dayObj.minutes = (dayObj.minutes || 0) + minutes;
        dayObj.pages = (dayObj.pages || 0) + pages;
      }
      localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(streak));
    }

    // Community
    getCommunityPosts() {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMMUNITY)) || []; } catch { return []; }
    }
    addCommunityPost(post) {
      const posts = this.getCommunityPosts();
      const user = this.getCurrentUser() || DEFAULT_STUDENT;
      const newPost = {
        id: 'post-' + Date.now(),
        author: user.name,
        grade: user.grade || (user.role === 'guru_bk' ? 'Guru BK' : 'Siswa SMA'),
        avatar: user.name.split(' ').map(n=>n[0]).join('').slice(0, 2),
        avatarBg: user.role === 'guru_bk' ? 'bg-pink-600' : 'bg-indigo-600',
        time: 'Baru saja',
        likes: 1,
        hasLiked: true,
        comments: [],
        ...post
      };
      posts.unshift(newPost);
      localStorage.setItem(STORAGE_KEYS.COMMUNITY, JSON.stringify(posts));
      return newPost;
    }
    toggleLikePost(id) {
      const posts = this.getCommunityPosts().map(p => {
        if (p.id === id) {
          const hasLiked = !p.hasLiked;
          return { ...p, hasLiked, likes: hasLiked ? p.likes + 1 : Math.max(0, p.likes - 1) };
        }
        return p;
      });
      localStorage.setItem(STORAGE_KEYS.COMMUNITY, JSON.stringify(posts));
    }
    addComment(id, text) {
      const user = this.getCurrentUser() || DEFAULT_STUDENT;
      const posts = this.getCommunityPosts().map(p => {
        if (p.id === id) {
          return {
            ...p,
            comments: [...(p.comments || []), { author: user.name + (user.role === 'guru_bk' ? ' (Guru BK)' : ''), text }]
          };
        }
        return p;
      });
      localStorage.setItem(STORAGE_KEYS.COMMUNITY, JSON.stringify(posts));
    }

    getStats() {
      const books = this.getBooks();
      const logs = this.getLogs();
      const streak = this.getStreak();
      const totalBooks = books.length;
      const completedBooks = books.filter(b => b.status === 'completed').length;
      const readingBooks = books.filter(b => b.status === 'reading').length;
      const wantToReadBooks = books.filter(b => b.status === 'want_to_read').length;
      const totalPagesRead = logs.reduce((a, c) => a + (parseInt(c.pagesRead) || 0), 0);
      const totalMinutesRead = logs.reduce((a, c) => a + (parseInt(c.durationMinutes) || 0), 0);
      const completionPercentage = totalBooks > 0 ? Math.round((completedBooks / totalBooks) * 100) : 0;

      return {
        totalBooks,
        completedBooks,
        readingBooks,
        wantToReadBooks,
        totalPagesRead,
        totalMinutesRead,
        completionPercentage,
        currentStreak: streak.currentStreak,
        longestStreak: streak.longestStreak
      };
    }
  }

  const store = new Store();

  // --- 4. TOAST & MODAL HELPERS ---
  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : 'toast-success'}`;
    toast.innerHTML = `<span>${type === 'error' ? '⚠️' : '✅'}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  function openModal(contentHtml) {
    let overlay = document.getElementById('global-modal-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'global-modal-overlay';
      overlay.className = 'modal-overlay';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
      });
    }
    overlay.innerHTML = `<div class="modal-dialog">${contentHtml}</div>`;
    overlay.classList.add('active');
  }

  function closeModal() {
    const overlay = document.getElementById('global-modal-overlay');
    if (overlay) overlay.classList.remove('active');
  }

  function escapeHtml(text) {
    if (!text) return '';
    const d = document.createElement('div');
    d.innerText = text;
    return d.innerHTML;
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${String(d.getDate()).padStart(2, '0')} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  // --- 5. VIEWS RENDERERS ---

  // LOGIN & REGISTER VIEW DENGAN PERAN SISWA & GURU BK
  function renderLogin(activeTab = 'login', selectedRole = 'siswa') {
    return `
      <div class="auth-page-container">
        <div class="auth-card">
          <div class="auth-header">
            <div class="auth-brand">
              <span style="background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; width: 36px; height: 36px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; font-size: 1.2rem; box-shadow: 0 4px 10px rgba(37,99,235,0.3);">📖</span>
              <span>Read Daily</span>
            </div>
            <p class="auth-subtitle">
              Media Pendukung Regulasi Diri Membaca Siswa SMA/SMK<br>
              <strong>Portal Masuk Siswa & Guru Bimbingan Konseling</strong>
            </p>
          </div>

          <!-- Role Toggle: Siswa vs Guru BK -->
          <div style="display: flex; gap: 8px; margin-bottom: 16px; background: #e0f2fe; padding: 4px; border-radius: 10px;">
            <button
              type="button"
              class="btn btn-sm ${selectedRole === 'siswa' ? 'btn-primary' : 'btn-outline'}"
              style="flex: 1; border: none; font-size: 0.85rem;"
              onclick="window.app.switchAuthRole('siswa')"
            >
              🎓 Sebagai Siswa
            </button>
            <button
              type="button"
              class="btn btn-sm ${selectedRole === 'guru_bk' ? 'btn-primary' : 'btn-outline'}"
              style="flex: 1; border: none; font-size: 0.85rem; background: ${selectedRole === 'guru_bk' ? '#0d9488' : 'transparent'};"
              onclick="window.app.switchAuthRole('guru_bk')"
            >
              👨‍🏫 Sebagai Guru BK
            </button>
          </div>

          <!-- Tab Switch: Masuk vs Daftar -->
          <div class="auth-tab-switch">
            <button class="auth-tab-btn ${activeTab === 'login' ? 'active' : ''}" onclick="window.app.switchAuthTab('login')">
              Masuk (Login)
            </button>
            <button class="auth-tab-btn ${activeTab === 'register' ? 'active' : ''}" onclick="window.app.switchAuthTab('register')">
              Daftar Akun Baru
            </button>
          </div>

          ${activeTab === 'login' ? `
            <!-- Login Form -->
            <div class="auth-demo-badge">
              <div style="font-size: 0.8rem; color: #1e40af; font-weight: 700; margin-bottom: 4px;">
                💡 Akses Instan Mode Demo (${selectedRole === 'guru_bk' ? 'Guru BK' : 'Siswa'}):
              </div>
              ${selectedRole === 'guru_bk' ? `
                <button class="btn btn-sm" style="background: #0d9488; color: white; font-size: 0.8rem; width: 100%; border: none;" onclick="window.app.handleDemoLogin('guru_bk')">
                  ⚡ Masuk sebagai Bu Mega Aria Monica, M.Pd (Guru BK)
                </button>
              ` : `
                <button class="btn btn-sm btn-primary" style="font-size: 0.8rem; width: 100%;" onclick="window.app.handleDemoLogin('siswa')">
                  ⚡ Masuk sebagai Andi Pratama (Siswa XI IPA 1)
                </button>
              `}
            </div>

            <form onsubmit="window.app.handleLoginSubmit(event)">
              <div class="form-group">
                <label class="form-label">Email ${selectedRole === 'guru_bk' ? 'Guru BK' : 'Siswa'}</label>
                <input
                  type="email"
                  id="login-email"
                  class="form-control"
                  required
                  value="${selectedRole === 'guru_bk' ? 'mega@radenintan.ac.id' : 'andi@gmail.com'}"
                />
              </div>
              <div class="form-group">
                <label class="form-label">Kata Sandi</label>
                <input type="password" id="login-password" class="form-control" placeholder="Kata sandi..." required value="123" />
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px; padding: 12px; background: ${selectedRole === 'guru_bk' ? '#0d9488' : 'var(--primary)'};">
                🚀 Masuk sebagai ${selectedRole === 'guru_bk' ? 'Guru BK' : 'Siswa'}
              </button>
            </form>
          ` : `
            <!-- Register Form -->
            <form onsubmit="window.app.handleRegisterSubmit(event)">
              <div class="form-group">
                <label class="form-label">Nama Lengkap ${selectedRole === 'guru_bk' ? 'Guru (beserta gelar)' : 'Siswa'}</label>
                <input type="text" id="reg-name" class="form-control" placeholder="${selectedRole === 'guru_bk' ? 'Contoh: Mega Aria Monica, M.Pd' : 'Contoh: Siti Rahmawati'}" required />
              </div>

              ${selectedRole === 'guru_bk' ? `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <div class="form-group">
                    <label class="form-label">NIP / NUPTK</label>
                    <input type="text" id="reg-nip" class="form-control" placeholder="198506122011012014" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Asal Sekolah</label>
                    <input type="text" id="reg-school" class="form-control" placeholder="SMA Negeri 1" required />
                  </div>
                </div>
              ` : `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <div class="form-group">
                    <label class="form-label">Kelas</label>
                    <input type="text" id="reg-grade" class="form-control" placeholder="Contoh: XI IPA 2" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Asal Sekolah</label>
                    <input type="text" id="reg-school" class="form-control" placeholder="Contoh: SMA Negeri 1" required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">Guru BK Pendamping</label>
                  <input type="text" id="reg-bkteacher" class="form-control" value="Mega Aria Monica, M.Pd" required />
                </div>
              `}

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input type="email" id="reg-email" class="form-control" placeholder="email@sekolah.id" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Kata Sandi</label>
                  <input type="password" id="reg-password" class="form-control" placeholder="Minimal 4 karakter" required />
                </div>
              </div>

              <div style="margin: 12px 0; font-size: 0.78rem; color: #475569; display: flex; gap: 8px; align-items: flex-start;">
                <input type="checkbox" id="reg-consent" required style="margin-top: 3px;" checked />
                <label for="reg-consent">
                  Saya menyetujui prinsip etika kerahasiaan data pembiasaan membaca dan layanan bimbingan belajar (Bab 2.5 Proposal Read Daily).
                </label>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px; background: ${selectedRole === 'guru_bk' ? '#0d9488' : 'var(--primary)'};">
                ✨ Buat Akun ${selectedRole === 'guru_bk' ? 'Guru BK' : 'Siswa'} & Masuk
              </button>
            </form>
          `}

          <div class="auth-footer-notice">
            Pengembangan Teknologi Bimbingan dan Konseling<br>
            <strong>Prodi BKPI FTK UIN Raden Intan Lampung (2026)</strong>
          </div>
        </div>
      </div>
    `;
  }

  // --- 5A. VIEW KHUSUS GURU BK ---
  function renderGuruBeranda() {
    const user = store.getCurrentUser();
    const students = store.getStudentsList();
    const totalMinutes = students.reduce((acc, s) => acc + (s.totalMinutes || 0), 0);
    const avgStreak = (students.reduce((acc, s) => acc + (s.currentStreak || 0), 0) / students.length).toFixed(1);

    return `
      <div class="page-container">
        <!-- Hero Guru BK -->
        <div class="hero-card" style="background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%); border-color: #99f6e4;">
          <div class="hero-content">
            <span class="hero-tag" style="color: #0d9488; border-color: #a7f3d0;">Dashboard Layanan Bimbingan & Konseling</span>
            <h1 class="hero-title" style="color: #134e4a;">Selamat Datang,<br>${user.name}!</h1>
            <p class="hero-desc" style="color: #115e59;">
              Pantau perkembangan kemandirian membaca, regulasi diri, serta evaluasi hambatan belajar siswa binaan Anda di SMA/SMK.
            </p>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <button class="btn btn-primary" style="background: #0d9488;" onclick="window.app.navigate('guru_siswa')">
                👥 Lihat Data Siswa Binaan &rarr;
              </button>
              <button class="btn btn-outline" style="background: white;" onclick="window.app.navigate('guru_refleksi')">
                💬 Tinjau Refleksi & Hambatan
              </button>
            </div>
          </div>
          <div class="hero-art-container">
            ${ILLUSTRATIONS.booksHero}
          </div>
        </div>

        <!-- Stat Cards Guru BK -->
        <div class="progress-stats-grid" style="margin-bottom: 28px;">
          <div class="stat-metric-card">
            <div class="stat-icon" style="background: #f0fdfa; color: #0d9488;">👥</div>
            <div>
              <div class="stat-number">${students.length}</div>
              <div class="stat-label">Siswa Terdaftar</div>
            </div>
          </div>
          <div class="stat-metric-card">
            <div class="stat-icon" style="background: #fff7ed; color: #ea580c;">🔥</div>
            <div>
              <div class="stat-number">${avgStreak} Hari</div>
              <div class="stat-label">Rata-rata Streak</div>
            </div>
          </div>
          <div class="stat-metric-card">
            <div class="stat-icon" style="background: #eff6ff; color: #2563eb;">⏱️</div>
            <div>
              <div class="stat-number">${totalMinutes} mnt</div>
              <div class="stat-label">Total Menit Baca</div>
            </div>
          </div>
          <div class="stat-metric-card">
            <div class="stat-icon" style="background: #fdf2f8; color: #db2777;">📋</div>
            <div>
              <div class="stat-number">100%</div>
              <div class="stat-label">Keterisian Refleksi</div>
            </div>
          </div>
        </div>

        <!-- Ringkasan Siswa Butuh Perhatian Guru BK -->
        <div class="card" style="margin-bottom: 28px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b;">Pemantauan Regulasi Diri Siswa (Tinjauan Cepat)</h3>
              <p style="font-size: 0.84rem; color: var(--text-muted);">Siswa yang membutuhkan perhatian khusus dalam mengatasi distraksi gawai dan manajemen waktu.</p>
            </div>
            <button class="btn btn-sm btn-outline" onclick="window.app.navigate('guru_siswa')">Lihat Semua</button>
          </div>

          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>Nama Siswa</th>
                  <th>Kelas</th>
                  <th>Streak</th>
                  <th>Buku Tamat</th>
                  <th>Hambatan Terakhir</th>
                  <th>Status Regulasi</th>
                  <th>Tindakan BK</th>
                </tr>
              </thead>
              <tbody>
                ${students.map(s => `
                  <tr>
                    <td style="font-weight: 700; color: #0f172a;">${s.name}</td>
                    <td>${s.grade}</td>
                    <td><strong style="color: #ea580c;">🔥 ${s.currentStreak} Hari</strong></td>
                    <td>${s.completedBooks} Buku</td>
                    <td style="font-size: 0.82rem; color: #475569; max-width: 250px;">${escapeHtml(s.lastObstacle)}</td>
                    <td><span class="badge ${s.statusColor}">${s.status}</span></td>
                    <td>
                      <button class="btn btn-sm btn-soft" onclick="window.app.openCounselingModal('${s.id}', '${s.name}')">
                        💬 Beri Umpan Balik
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  function renderGuruSiswa() {
    const students = store.getStudentsList();
    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Daftar Siswa Binaan</h1>
          <p class="page-subtitle">Kelola dan pantau seluruh catatan regulasi diri dan progres membaca siswa SMA/SMK.</p>
        </div>

        <div class="card">
          <div class="table-responsive">
            <table class="custom-table">
              <thead>
                <tr>
                  <th style="text-align: center;">No</th>
                  <th>Nama Lengkap Siswa</th>
                  <th>Kelas & Sekolah</th>
                  <th>Reading Streak</th>
                  <th>Buku Selesai</th>
                  <th>Total Waktu</th>
                  <th>Status Pembiasaan</th>
                  <th>Aksi Konseling</th>
                </tr>
              </thead>
              <tbody>
                ${students.map((s, idx) => `
                  <tr>
                    <td style="text-align: center; color: var(--text-muted);">${idx + 1}</td>
                    <td><strong style="color: #1e3a8a;">${s.name}</strong></td>
                    <td>${s.grade} • ${s.school}</td>
                    <td><strong style="color: #ea580c;">🔥 ${s.currentStreak} Hari</strong></td>
                    <td>✅ ${s.completedBooks} Buku</td>
                    <td>⏱️ ${s.totalMinutes} menit</td>
                    <td><span class="badge ${s.statusColor}">${s.status}</span></td>
                    <td>
                      <button class="btn btn-sm btn-primary" style="background: #0d9488; border: none;" onclick="window.app.openCounselingModal('${s.id}', '${s.name}')">
                        💬 Catatan BK
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  function renderGuruRefleksi() {
    const reflections = store.getReflections();
    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Tinjauan Refleksi Siswa</h1>
          <p class="page-subtitle">Evaluasi hambatan belajar membaca siswa (seperti distraksi gawai dan manajemen waktu) serta berikan bimbingan solusi.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${reflections.map(r => `
            <div class="reflection-highlight-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div>
                  <strong style="color: #0f172a; font-size: 1.05rem;">${r.studentName || 'Siswa Binaan'}</strong>
                  <span style="font-size: 0.8rem; color: var(--text-muted);"> (${r.studentGrade || 'XI IPA 1'}) • 📅 ${formatDate(r.date)}</span>
                </div>
                <span class="badge badge-blue">Buku: ${r.bookTitle}</span>
              </div>

              <div class="reflection-quote-block">
                “${escapeHtml(r.qExperience)}”
              </div>

              <div class="reflection-sub-meta">
                <div class="reflection-meta-item">
                  <strong>Hambatan / Distraksi yang Dialami Siswa:</strong>
                  <span style="color: #dc2626; font-weight: 500;">${escapeHtml(r.qObstacles || '-')}</span>
                </div>
                <div class="reflection-meta-item">
                  <strong>Rencana Perbaikan Mandiri Siswa:</strong>
                  <span style="color: #16a34a; font-weight: 500;">${escapeHtml(r.qImprovement || '-')}</span>
                </div>
              </div>

              <!-- Catatan / Umpan Balik Guru BK -->
              <div class="counseling-feedback-box">
                <div style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; color: #15803d; margin-bottom: 4px;">
                  Catatan Umpan Balik Guru BK:
                </div>
                <div style="font-size: 0.88rem; color: #166534; font-style: italic;">
                  ${r.counselingNote ? escapeHtml(r.counselingNote) : '<em>Belum ada catatan bimbingan untuk sesi ini.</em>'}
                </div>
                <div style="margin-top: 8px;">
                  <button class="btn btn-sm btn-outline" style="background: white;" onclick="window.app.openEditCounselingNoteModal('${r.id}')">
                    ✏️ Tulis / Perbarui Catatan Bimbingan
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderGuruProfil() {
    const user = store.getCurrentUser();
    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Profil Guru BK</h1>
          <p class="page-subtitle">Informasi pembimbing bimbingan konseling dan pengaturan akun sekolah.</p>
        </div>

        <div class="profile-card-layout">
          <div class="profile-sidebar-card">
            <div class="profile-big-avatar" style="background: linear-gradient(135deg, #0d9488, #0f766e);">
              ${user.name.split(' ').map(n=>n[0]).join('').slice(0, 2)}
            </div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">${user.name}</h2>
            <div style="font-size: 0.88rem; color: #0d9488; font-weight: 600; margin-bottom: 4px;">${user.title || 'Guru Bimbingan dan Konseling'}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 20px;">${user.school} • NIP: ${user.nip || '-'}</div>

            <div style="width: 100%; border-top: 1px solid var(--border-color); padding-top: 18px; text-align: left;">
              <div style="margin-bottom: 12px;">
                <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Peran Pengguna</span>
                <strong style="font-size: 0.88rem; color: #0d9488;">Guru Bimbingan & Konseling</strong>
              </div>
            </div>

            <div style="margin-top: 24px; width: 100%;">
              <button class="btn btn-outline" style="width: 100%; font-size: 0.82rem; color: #ef4444; border-color: #fecaca;" onclick="window.app.handleLogout()">
                🚪 Keluar dari Akun
              </button>
            </div>
          </div>

          <div class="card">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 20px;">Informasi Profil Guru BK</h3>
            <form onsubmit="window.app.handleSaveProfile(event)">
              <div class="form-group">
                <label class="form-label">Nama Lengkap (beserta Gelar)</label>
                <input type="text" id="prof-name" class="form-control" value="${user.name}" required />
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label">NIP / NUPTK</label>
                  <input type="text" id="prof-nip" class="form-control" value="${user.nip || '198506122011012014'}" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Asal Sekolah</label>
                  <input type="text" id="prof-school" class="form-control" value="${user.school}" required />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" id="prof-email" class="form-control" value="${user.email}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Deskripsi / Moto Pelayanan BK</label>
                <textarea id="prof-bio" class="form-control" rows="3">${user.bio || ''}</textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="background: #0d9488;">💾 Simpan Perubahan</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  // --- 5B. VIEWS KHUSUS SISWA (SESUAI MOCKUP PROPOSAL) ---
  function renderBeranda() {
    const user = store.getCurrentUser() || DEFAULT_STUDENT;
    const streak = store.getStreak();
    const books = store.getBooks();
    const activeBook = books.find(b => b.status === 'reading') || books[0];

    return `
      <div class="page-container">
        <!-- Hero Banner Mockup 1 -->
        <div class="hero-card">
          <div class="hero-content">
            <span class="hero-tag">Media Bimbingan & Konseling Belajar</span>
            <h1 class="hero-title">Selamat Datang di<br>Read Daily!</h1>
            <p class="hero-desc">
              Bersama, wujudkan kebiasaan membaca yang lebih baik, setiap hari. Bangun regulasi diri, pantau progres, dan perluas cakrawala masa depan.
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

        <!-- Fitur Utama Grid Mockup 1 -->
        <div style="margin-bottom: 32px;">
          <h2 class="features-section-title">Fitur Utama</h2>
          <p class="features-section-sub">Semua yang kamu butuhkan untuk membantu mengatur, membaca, dan merefleksi kegiatan membaca setiap hari</p>

          <div class="features-grid">
            <div class="feature-card" onclick="window.app.navigate('rencana')">
              <div class="feature-icon-wrapper" style="background: #eff6ff; color: #2563eb;">🎯</div>
              <div class="feature-card-title">Rencana Membaca <span class="badge badge-blue">Target</span></div>
              <p class="feature-card-desc">Tentukan target membaca harian atau mingguan, baik jumlah halaman maupun durasi waktu membaca yang terukur.</p>
              <div class="feature-card-link">Buka Rencana Membaca &rarr;</div>
            </div>

            <div class="feature-card" onclick="window.app.navigate('catatan')">
              <div class="feature-icon-wrapper" style="background: #ecfdf5; color: #059669;">📝</div>
              <div class="feature-card-title">Catatan Membaca <span class="badge badge-green">Jurnal</span></div>
              <p class="feature-card-desc">Catat ringkasan, kutipan inspiratif, dan halaman yang telah kamu selesaikan dalam setiap sesi membaca.</p>
              <div class="feature-card-link" style="color: #059669;">Tulis Catatan Harian &rarr;</div>
            </div>

            <div class="feature-card" onclick="window.app.navigate('progress')">
              <div class="feature-icon-wrapper" style="background: #e0f2fe; color: #0284c7;">📊</div>
              <div class="feature-card-title">Progress <span class="badge badge-blue">Pantau</span></div>
              <p class="feature-card-desc">Pantau grafik ketercapaian target, persentase buku selesai, serta pertahankan Reading Streak berturut-turut.</p>
              <div class="feature-card-link" style="color: #0284c7;">Lihat Grafik Progress &rarr;</div>
            </div>

            <div class="feature-card" onclick="window.app.navigate('refleksi')">
              <div class="feature-icon-wrapper" style="background: #f5f3ff; color: #7c3aed;">💭</div>
              <div class="feature-card-title">Refleksi <span class="badge badge-purple">Evaluasi</span></div>
              <p class="feature-card-desc">Evaluasi diri secara mingguan mengenai pemahaman, hambatan yang dihadapi, dan langkah perbaikan ke depan.</p>
              <div class="feature-card-link" style="color: #7c3aed;">Isi Lembar Refleksi &rarr;</div>
            </div>

            <div class="feature-card" onclick="window.app.navigate('rak')">
              <div class="feature-icon-wrapper" style="background: #fffbeb; color: #d97706;">📚</div>
              <div class="feature-card-title">Perpustakaan Digital <span class="badge badge-orange">Rak Buku</span></div>
              <p class="feature-card-desc">Simpan dan atur daftar buku favoritmu: ingin dibaca, sedang dibaca, hingga buku yang sudah tuntas dibaca.</p>
              <div class="feature-card-link" style="color: #d97706;">Kelola Rak Buku &rarr;</div>
            </div>

            <div class="feature-card" onclick="window.app.navigate('buddy')">
              <div class="feature-icon-wrapper" style="background: #f0fdfa; color: #0d9488;">🤝</div>
              <div class="feature-card-title">Book Buddy <span class="badge badge-green">Komunitas</span></div>
              <p class="feature-card-desc">Ruang berbagi kesan, kutipan favorit, dan saling memberi semangat bersama teman untuk menjaga motivasi membaca.</p>
              <div class="feature-card-link" style="color: #0d9488;">Buka Book Buddy &rarr;</div>
            </div>
          </div>
        </div>

        <!-- Quote Banner Mockup 1 -->
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

  // RENCANA MEMBACA (MOCKUP 2)
  function renderRencana() {
    const plans = store.getPlans();
    const books = store.getBooks();

    const planRows = plans.length > 0 ? plans.map((p, idx) => `
      <tr>
        <td style="font-weight: 600; color: var(--text-muted); width: 40px; text-align: center;">${idx + 1}</td>
        <td>
          <div style="font-weight: 700; color: #0f172a;">${p.bookTitle}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${p.dailyPace || 'Target bertahap'}</div>
        </td>
        <td><span class="badge badge-blue">${p.targetValue}</span></td>
        <td style="color: #475569; font-weight: 500;">📅 ${p.deadline ? formatDate(p.deadline) : '-'}</td>
        <td>
          ${p.status === 'completed'
            ? `<span class="badge badge-green">✓ Tercapai</span>`
            : `<span class="badge badge-orange">⏳ Berjalan</span>`}
        </td>
        <td>
          <div style="display: flex; gap: 8px;">
            ${p.status !== 'completed'
              ? `<button class="btn btn-sm btn-soft" onclick="window.app.togglePlanComplete('${p.id}')">✓ Selesai</button>`
              : ''}
            <button class="btn btn-sm btn-outline" style="color: #ef4444; border-color: #fecaca;" onclick="window.app.deletePlan('${p.id}')">Hapus</button>
          </div>
        </td>
      </tr>
    `).join('') : `<tr><td colspan="6" style="text-align:center; padding: 28px; color: var(--text-muted);">Belum ada target rencana. Tambahkan target di atas!</td></tr>`;

    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Rencana Membaca</h1>
          <p class="page-subtitle">Tetapkan target membaca yang ingin kamu capai untuk membangun regulasi diri dan rutinitas positif.</p>
        </div>

        <div class="page-split-layout">
          <div class="card">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 16px;">
              Tambah Target Rencana Baru
            </h3>
            <form onsubmit="window.app.handleSavePlan(event)">
              <div class="form-group">
                <label class="form-label">Judul Buku</label>
                <select id="plan-book-select" class="form-control" onchange="window.app.handlePlanBookSelect(this)" required>
                  <option value="">-- Pilih Buku dari Rak atau Ketik Baru --</option>
                  ${books.map(b => `<option value="${b.id}" data-title="${b.title}">${b.title} (${b.author})</option>`).join('')}
                  <option value="custom">+ Tulis Judul Buku Lain...</option>
                </select>
                <input type="text" id="plan-book-custom" class="form-control" placeholder="Masukkan judul buku..." style="display: none; margin-top: 8px;" />
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label">Target Membaca</label>
                  <input type="text" id="plan-target" class="form-control" placeholder="Contoh: 200 Halaman" required />
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
              <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 8px;">
                💾 Simpan Rencana
              </button>
            </form>
          </div>

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

        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b;">Daftar Rencana</h3>
              <p style="font-size: 0.84rem; color: var(--text-muted);">Pantau seluruh target bacaan aktif maupun selesai.</p>
            </div>
            <span class="badge badge-blue">${plans.length} Target</span>
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
              <tbody>${planRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // CATATAN MEMBACA (MOCKUP 3)
  function renderCatatan() {
    const logs = store.getLogs();
    const books = store.getBooks();

    const logRows = logs.length > 0 ? logs.map((l, idx) => `
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
        <td style="white-space: nowrap; color: #475569; font-weight: 500;">📅 ${formatDate(l.date)}</td>
        <td style="width: 80px;">
          <button class="btn btn-sm btn-outline" style="color: #ef4444; border-color: #fecaca;" onclick="window.app.deleteLog('${l.id}')">Hapus</button>
        </td>
      </tr>
    `).join('') : `<tr><td colspan="5" style="text-align:center; padding: 28px; color: var(--text-muted);">Belum ada catatan membaca. Tulis catatan pertamamu di atas!</td></tr>`;

    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Catatan Membaca</h1>
          <p class="page-subtitle">Tuliskan hal-hal penting yang kamu dapatkan dari buku yang kamu baca untuk memperdalam pemahaman.</p>
        </div>

        <div class="page-split-layout">
          <div class="card">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 16px;">
              Tambah Catatan Sesi Membaca
            </h3>
            <form onsubmit="window.app.handleSaveLog(event)">
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
                  <label class="form-label">Halaman Selesai</label>
                  <input type="number" id="log-pages-read" class="form-control" placeholder="Contoh: 30" min="1" required />
                </div>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label">Durasi (Menit)</label>
                  <input type="number" id="log-duration" class="form-control" value="30" min="1" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Tanggal</label>
                  <input type="date" id="log-date" class="form-control" value="${new Date().toISOString().split('T')[0]}" required />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Catatan / Poin Penting</label>
                <textarea id="log-notes" class="form-control" rows="3" placeholder="Tuliskan gagasan utama, hikmah, atau kutipan berkesan..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                💾 Simpan Catatan & Update Streak
              </button>
            </form>
          </div>

          <div class="illustration-card">
            ${ILLUSTRATIONS.notesArt}
            <div style="margin-top: 14px;">
              <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Fase Pemantauan (Performance)</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); max-width: 280px; margin: 0 auto; line-height: 1.45;">
                Mencatat pemahaman memperkuat rasa pencapaian (Bandura, 1977) dan menjaga kontinuitas kebiasaan positif.
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b;">Daftar Catatan</h3>
              <p style="font-size: 0.84rem; color: var(--text-muted);">Riwayat catatan membaca harian yang telah kamu dokumentasikan.</p>
            </div>
            <span class="badge badge-green">${logs.length} Catatan</span>
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
              <tbody>${logRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // PROGRESS MEMBACA (MOCKUP 4)
  function renderProgress() {
    const stats = store.getStats();
    const streak = store.getStreak();

    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const percent = stats.completionPercentage || 0;
    const strokeDashoffset = circumference - (percent / 100) * circumference;

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
              🖨️ Cetak Rekapitulasi Guru BK
            </button>
          </div>
        </div>

        <!-- Streak Banner -->
        <div class="streak-banner">
          <div class="streak-left">
            <div class="streak-flame-circle">🔥</div>
            <div>
              <div class="streak-title">${streak.currentStreak} Hari Reading Streak!</div>
              <div class="streak-sub">Luar biasa! Konsistensimu menjaga kebiasaan membaca terbentuk kuat. Pertahankan!</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.76rem; color: #9a3412; font-weight: 700; text-transform: uppercase;">Rekor Tertinggi</div>
            <div style="font-size: 1.35rem; font-weight: 800; color: #c2410c;">🏆 ${streak.longestStreak} Hari</div>
          </div>
        </div>

        <!-- 4 Stats Cards Mockup 4 -->
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

        <!-- Charts Grid Mockup 4 -->
        <div class="progress-charts-grid">
          <!-- Donut Chart -->
          <div class="card donut-chart-box">
            <h3 style="font-size: 1.1rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">Target Tercapai</h3>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 20px;">Rasio penyelesaian buku di rak digital</p>
            <div class="donut-visual-wrapper">
              <svg viewBox="0 0 160 160" width="170" height="170">
                <circle cx="80" cy="80" r="${radius}" fill="none" stroke="#e2e8f0" stroke-width="14" />
                <circle cx="80" cy="80" r="${radius}" fill="none" stroke="#2563eb" stroke-width="14"
                  stroke-dasharray="${circumference}" stroke-dashoffset="${strokeDashoffset}" stroke-linecap="round"
                  transform="rotate(-90 80 80)" style="transition: stroke-dashoffset 0.8s ease;" />
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

          <!-- Bar Chart -->
          <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <div>
                <h3 style="font-size: 1.1rem; font-weight: 700; color: #1e293b;">Grafik Progress</h3>
                <p style="font-size: 0.82rem; color: var(--text-muted);">Durasi waktu membaca (menit) dalam 7 hari terakhir</p>
              </div>
              <span class="badge badge-blue">Minggu Ini</span>
            </div>
            <div class="bar-chart-container">
              <div class="bar-chart-bars">${barElements}</div>
            </div>
            <div style="display: flex; justify-content: space-around; margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border-color); text-align: center;">
              <div>
                <div style="font-size: 0.74rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Rata-rata Harian</div>
                <div style="font-size: 1.15rem; font-weight: 800; color: #2563eb;">
                  ${Math.round(streak.historyDays.reduce((a, c) => a + (c.minutes || 0), 0) / 7)} mnt
                </div>
              </div>
              <div>
                <div style="font-size: 0.74rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Hari Terbanyak</div>
                <div style="font-size: 1.15rem; font-weight: 800; color: #10b981;">Sabtu (60 mnt)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // REFLEKSI (MOCKUP 5)
  function renderRefleksi() {
    const reflections = store.getReflections();
    const books = store.getBooks();

    const reflectionCards = reflections.length > 0 ? reflections.map(r => `
      <div class="reflection-highlight-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="reflection-date-pill">📅 ${formatDate(r.date)}</span>
            <strong style="color: #1e3a8a; font-size: 0.95rem;">Buku: ${r.bookTitle || 'Bacaan Minggu Ini'}</strong>
          </div>
          <button class="btn btn-sm btn-outline" style="color: #ef4444; border-color: #fecaca;" onclick="window.app.deleteReflection('${r.id}')">Hapus</button>
        </div>
        <div class="reflection-quote-block">“${escapeHtml(r.qExperience)}”</div>
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

        ${r.counselingNote ? `
          <div class="counseling-feedback-box">
            <div style="font-size: 0.76rem; text-transform: uppercase; font-weight: 700; color: #15803d; margin-bottom: 2px;">
              💬 Tanggapan Guru BK Pendamping:
            </div>
            <div style="font-size: 0.86rem; color: #166534; font-style: italic;">
              ${escapeHtml(r.counselingNote)}
            </div>
          </div>
        ` : ''}
      </div>
    `).join('') : `<div style="text-align: center; padding: 32px; background: white; border-radius: 12px; border: 1px dashed #cbd5e1; color: var(--text-muted);">Belum ada lembar refleksi. Tulis refleksi mingguan pertamamu di atas!</div>`;

    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Refleksi Membaca</h1>
          <p class="page-subtitle">Apa yang kamu rasakan setelah membaca buku ini? Evaluasi hambatan dan tentukan perbaikan untuk sesi berikutnya.</p>
        </div>

        <div class="card" style="margin-bottom: 28px;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 16px;">
            Lembar Evaluasi Diri Mingguan (Self-Reflection)
          </h3>
          <form onsubmit="window.app.handleSaveReflection(event)">
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
              <label class="form-label">1. Apa pemahaman baru atau intisari hikmah yang paling berharga yang kamu dapatkan?</label>
              <textarea id="ref-experience" class="form-control" rows="3" placeholder="Tuliskan pengalaman membacamu dan intisari hikmah..." required></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">2. Hambatan apa yang paling menyulitkanmu mempertahankan jadwal membaca minggu ini? (Misal gawai, tugas, kantuk)</label>
              <textarea id="ref-obstacles" class="form-control" rows="2" placeholder="Ceritakan kendala atau distraksi yang dialami secara jujur..." required></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">3. Strategi apa yang akan kamu lakukan untuk mengatasi kendala tersebut minggu depan?</label>
              <textarea id="ref-improvement" class="form-control" rows="2" placeholder="Contoh: Mengatur alarm, mematikan ponsel 30 menit sebelum tidur..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top: 10px;">💾 Simpan Refleksi</button>
          </form>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b;">Refleksi Terakhir</h3>
            <p style="font-size: 0.84rem; color: var(--text-muted);">Riwayat evaluasi berkala untuk melihat pertumbuhan kebiasaan membacamu.</p>
          </div>
          <span class="badge badge-purple">${reflections.length} Refleksi</span>
        </div>
        <div>${reflectionCards}</div>
      </div>
    `;
  }

  // RAK BUKU DIGITAL
  function renderRakBuku(activeTab = 'all') {
    const books = store.getBooks();
    let filtered = books;
    if (activeTab === 'reading') filtered = books.filter(b => b.status === 'reading');
    else if (activeTab === 'want_to_read') filtered = books.filter(b => b.status === 'want_to_read');
    else if (activeTab === 'completed') filtered = books.filter(b => b.status === 'completed');

    const bookCards = filtered.length > 0 ? filtered.map(b => {
      const percent = Math.min(100, Math.round(((b.currentPage || 0) / (b.totalPages || 1)) * 100));
      return `
        <div class="book-card">
          <div class="book-cover">
            <span class="book-cover-emoji">${b.coverEmoji || '📖'}</span>
            <div class="book-status-pill">
              ${b.status === 'completed' ? '<span class="badge badge-green">✓ Selesai</span>' : (b.status === 'reading' ? '<span class="badge badge-blue">📖 Sedang Dibaca</span>' : '<span class="badge badge-orange">⏳ Ingin Dibaca</span>')}
            </div>
          </div>
          <div class="book-card-body">
            <h3 class="book-title">${b.title}</h3>
            <p class="book-author">oleh ${b.author}</p>
            <div class="book-progress-bar-container">
              <div class="book-progress-fill" style="width: ${percent}%;"></div>
            </div>
            <div class="book-pages-meta">
              <span>${b.currentPage || 0} / ${b.totalPages} Hal</span>
              <span>${percent}%</span>
            </div>
            <div class="book-card-actions">
              <button class="btn btn-sm btn-soft" style="flex: 1;" onclick="window.app.openUpdateBookModal('${b.id}')">✏️ Update</button>
              <button class="btn btn-sm btn-outline" style="color: #ef4444; border-color: #fecaca;" onclick="window.app.deleteBook('${b.id}')">Hapus</button>
            </div>
          </div>
        </div>
      `;
    }).join('') : `<div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: white; border-radius: 12px; border: 1px dashed #cbd5e1; color: var(--text-muted);">Tidak ada buku di kategori ini.</div>`;

    return `
      <div class="page-container">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; flex-wrap: wrap; gap: 14px;">
          <div class="page-header" style="margin-bottom: 0;">
            <h1 class="page-title">Rak Buku Digital</h1>
            <p class="page-subtitle">Kelola dan tata koleksi buku yang ingin dibaca, sedang berjalan, maupun yang sudah tuntas.</p>
          </div>
          <button class="btn btn-primary" onclick="window.app.openAddBookModal()">+ Tambah Buku ke Rak</button>
        </div>

        <div class="bookshelf-tabs">
          <button class="tab-btn ${activeTab === 'all' ? 'active' : ''}" onclick="window.app.filterBookshelf('all')">Semua Buku (${books.length})</button>
          <button class="tab-btn ${activeTab === 'reading' ? 'active' : ''}" onclick="window.app.filterBookshelf('reading')">Sedang Dibaca (${books.filter(b => b.status === 'reading').length})</button>
          <button class="tab-btn ${activeTab === 'want_to_read' ? 'active' : ''}" onclick="window.app.filterBookshelf('want_to_read')">Ingin Dibaca (${books.filter(b => b.status === 'want_to_read').length})</button>
          <button class="tab-btn ${activeTab === 'completed' ? 'active' : ''}" onclick="window.app.filterBookshelf('completed')">Selesai Dibaca (${books.filter(b => b.status === 'completed').length})</button>
        </div>

        <div class="books-grid">${bookCards}</div>
      </div>
    `;
  }

  // BOOK BUDDY
  function renderBookBuddy() {
    const posts = store.getCommunityPosts();
    const books = store.getBooks();

    const postCards = posts.map(p => `
      <div class="post-card">
        <div class="post-header">
          <div class="post-avatar ${p.avatarBg || 'bg-blue-500'}">${p.avatar || p.author.slice(0, 2).toUpperCase()}</div>
          <div style="flex: 1;">
            <div class="post-author-name">${p.author}</div>
            <div class="post-author-meta">${p.grade || 'Siswa SMA'} • 🕒 ${p.time || 'Baru saja'}</div>
          </div>
        </div>
        ${p.bookTitle ? `<div class="post-book-tag">📖 Buku: <strong>${p.bookTitle}</strong> ${p.bookAuthor ? `(${p.bookAuthor})` : ''}</div>` : ''}
        <div class="post-body">${escapeHtml(p.content)}</div>
        ${p.quote ? `<div class="post-quote">“${escapeHtml(p.quote)}”</div>` : ''}
        <div class="post-actions">
          <button class="post-action-btn ${p.hasLiked ? 'liked' : ''}" onclick="window.app.toggleLikePost('${p.id}')">
            <span>${p.hasLiked ? '❤️' : '🤍'}</span>
            <span>${p.likes} Semangat</span>
          </button>
        </div>
        ${p.comments && p.comments.length > 0 ? `
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--border-color); display: flex; flex-direction: column; gap: 8px;">
            ${p.comments.map(c => `<div style="background: #f8fafc; padding: 8px 12px; border-radius: 8px; font-size: 0.84rem;"><strong style="color: #1e3a8a;">${c.author}:</strong> ${escapeHtml(c.text)}</div>`).join('')}
          </div>
        ` : ''}
        <form onsubmit="window.app.handleAddComment(event, '${p.id}')" style="display: flex; gap: 8px; margin-top: 12px;">
          <input type="text" name="commentText" class="form-control" placeholder="Tulis ucapan semangat atau respon..." style="font-size: 0.82rem; padding: 6px 12px;" required />
          <button type="submit" class="btn btn-sm btn-primary">Kirim</button>
        </form>
      </div>
    `).join('');

    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Book Buddy</h1>
          <p class="page-subtitle">Saling mendukung, berbagi rekomendasi bacaan, dan rayakan pencapaian membaca bersama teman.</p>
        </div>

        <div class="buddy-composer">
          <h3 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 12px;">Bagikan Rekomendasi atau Capaian Membacamu</h3>
          <form onsubmit="window.app.handleSaveBuddyPost(event)">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
              <div>
                <label class="form-label" style="font-size: 0.78rem;">Buku yang Direkomendasikan</label>
                <select id="buddy-book-title" class="form-control" style="font-size: 0.85rem;">
                  <option value="">-- Pilih Buku dari Rak --</option>
                  ${books.map(b => `<option value="${b.title}">${b.title} (${b.author})</option>`).join('')}
                  <option value="Lainnya">+ Buku Lain</option>
                </select>
              </div>
              <div>
                <label class="form-label" style="font-size: 0.78rem;">Kutipan Favorit (Opsional)</label>
                <input type="text" id="buddy-quote" class="form-control" placeholder="Kalimat inspiratif..." style="font-size: 0.85rem;" />
              </div>
            </div>
            <div class="form-group">
              <textarea id="buddy-content" class="form-control" rows="2" placeholder="Tuliskan pengalaman atau motivasi membaca..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="font-size: 0.88rem; padding: 8px 18px;">🚀 Bagikan ke Book Buddy</button>
          </form>
        </div>

        <div class="buddy-feed">${postCards}</div>
      </div>
    `;
  }

  // PETUNJUK PENGGUNAAN (BAGAN ALUR GAMBAR 3.1)
  function renderPetunjuk() {
    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Petunjuk Penggunaan</h1>
          <p class="page-subtitle">Panduan langkah demi langkah menggunakan Read Daily untuk membangun kebiasaan membaca secara mandiri.</p>
        </div>

        <div class="card" style="margin-bottom: 28px;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 12px;">Bagan Alur Penggunaan Read Daily (Gambar 3.1)</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px;">Ikuti alur tahapan regulasi diri (Zimmerman, 2002) berikut:</p>
          <div style="display: flex; align-items: center; justify-content: space-between; overflow-x: auto; padding: 10px 0; gap: 8px;">
            <div style="background: #ea580c; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 75px;">Mulai</div>
            <span style="color: #94a3b8; font-weight: bold;">➔</span>
            <div style="background: #64748b; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 85px;">Beranda</div>
            <span style="color: #94a3b8; font-weight: bold;">➔</span>
            <div style="background: #f59e0b; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 95px;">Petunjuk</div>
            <span style="color: #94a3b8; font-weight: bold;">➔</span>
            <div style="background: #0284c7; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 85px;">Rak Buku</div>
            <span style="color: #94a3b8; font-weight: bold;">➔</span>
            <div style="background: #10b981; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 85px;">Target</div>
            <span style="color: #94a3b8; font-weight: bold;">➔</span>
            <div style="background: #ea580c; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 85px;">Refleksi</div>
            <span style="color: #94a3b8; font-weight: bold;">➔</span>
            <div style="background: #475569; color: white; padding: 8px 14px; border-radius: 8px; font-weight: 700; font-size: 0.82rem; text-align: center; min-width: 105px;">Privasi</div>
          </div>
        </div>

        <div class="steps-timeline">
          <div class="step-card">
            <div class="step-number">1</div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 1: Tata Rak Buku Digital</h4>
              <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Buka menu <strong>Rak Buku</strong> untuk mencatat buku yang ingin kamu baca.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 2: Tentukan Target pada Rencana Membaca</h4>
              <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Masuk ke menu <strong>Rencana Membaca</strong>. Buat target halaman atau durasi yang terukur beserta batas waktu.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 3: Catat Sesi Bacaan di Catatan Membaca</h4>
              <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Setiap kali membaca, buka <strong>Catatan Membaca</strong>. Simpan rangkuman penting agar <strong>Reading Streak</strong> otomatis bertambah.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 4: Pantau Ketercapaian di Menu Progress</h4>
              <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Lihat persentase ketercapaian target buku di menu <strong>Progress</strong> dan gunakan Timer Membaca Fokus.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">5</div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">Langkah 5: Isi Lembar Refleksi Mingguan</h4>
              <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Di akhir pekan, luangkan waktu mengisi menu <strong>Refleksi</strong> untuk mengatasi distraksi gawai dan menyusun perbaikan.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // PROFIL SAYA (MOCKUP 6)
  function renderProfil() {
    const user = store.getCurrentUser() || DEFAULT_STUDENT;
    const stats = store.getStats();

    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Profil Saya</h1>
          <p class="page-subtitle">Kelola informasi diri, identitas akademik sekolah, serta preferensi pembiasaan membaca.</p>
        </div>

        <div class="profile-card-layout">
          <div class="profile-sidebar-card">
            <div class="profile-big-avatar">${user.name.split(' ').map(n=>n[0]).join('').slice(0, 2)}</div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 2px;">${user.name}</h2>
            <div style="font-size: 0.88rem; color: #2563eb; font-weight: 600; margin-bottom: 4px;">${user.grade} • ${user.school}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 20px;">${user.email}</div>

            <div style="width: 100%; border-top: 1px solid var(--border-color); padding-top: 18px; text-align: left;">
              <div style="margin-bottom: 12px;">
                <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Guru BK Pendamping</span>
                <strong style="font-size: 0.88rem; color: #1e3a8a;">${user.bkTeacher || 'Mega Aria Monica, M.Pd'}</strong>
              </div>
              <div style="margin-bottom: 12px;">
                <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block;">Reading Streak</span>
                <strong style="font-size: 0.88rem; color: #ea580c;">🔥 ${stats.currentStreak} Hari Aktif</strong>
              </div>
            </div>

            <div style="margin-top: 24px; width: 100%; display: flex; flex-direction: column; gap: 8px;">
              <button class="btn btn-outline" style="width: 100%; font-size: 0.82rem;" onclick="window.app.resetDemoData()">
                🔄 Reset ke Data Demo Proposal
              </button>
              <button class="btn btn-outline" style="width: 100%; font-size: 0.82rem; color: #ef4444; border-color: #fecaca;" onclick="window.app.handleLogout()">
                🚪 Keluar dari Akun
              </button>
            </div>
          </div>

          <div class="card">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 20px;">Informasi Pribadi & Pengaturan Akun</h3>
            <form onsubmit="window.app.handleSaveProfile(event)">
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
                  <label class="form-label">Email</label>
                  <input type="email" id="prof-email" class="form-control" value="${user.email}" required />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Guru Bimbingan & Konseling (BK)</label>
                <input type="text" id="prof-bkteacher" class="form-control" value="${user.bkTeacher || 'Mega Aria Monica, M.Pd'}" required />
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                  <label class="form-label">Target Menit / Hari</label>
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
                <button type="submit" class="btn btn-primary">💾 Simpan Perubahan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  // PRIVASI & BANTUAN
  function renderPrivasi() {
    return `
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Privasi & Bantuan BK</h1>
          <p class="page-subtitle">Komitmen kerahasiaan data siswa, batas fungsionalitas media, serta kontak pendampingan belajar.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div class="card">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 14px;">🔒 Kebijakan Privasi dan Etika Pengembangan (Bab 2.5)</h3>
            <ul style="padding-left: 20px; font-size: 0.88rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 10px; line-height: 1.55;">
              <li><strong style="color: #1e293b;">Persetujuan Partisipasi & Kerahasiaan:</strong> Seluruh catatan membaca dan refleksi pribadi disimpan secara aman di peramban siswa dan tidak disebarluaskan.</li>
              <li><strong style="color: #1e293b;">Batas Otomasi & Transparansi:</strong> Read Daily berfungsi sebagai media pendukung regulasi diri (*self-regulated learning*), bukan diagnosis psikologis mutlak.</li>
              <li><strong style="color: #1e293b;">Peran Pendampingan Guru BK:</strong> Media ini melengkapi layanan BK belajar, bukan pengganti hubungan konseling tatap muka.</li>
            </ul>
          </div>

          <div class="card" style="background: #fbfcfe; border-left: 4px solid #2563eb;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e3a8a; margin-bottom: 8px;">Informasi Riset & Pengembang</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; font-size: 0.86rem; margin-top: 12px;">
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
                <strong>BKPI FTK UIN Raden Intan Lampung</strong>
                <div style="color: var(--text-muted); font-size: 0.8rem;">Tahun 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- 6. MAIN APPLICATION CONTROLLER ---
  class AppController {
    constructor() {
      this.currentView = 'beranda';
      this.bookshelfTab = 'all';
      this.authTab = 'login';
      this.authRole = 'siswa'; // 'siswa' | 'guru_bk'
    }

    init() {
      window.app = this;

      // Mobile Menu
      const mobileBtn = document.getElementById('mobile-menu-toggle');
      const sidebar = document.getElementById('app-sidebar');
      if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
        document.addEventListener('click', (e) => {
          if (window.innerWidth <= 900 && !sidebar.contains(e.target) && !mobileBtn.contains(e.target)) {
            sidebar.classList.remove('open');
          }
        });
      }

      // Check login status
      const user = store.getCurrentUser();
      if (!user) {
        this.renderAuthScreen();
      } else {
        this.setAppShellVisible(true);
        this.updateHeaderAndSidebar();
        this.navigate(user.role === 'guru_bk' ? 'guru_beranda' : 'beranda');
      }

      store.subscribe((event) => {
        if (event === 'auth_change') {
          const cur = store.getCurrentUser();
          if (!cur) {
            this.renderAuthScreen();
          } else {
            this.setAppShellVisible(true);
            this.updateHeaderAndSidebar();
            this.navigate(cur.role === 'guru_bk' ? 'guru_beranda' : 'beranda');
          }
        } else {
          this.updateHeaderAndSidebar();
        }
      });
    }

    setAppShellVisible(visible) {
      const sidebar = document.getElementById('app-sidebar');
      const topbar = document.getElementById('app-topbar');
      const main = document.querySelector('.app-main');

      if (sidebar) sidebar.style.display = visible ? 'flex' : 'none';
      if (topbar) topbar.style.display = visible ? 'flex' : 'none';
      if (main) {
        main.style.marginLeft = visible && window.innerWidth > 900 ? 'var(--sidebar-width)' : '0';
        main.style.width = visible && window.innerWidth > 900 ? 'calc(100% - var(--sidebar-width))' : '100%';
      }
    }

    renderAuthScreen() {
      this.setAppShellVisible(false);
      const root = document.getElementById('view-content-root');
      if (root) {
        root.innerHTML = renderLogin(this.authTab, this.authRole);
      }
    }

    switchAuthTab(tab) {
      this.authTab = tab;
      this.renderAuthScreen();
    }

    switchAuthRole(role) {
      this.authRole = role;
      this.renderAuthScreen();
    }

    handleDemoLogin(role = 'siswa') {
      store.loginDemo(role);
      showToast(`Berhasil masuk sebagai ${role === 'guru_bk' ? 'Guru BK (Mega Aria Monica, M.Pd)' : 'Siswa (Andi Pratama)'}!`);
    }

    handleLoginSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pass = document.getElementById('login-password').value;
      const res = store.login(email, pass);
      if (res.success) {
        showToast(`Selamat datang kembali, ${res.user.name}!`);
      } else {
        showToast(res.message, 'error');
      }
    }

    handleRegisterSubmit(e) {
      e.preventDefault();
      const role = this.authRole;
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const password = document.getElementById('reg-password').value;
      const school = document.getElementById('reg-school').value.trim();

      let extra = {};
      if (role === 'guru_bk') {
        const nip = document.getElementById('reg-nip').value.trim();
        extra = { nip, title: 'Guru Bimbingan dan Konseling' };
      } else {
        const grade = document.getElementById('reg-grade').value.trim();
        const bkTeacher = document.getElementById('reg-bkteacher').value.trim();
        extra = { grade, bkTeacher, dailyTargetMinutes: 30, dailyTargetPages: 15 };
      }

      const res = store.register({ role, name, email, password, school, ...extra });
      if (res.success) {
        showToast(`Akun ${role === 'guru_bk' ? 'Guru BK' : 'Siswa'} berhasil dibuat! Selamat datang di Read Daily!`);
      } else {
        showToast(res.message, 'error');
      }
    }

    handleLogout() {
      if (confirm('Apakah kamu ingin keluar dari akun Read Daily?')) {
        store.logout();
        showToast('Kamu telah keluar dari akun.');
      }
    }

    updateHeaderAndSidebar() {
      const user = store.getCurrentUser();
      if (!user) return;

      const isTeacher = user.role === 'guru_bk';
      const initials = user.name.split(' ').map(n=>n[0]).join('').slice(0, 2);
      const streak = store.getStreak();

      const elAvatar = document.getElementById('sidebar-user-avatar');
      const elName = document.getElementById('sidebar-user-name');
      const elRole = document.getElementById('sidebar-user-role');
      const elStreak = document.getElementById('topbar-streak-pill');
      const elTopAvatar = document.getElementById('topbar-user-avatar');

      if (elAvatar) elAvatar.innerText = initials;
      if (elName) elName.innerText = user.name;
      if (elRole) elRole.innerText = isTeacher ? '👨‍🏫 Guru BK • ' + user.school : `${user.grade} • ${user.school}`;
      if (elStreak) {
        elStreak.innerHTML = isTeacher ? '👨‍🏫 Mode Guru BK' : `🔥 ${streak.currentStreak} Hari Streak`;
        elStreak.style.background = isTeacher ? '#f0fdfa' : '#fff7ed';
        elStreak.style.color = isTeacher ? '#0d9488' : '#ea580c';
        elStreak.style.borderColor = isTeacher ? '#99f6e4' : '#fed7aa';
      }
      if (elTopAvatar) elTopAvatar.innerText = initials;

      // Update sidebar nav items based on role
      const navContainer = document.querySelector('.sidebar-nav');
      if (navContainer) {
        if (isTeacher) {
          navContainer.innerHTML = `
            <div class="nav-section-title">Menu Bimbingan & Konseling</div>

            <a class="nav-item ${this.currentView === 'guru_beranda' ? 'active' : ''}" data-view="guru_beranda" onclick="window.app.navigate('guru_beranda')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Beranda Guru BK</span>
            </a>

            <a class="nav-item ${this.currentView === 'guru_siswa' ? 'active' : ''}" data-view="guru_siswa" onclick="window.app.navigate('guru_siswa')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>Daftar Siswa Binaan</span>
            </a>

            <a class="nav-item ${this.currentView === 'guru_refleksi' ? 'active' : ''}" data-view="guru_refleksi" onclick="window.app.navigate('guru_refleksi')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Tinjauan Refleksi Siswa</span>
            </a>

            <div class="nav-section-title">Layanan & Laporan</div>

            <a class="nav-item ${this.currentView === 'buddy' ? 'active' : ''}" data-view="buddy" onclick="window.app.navigate('buddy')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>Book Buddy Komunitas</span>
            </a>

            <a class="nav-item" onclick="window.app.openPrintReportModal()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
              <span>Cetak Rekapitulasi BK</span>
            </a>

            <a class="nav-item ${this.currentView === 'privasi' ? 'active' : ''}" data-view="privasi" onclick="window.app.navigate('privasi')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Etika & Privasi Riset</span>
            </a>

            <a class="nav-item ${this.currentView === 'guru_profil' ? 'active' : ''}" data-view="guru_profil" onclick="window.app.navigate('guru_profil')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Profil Guru BK</span>
            </a>

            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
              <a class="nav-item logout-nav-item" onclick="window.app.handleLogout()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                <span>Keluar (Logout)</span>
              </a>
            </div>
          `;
        } else {
          navContainer.innerHTML = `
            <div class="nav-section-title">Menu Utama Siswa</div>

            <a class="nav-item ${this.currentView === 'beranda' ? 'active' : ''}" data-view="beranda" onclick="window.app.navigate('beranda')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Beranda</span>
            </a>

            <a class="nav-item ${this.currentView === 'rencana' ? 'active' : ''}" data-view="rencana" onclick="window.app.navigate('rencana')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Rencana Membaca</span>
            </a>

            <a class="nav-item ${this.currentView === 'catatan' ? 'active' : ''}" data-view="catatan" onclick="window.app.navigate('catatan')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              <span>Catatan Membaca</span>
            </a>

            <a class="nav-item ${this.currentView === 'progress' ? 'active' : ''}" data-view="progress" onclick="window.app.navigate('progress')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              <span>Progress</span>
            </a>

            <a class="nav-item ${this.currentView === 'refleksi' ? 'active' : ''}" data-view="refleksi" onclick="window.app.navigate('refleksi')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Refleksi</span>
            </a>

            <div class="nav-section-title">Fitur Pendukung</div>

            <a class="nav-item ${this.currentView === 'rak' ? 'active' : ''}" data-view="rak" onclick="window.app.navigate('rak')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <span>Rak Buku Digital</span>
            </a>

            <a class="nav-item ${this.currentView === 'buddy' ? 'active' : ''}" data-view="buddy" onclick="window.app.navigate('buddy')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>Book Buddy</span>
            </a>

            <a class="nav-item ${this.currentView === 'petunjuk' ? 'active' : ''}" data-view="petunjuk" onclick="window.app.navigate('petunjuk')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>Petunjuk</span>
            </a>

            <a class="nav-item ${this.currentView === 'privasi' ? 'active' : ''}" data-view="privasi" onclick="window.app.navigate('privasi')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Privasi & Bantuan</span>
            </a>

            <a class="nav-item ${this.currentView === 'profil' ? 'active' : ''}" data-view="profil" onclick="window.app.navigate('profil')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Profil Saya</span>
            </a>

            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #e2e8f0;">
              <a class="nav-item logout-nav-item" onclick="window.app.handleLogout()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                <span>Keluar (Logout)</span>
              </a>
            </div>
          `;
        }
      }
    }

    navigate(viewName) {
      const user = store.getCurrentUser();
      if (!user) {
        this.renderAuthScreen();
        return;
      }

      this.currentView = viewName;
      document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-view') === viewName) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      const sidebar = document.getElementById('app-sidebar');
      if (sidebar) sidebar.classList.remove('open');

      const root = document.getElementById('view-content-root');
      if (!root) return;

      window.scrollTo({ top: 0, behavior: 'smooth' });

      // View router based on role & viewName
      if (user.role === 'guru_bk') {
        switch (viewName) {
          case 'guru_beranda': root.innerHTML = renderGuruBeranda(); break;
          case 'guru_siswa': root.innerHTML = renderGuruSiswa(); break;
          case 'guru_refleksi': root.innerHTML = renderGuruRefleksi(); break;
          case 'guru_profil': root.innerHTML = renderGuruProfil(); break;
          case 'buddy': root.innerHTML = renderBookBuddy(); break;
          case 'privasi': root.innerHTML = renderPrivasi(); break;
          default: root.innerHTML = renderGuruBeranda();
        }
      } else {
        switch (viewName) {
          case 'beranda': root.innerHTML = renderBeranda(); break;
          case 'rencana': root.innerHTML = renderRencana(); break;
          case 'catatan': root.innerHTML = renderCatatan(); break;
          case 'progress': root.innerHTML = renderProgress(); break;
          case 'refleksi': root.innerHTML = renderRefleksi(); break;
          case 'rak': root.innerHTML = renderRakBuku(this.bookshelfTab); break;
          case 'buddy': root.innerHTML = renderBookBuddy(); break;
          case 'petunjuk': root.innerHTML = renderPetunjuk(); break;
          case 'profil': root.innerHTML = renderProfil(); break;
          case 'privasi': root.innerHTML = renderPrivasi(); break;
          default: root.innerHTML = renderBeranda();
        }
      }
    }

    // Modal Catatan Konseling dari Guru BK
    openCounselingModal(studentId, studentName) {
      openModal(`
        <div class="modal-header">
          <h3 class="modal-title">💬 Beri Catatan Bimbingan BK: ${studentName}</h3>
          <button class="modal-close-btn" onclick="window.app.closeModal()">&times;</button>
        </div>
        <form onsubmit="window.app.handleSendCounselingNote(event, '${studentId}')">
          <div class="modal-body">
            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 14px;">
              Kirimkan motivasi, saran manajemen waktu, atau tanggapan refleksi belajar yang akan langsung terlihat di akun siswa.
            </p>
            <div class="form-group">
              <label class="form-label">Pesan / Catatan Bimbingan dari Guru BK</label>
              <textarea id="counseling-note-input" class="form-control" rows="4" placeholder="Contoh: Bagus sekali konsistensinya! Jangan lupa sisihkan waktu 20 menit membaca sebelum tidur dan jauhkan ponsel..." required></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="window.app.closeModal()">Batal</button>
            <button type="submit" class="btn btn-primary" style="background: #0d9488;">Kirim Catatan Bimbingan</button>
          </div>
        </form>
      `);
    }

    handleSendCounselingNote(e, studentId) {
      e.preventDefault();
      const text = document.getElementById('counseling-note-input').value.trim();
      const user = store.getCurrentUser();
      const fullNote = `${text} — ${user.name} (Guru BK)`;

      // Append note to all reflections or add feedback
      const refs = store.getReflections();
      if (refs.length > 0) {
        store.addCounselingNote(refs[0].id, fullNote);
      }
      closeModal();
      showToast('Catatan bimbingan BK berhasil dikirim ke akun siswa!');
      this.navigate('guru_refleksi');
    }

    openEditCounselingNoteModal(refId) {
      const ref = store.getReflections().find(r => r.id === refId);
      openModal(`
        <div class="modal-header">
          <h3 class="modal-title">💬 Tulis Umpan Balik Konseling</h3>
          <button class="modal-close-btn" onclick="window.app.closeModal()">&times;</button>
        </div>
        <form onsubmit="window.app.handleSaveCounselingFeedback(event, '${refId}')">
          <div class="modal-body">
            <div style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 12px;">
              <strong>Siswa:</strong> ${ref?.studentName || 'Siswa'} • <strong>Hambatan:</strong> ${ref?.qObstacles || '-'}
            </div>
            <div class="form-group">
              <label class="form-label">Tanggapan / Solusi Bimbingan Belajar</label>
              <textarea id="feedback-note-input" class="form-control" rows="4" required>${ref?.counselingNote || ''}</textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="window.app.closeModal()">Batal</button>
            <button type="submit" class="btn btn-primary" style="background: #0d9488;">Simpan Catatan</button>
          </div>
        </form>
      `);
    }

    handleSaveCounselingFeedback(e, refId) {
      e.preventDefault();
      const text = document.getElementById('feedback-note-input').value.trim();
      store.addCounselingNote(refId, text);
      closeModal();
      showToast('Catatan umpan balik bimbingan disimpan!');
      this.navigate('guru_refleksi');
    }

    // Handlers Siswa
    handlePlanBookSelect(el) {
      const custom = document.getElementById('plan-book-custom');
      if (!custom) return;
      if (el.value === 'custom') {
        custom.style.display = 'block';
        custom.required = true;
        custom.focus();
      } else {
        custom.style.display = 'none';
        custom.required = false;
      }
    }

    handleSavePlan(e) {
      e.preventDefault();
      const sel = document.getElementById('plan-book-select');
      const custom = document.getElementById('plan-book-custom');
      let bookTitle = sel.value === 'custom' ? custom.value.trim() : (sel.options[sel.selectedIndex]?.getAttribute('data-title') || '');
      let bookId = sel.value === 'custom' ? null : sel.value;

      if (!bookTitle) {
        showToast('Pilih judul buku terlebih dahulu', 'error');
        return;
      }
      const targetValue = document.getElementById('plan-target').value.trim();
      const dailyPace = document.getElementById('plan-pace').value.trim();
      const deadline = document.getElementById('plan-deadline').value;

      store.addPlan({ bookId, bookTitle, targetValue, dailyPace, deadline });
      showToast('Target rencana membaca berhasil disimpan!');
      this.navigate('rencana');
    }

    togglePlanComplete(id) {
      store.updatePlan(id, { status: 'completed' });
      showToast('Selamat! Target berhasil diselesaikan 🎉');
      this.navigate('rencana');
    }

    deletePlan(id) {
      if (confirm('Hapus rencana target ini?')) {
        store.deletePlan(id);
        showToast('Rencana target telah dihapus.');
        this.navigate('rencana');
      }
    }

    handleLogBookSelect(el) {
      const custom = document.getElementById('log-book-custom');
      if (!custom) return;
      if (el.value === 'custom') {
        custom.style.display = 'block';
        custom.required = true;
        custom.focus();
      } else {
        custom.style.display = 'none';
        custom.required = false;
      }
    }

    handleSaveLog(e) {
      e.preventDefault();
      const sel = document.getElementById('log-book-select');
      const custom = document.getElementById('log-book-custom');
      let bookTitle = sel.value === 'custom' ? custom.value.trim() : (sel.options[sel.selectedIndex]?.getAttribute('data-title') || '');
      let bookId = sel.value === 'custom' ? null : sel.value;

      if (!bookTitle) {
        showToast('Pilih judul buku terlebih dahulu', 'error');
        return;
      }
      const pageRange = document.getElementById('log-range').value.trim();
      const pagesRead = parseInt(document.getElementById('log-pages-read').value) || 0;
      const durationMinutes = parseInt(document.getElementById('log-duration').value) || 30;
      const date = document.getElementById('log-date').value;
      const notes = document.getElementById('log-notes').value.trim();

      store.addLog({ bookId, bookTitle, pageRange, pagesRead, durationMinutes, date, notes });
      showToast('Catatan tersimpan! Reading streak bertambah 🔥');
      this.navigate('catatan');
    }

    deleteLog(id) {
      if (confirm('Hapus catatan membaca ini?')) {
        store.deleteLog(id);
        showToast('Catatan telah dihapus.');
        this.navigate('catatan');
      }
    }

    handleSaveReflection(e) {
      e.preventDefault();
      const bookTitle = document.getElementById('ref-book-title').value;
      const date = document.getElementById('ref-date').value;
      const qExperience = document.getElementById('ref-experience').value.trim();
      const qObstacles = document.getElementById('ref-obstacles').value.trim();
      const qImprovement = document.getElementById('ref-improvement').value.trim();

      store.addReflection({ bookTitle, date, qExperience, qObstacles, qImprovement });
      showToast('Lembar refleksi berhasil disimpan!');
      this.navigate('refleksi');
    }

    deleteReflection(id) {
      if (confirm('Hapus catatan refleksi ini?')) {
        store.deleteReflection(id);
        showToast('Catatan refleksi dihapus.');
        this.navigate('refleksi');
      }
    }

    handleSaveProfile(e) {
      e.preventDefault();
      const user = store.getCurrentUser();
      user.name = document.getElementById('prof-name').value.trim();
      user.email = document.getElementById('prof-email').value.trim();
      user.school = document.getElementById('prof-school').value.trim();
      user.bio = document.getElementById('prof-bio').value.trim();

      if (user.role === 'guru_bk') {
        const elNip = document.getElementById('prof-nip');
        if (elNip) user.nip = elNip.value.trim();
      } else {
        const elGrade = document.getElementById('prof-grade');
        const elBk = document.getElementById('prof-bkteacher');
        const elMin = document.getElementById('prof-target-minutes');
        const elPages = document.getElementById('prof-target-pages');
        if (elGrade) user.grade = elGrade.value.trim();
        if (elBk) user.bkTeacher = elBk.value.trim();
        if (elMin) user.dailyTargetMinutes = parseInt(elMin.value) || 30;
        if (elPages) user.dailyTargetPages = parseInt(elPages.value) || 15;
      }

      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(user));
      showToast('Profil berhasil diperbarui!');
      this.updateHeaderAndSidebar();
      this.navigate(user.role === 'guru_bk' ? 'guru_profil' : 'profil');
    }

    resetDemoData() {
      if (confirm('Kembalikan semua data ke kondisi awal mockup proposal?')) {
        store.resetData();
        showToast('Data demo berhasil dipulihkan!');
        this.navigate('beranda');
      }
    }

    filterBookshelf(tab) {
      this.bookshelfTab = tab;
      this.navigate('rak');
    }

    openAddBookModal() {
      const emojis = ['📖', '📘', '📕', '📗', '📙', '🌍', '⚡', '🌈', '🏛️', '🕌'];
      const pills = emojis.map((em, i) => `
        <label style="cursor: pointer; padding: 6px 10px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 1.3rem;">
          <input type="radio" name="bookEmoji" value="${em}" ${i === 0 ? 'checked' : ''} style="display:none;" />
          ${em}
        </label>
      `).join('');

      openModal(`
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
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">${pills}</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" onclick="window.app.closeModal()">Batal</button>
            <button type="submit" class="btn btn-primary">+ Tambahkan Buku</button>
          </div>
        </form>
      `);
    }

    handleSaveNewBook(e) {
      e.preventDefault();
      const title = document.getElementById('modal-book-title').value.trim();
      const author = document.getElementById('modal-book-author').value.trim();
      const totalPages = parseInt(document.getElementById('modal-book-pages').value) || 200;
      const status = document.getElementById('modal-book-status').value;
      const selectedEmojiEl = document.querySelector('input[name="bookEmoji"]:checked');
      const coverEmoji = selectedEmojiEl ? selectedEmojiEl.value : '📖';

      store.addBook({ title, author, totalPages, status, coverEmoji });
      closeModal();
      showToast(`Buku "${title}" berhasil ditambahkan ke rak!`);
      this.navigate('rak');
    }

    openUpdateBookModal(bookId) {
      const book = store.getBooks().find(b => b.id === bookId);
      if (!book) return;

      openModal(`
        <div class="modal-header">
          <h3 class="modal-title">Perbarui Progress Buku</h3>
          <button class="modal-close-btn" onclick="window.app.closeModal()">&times;</button>
        </div>
        <form onsubmit="window.app.handleUpdateBookProgress(event, '${book.id}')">
          <div class="modal-body">
            <div style="font-weight: 700; font-size: 1.1rem; color: #1e3a8a; margin-bottom: 2px;">${book.title}</div>
            <div style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 18px;">oleh ${book.author} • Total ${book.totalPages} Halaman</div>
            <div class="form-group">
              <label class="form-label">Halaman Selesai Terakhir</label>
              <input type="number" id="modal-update-page" class="form-control" value="${book.currentPage || 0}" min="0" max="${book.totalPages}" required />
            </div>
            <div class="form-group">
              <label class="form-label">Status</label>
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
      `);
    }

    handleUpdateBookProgress(e, bookId) {
      e.preventDefault();
      const currentPage = parseInt(document.getElementById('modal-update-page').value) || 0;
      const status = document.getElementById('modal-update-status').value;
      const book = store.getBooks().find(b => b.id === bookId);
      const isCompleted = status === 'completed' || currentPage >= (book?.totalPages || 0);

      store.updateBook(bookId, { currentPage, status: isCompleted ? 'completed' : status });
      closeModal();
      showToast('Progress buku berhasil diperbarui!');
      this.navigate('rak');
    }

    deleteBook(bookId) {
      if (confirm('Hapus buku ini dari rak tokomu?')) {
        store.deleteBook(bookId);
        showToast('Buku telah dihapus dari rak.');
        this.navigate('rak');
      }
    }

    handleSaveBuddyPost(e) {
      e.preventDefault();
      const bookTitle = document.getElementById('buddy-book-title').value;
      const quote = document.getElementById('buddy-quote').value.trim();
      const content = document.getElementById('buddy-content').value.trim();

      store.addCommunityPost({ bookTitle, quote, content });
      showToast('Postingan dibagikan ke Book Buddy!');
      this.navigate('buddy');
    }

    toggleLikePost(id) {
      store.toggleLikePost(id);
      this.navigate('buddy');
    }

    handleAddComment(e, id) {
      e.preventDefault();
      const input = e.target.querySelector('input[name="commentText"]');
      if (!input || !input.value.trim()) return;
      store.addComment(id, input.value.trim());
      showToast('Komentar terkirim!');
      this.navigate('buddy');
    }

    // Timer Membaca Fokus
    openReadingTimer() {
      const books = store.getBooks();
      openModal(`
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
          <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 20px;">
            <button type="button" class="btn btn-sm btn-outline timer-preset-btn" onclick="window.app.setTimerDuration(15)">15 Mnt</button>
            <button type="button" class="btn btn-sm btn-primary timer-preset-btn" onclick="window.app.setTimerDuration(25)">25 Mnt</button>
            <button type="button" class="btn btn-sm btn-outline timer-preset-btn" onclick="window.app.setTimerDuration(30)">30 Mnt</button>
          </div>
          <div style="width: 170px; height: 170px; border-radius: 50%; border: 6px solid #2563eb; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center; background: #eff6ff;">
            <span id="timer-countdown-display" style="font-size: 2.8rem; font-weight: 800; color: #1e3a8a; font-family: monospace;">25:00</span>
          </div>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <button id="timer-toggle-btn" class="btn btn-primary" style="min-width: 110px;" onclick="window.app.toggleTimerRun()">▶ Mulai</button>
            <button class="btn btn-outline" onclick="window.app.resetTimer()">↺ Reset</button>
          </div>
        </div>
        <div class="modal-footer" style="justify-content: center;">
          <span style="font-size: 0.8rem; color: var(--text-muted);">💡 Tip: Letakkan ponsel di ruangan lain selama sesi berlangsung.</span>
        </div>
      `);

      this.timerState = { timeLeft: 25 * 60, totalDuration: 25, isRunning: false, interval: null };
    }

    setTimerDuration(min) {
      if (!this.timerState) return;
      clearInterval(this.timerState.interval);
      this.timerState.isRunning = false;
      this.timerState.totalDuration = min;
      this.timerState.timeLeft = min * 60;
      this.updateTimerDisplay();
      const toggleBtn = document.getElementById('timer-toggle-btn');
      if (toggleBtn) toggleBtn.innerHTML = '▶ Mulai';
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
            showToast('🎉 Waktu membaca selesai! Bagus sekali!');
            if (confirm('Sesi membaca selesai! Ingin mencatat ke Catatan Membaca sekarang?')) {
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

    closeTimerModal() {
      if (this.timerState && this.timerState.interval) clearInterval(this.timerState.interval);
      closeModal();
    }

    // Cetak Laporan Formal BK
    openPrintReportModal() {
      const user = store.getCurrentUser() || DEFAULT_STUDENT;
      const stats = store.getStats();
      const plans = store.getPlans();

      openModal(`
        <div class="modal-header">
          <h3 class="modal-title">📄 Laporan Rekapitulasi Membaca Siswa</h3>
          <button class="modal-close-btn" onclick="window.app.closeModal()">&times;</button>
        </div>
        <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
          <div id="printable-bk-report" style="padding: 10px; font-family: serif; color: #000; line-height: 1.5;">
            <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 18px;">
              <h2 style="font-size: 1.2rem; font-weight: bold; margin: 0;">LAPORAN REKAPITULASI PEMBIASAAN MEMBACA SISWA</h2>
              <div style="font-size: 0.9rem; margin-top: 4px;">Layanan Bimbingan dan Konseling Belajar — Regulasi Diri Siswa SMA/SMK</div>
            </div>
            <table style="width: 100%; font-size: 0.88rem; margin-bottom: 18px;">
              <tr>
                <td style="font-weight: bold;">Nama Siswa</td><td>: ${user.name}</td>
                <td style="font-weight: bold;">Kelas / Sekolah</td><td>: ${user.grade || 'XI IPA 1'} / ${user.school}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Guru BK</td><td>: ${user.bkTeacher || 'Mega Aria Monica, M.Pd'}</td>
                <td style="font-weight: bold;">Reading Streak</td><td>: ${stats.currentStreak} Hari Berturut-turut</td>
              </tr>
            </table>
            <h4 style="font-size: 0.92rem; font-weight: bold; margin: 12px 0 6px 0;">Target Rencana:</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; margin-bottom: 14px;">
              <thead>
                <tr style="background: #f0f0f0;">
                  <th style="border: 1px solid #999; padding: 5px;">No</th>
                  <th style="border: 1px solid #999; padding: 5px;">Judul Buku</th>
                  <th style="border: 1px solid #999; padding: 5px;">Target</th>
                  <th style="border: 1px solid #999; padding: 5px;">Status</th>
                </tr>
              </thead>
              <tbody>
                ${plans.map((p, i) => `
                  <tr>
                    <td style="border: 1px solid #999; padding: 5px; text-align: center;">${i+1}</td>
                    <td style="border: 1px solid #999; padding: 5px;">${p.bookTitle}</td>
                    <td style="border: 1px solid #999; padding: 5px;">${p.targetValue}</td>
                    <td style="border: 1px solid #999; padding: 5px;">${p.status === 'completed' ? 'Tercapai' : 'Berjalan'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <div style="display: flex; justify-content: space-between; margin-top: 32px; font-size: 0.86rem; text-align: center;">
              <div>
                <div>Guru Bimbingan Konseling</div>
                <div style="font-weight: bold; margin-top: 45px; text-decoration: underline;">Mega Aria Monica, M.Pd</div>
              </div>
              <div>
                <div>Siswa yang Bersangkutan</div>
                <div style="font-weight: bold; margin-top: 45px; text-decoration: underline;">${user.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline" onclick="window.app.closeModal()">Tutup</button>
          <button type="button" class="btn btn-primary" onclick="window.print()">🖨️ Cetak Dokumen</button>
        </div>
      `);
    }

    handleGlobalSearch(e) {
      const q = e.target.value.toLowerCase().trim();
      if (!q || e.key !== 'Enter') return;
      const books = store.getBooks().filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
      if (books.length > 0) {
        showToast(`Ditemukan ${books.length} buku di rak.`);
        this.navigate('rak');
      } else {
        showToast(`Mencari "${q}"...`);
      }
    }

    closeModal() {
      closeModal();
    }
  }

  // Auto-init on DOM loaded
  document.addEventListener('DOMContentLoaded', () => {
    const app = new AppController();
    app.init();
  });

})();
