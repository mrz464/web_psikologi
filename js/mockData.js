// mockData.js - Data awal realistis sesuai Mockup Media Proposal Read Daily
// Penulis: Hurratud Daraini (UIN Raden Intan Lampung, 2026)

export const DEFAULT_USER = {
  id: "user-1",
  name: "Andi Pratama",
  email: "andi@gmail.com",
  school: "SMA Negeri 1",
  grade: "XI IPA 1",
  bkTeacher: "Mega Aria Monica, M.Pd",
  avatarUrl: "",
  bio: "Siswa SMA yang sedang berkomitmen membangun rutinitas membaca 20-30 menit setiap hari untuk memperluas wawasan.",
  interests: ["Fiksi Inspiratif", "Pengembangan Diri", "Sains & Teknologi", "Sejarah"],
  dailyTargetMinutes: 30,
  dailyTargetPages: 15,
  joinedDate: "2026-02-01"
};

export const DEFAULT_BOOKS = [
  {
    id: "b-1",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    category: "Novel / Fiksi",
    totalPages: 529,
    currentPage: 210,
    status: "reading", // 'want_to_read' | 'reading' | 'completed'
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

export const DEFAULT_PLANS = [
  {
    id: "plan-1",
    bookId: "b-1",
    bookTitle: "Laskar Pelangi",
    targetType: "pages", // 'pages' | 'minutes' | 'finish'
    targetValue: "200 Halaman",
    dailyPace: "15 Halaman / Hari",
    deadline: "2026-04-25",
    currentProgress: 40,
    status: "active", // 'active' | 'completed' | 'adjusted'
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

export const DEFAULT_LOGS = [
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

export const DEFAULT_REFLECTIONS = [
  {
    id: "ref-1",
    date: "2026-04-20",
    bookTitle: "Laskar Pelangi",
    qExperience: "Buku yang saya baca minggu ini mengajarkan saya tentang pentingnya ketekunan dan pantang menyerah dalam meraih cita-cita meskipun di tengah keterbatasan sarana belajar.",
    qObstacles: "Sempat terdistraksi media sosial Instagram dan game ponsel di malam hari selama 40 menit sehingga membaca agak tertunda.",
    qImprovement: "Mematikan notifikasi ponsel dan menyimpannya di ruangan lain 30 menit sebelum jadwal membaca rutin pukul 20:00 WIB.",
    mood: "Semangat",
    streakMaintained: true
  },
  {
    id: "ref-2",
    date: "2026-04-13",
    bookTitle: "Laskar Pelangi",
    qExperience: "Berhasil membaca 5 hari berturut-turut tanpa terputus. Pikiran terasa lebih fokus dan kosakata bahasa Indonesia semakin kaya.",
    qObstacles: "Hari Rabu agak lelah karena ada kegiatan ekstrakurikuler Pramuka hingga sore hari.",
    qImprovement: "Membagi waktu membaca menjadi 15 menit di pagi hari setelah subuh dan 15 menit di malam hari.",
    mood: "Puas",
    streakMaintained: true
  }
];

export const DEFAULT_STREAK = {
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

export const DEFAULT_COMMUNITY_POSTS = [
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

