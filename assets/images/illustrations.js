// illustrations.js - Scalable Vector Graphics sesuai Mockup Media Read Daily

export const ILLUSTRATIONS = {
  // Mockup 1: Ilustrasi tumpukan buku dengan speech bubble "Buku adalah jendela dunia."
  booksHero: `
    <svg viewBox="0 0 420 300" class="w-full h-auto drop-shadow-md select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bookBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
        <linearGradient id="bookGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>
        <linearGradient id="bookOrange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <linearGradient id="bookTeal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#14b8a6"/>
          <stop offset="100%" stop-color="#0f766e"/>
        </linearGradient>
        <filter id="shadowSoft" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#1e293b" flood-opacity="0.12"/>
        </filter>
      </defs>

      <!-- Soft Background Elements -->
      <circle cx="280" cy="180" r="100" fill="#e0f2fe" opacity="0.6"/>
      <circle cx="160" cy="140" r="70" fill="#fef3c7" opacity="0.5"/>
      <ellipse cx="270" cy="265" rx="130" ry="18" fill="#cbd5e1" opacity="0.45"/>

      <!-- Plant in Pot -->
      <g transform="translate(110, 160)">
        <!-- Leaves -->
        <path d="M25 25 C10 10 5 -5 15 -18 C25 -2 30 10 25 25 Z" fill="#10b981"/>
        <path d="M25 25 C38 8 48 0 54 -8 C52 10 40 20 25 25 Z" fill="#059669"/>
        <path d="M25 20 C20 -5 22 -20 25 -30 C30 -15 32 0 25 20 Z" fill="#34d399"/>
        <!-- Pot -->
        <path d="M12 25 L38 25 L33 58 L17 58 Z" fill="#f97316"/>
        <rect x="10" y="20" width="30" height="7" rx="3" fill="#ea580c"/>
      </g>

      <!-- Book Stack -->
      <!-- Bottom Book: Dark Teal Large -->
      <g transform="translate(170, 215)">
        <path d="M0 25 L160 0 L195 18 L35 43 Z" fill="#047857"/>
        <path d="M0 25 L35 43 L35 58 L0 40 Z" fill="#065f46"/>
        <path d="M35 43 L195 18 L195 33 L35 58 Z" fill="#e2e8f0"/>
        <!-- Spine Lines -->
        <line x1="8" y1="28" x2="8" y2="38" stroke="#34d399" stroke-width="2"/>
        <line x1="14" y1="27" x2="14" y2="37" stroke="#34d399" stroke-width="2"/>
      </g>

      <!-- Middle Book: Orange -->
      <g transform="translate(190, 185)">
        <path d="M0 20 L135 0 L168 15 L32 35 Z" fill="#f59e0b"/>
        <path d="M0 20 L32 35 L32 48 L0 33 Z" fill="#d97706"/>
        <path d="M32 35 L168 15 L168 28 L32 48 Z" fill="#f8fafc"/>
        <!-- Ribbon bookmark -->
        <path d="M70 29 L82 28 L82 46 L76 40 L70 46 Z" fill="#ef4444"/>
      </g>

      <!-- Top Book: Vivid Royal Blue -->
      <g transform="translate(205, 155)">
        <path d="M0 20 L115 0 L145 15 L30 35 Z" fill="#2563eb"/>
        <path d="M0 20 L30 35 L30 47 L0 32 Z" fill="#1d4ed8"/>
        <path d="M30 35 L145 15 L145 27 L30 47 Z" fill="#f1f5f9"/>
        <!-- Cover Title Deco -->
        <line x1="38" y1="23" x2="85" y2="17" stroke="#93c5fd" stroke-width="3" stroke-linecap="round"/>
        <line x1="38" y1="28" x2="70" y2="23" stroke="#bfdbfe" stroke-width="2" stroke-linecap="round"/>
      </g>

      <!-- Topmost Open/Small Book: Emerald Green -->
      <g transform="translate(225, 130)">
        <path d="M0 16 L90 0 L115 12 L25 28 Z" fill="#10b981"/>
        <path d="M0 16 L25 28 L25 38 L0 26 Z" fill="#059669"/>
        <path d="M25 28 L115 12 L115 22 L25 38 Z" fill="#f8fafc"/>
      </g>

      <!-- Cute Glasses on top book -->
      <g transform="translate(245, 126)">
        <circle cx="15" cy="8" r="7" fill="none" stroke="#334155" stroke-width="2"/>
        <circle cx="35" cy="6" r="7" fill="none" stroke="#334155" stroke-width="2"/>
        <path d="M22 7 Q25 4 28 6" fill="none" stroke="#334155" stroke-width="2"/>
      </g>

      <!-- Speech Bubble: "Buku adalah jendela dunia." -->
      <g transform="translate(50, 45)" filter="url(#shadowSoft)">
        <path d="M20 0 L170 0 C181 0 190 9 190 20 L190 60 C190 71 181 80 170 80 L80 80 L55 98 L60 80 L20 80 C9 80 0 71 0 60 L0 20 C0 9 9 0 20 0 Z" fill="#ffffff"/>
        <!-- Sparkles -->
        <path d="M195 10 L200 0 L205 10 L215 15 L205 20 L200 30 L195 20 L185 15 Z" fill="#f59e0b"/>
        <!-- Quotes inside -->
        <text x="95" y="38" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e3a8a" text-anchor="middle" font-style="italic">
          “Buku adalah
        </text>
        <text x="95" y="58" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e3a8a" text-anchor="middle" font-style="italic">
          jendela dunia.”
        </text>
      </g>

      <!-- Soft floating stars/leaves -->
      <circle cx="360" cy="90" r="4" fill="#3b82f6" opacity="0.6"/>
      <circle cx="385" cy="120" r="3" fill="#10b981" opacity="0.6"/>
      <circle cx="65" cy="180" r="3" fill="#f59e0b" opacity="0.6"/>
    </svg>
  `,

  // Mockup 2: Ilustrasi Rencana Membaca (Target, Kalender, Buku)
  planningArt: `
    <svg viewBox="0 0 240 220" class="w-full h-auto drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="120" cy="195" rx="85" ry="14" fill="#e2e8f0"/>
      <!-- Calendar Card -->
      <g transform="translate(45, 40)">
        <rect x="0" y="0" width="130" height="120" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <rect x="0" y="0" width="130" height="32" rx="14" fill="#2563eb"/>
        <rect x="0" y="20" width="130" height="12" fill="#2563eb"/>
        <!-- Binder rings -->
        <rect x="25" y="-6" width="8" height="14" rx="4" fill="#64748b"/>
        <rect x="95" y="-6" width="8" height="14" rx="4" fill="#64748b"/>
        <!-- Target Goal Icons -->
        <circle cx="65" cy="68" r="22" fill="#eff6ff"/>
        <path d="M55 68 L62 75 L76 59" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="65" y="105" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">TARGET 100%</text>
      </g>
      <!-- Stack of mini books -->
      <g transform="translate(125, 125)">
        <rect x="0" y="20" width="70" height="14" rx="3" fill="#10b981"/>
        <rect x="5" y="7" width="60" height="13" rx="3" fill="#f59e0b"/>
        <rect x="10" y="-6" width="50" height="13" rx="3" fill="#3b82f6"/>
        <polygon points="40,20 46,20 43,30" fill="#ef4444"/>
      </g>
    </svg>
  `,

  // Mockup 3: Ilustrasi Catatan Membaca (Jurnal & Pena)
  notesArt: `
    <svg viewBox="0 0 240 220" class="w-full h-auto drop-shadow-sm select-none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="120" cy="195" rx="80" ry="12" fill="#e2e8f0"/>
      <!-- Notepad -->
      <g transform="translate(45, 35)">
        <rect x="0" y="0" width="125" height="145" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="0" y="0" width="22" height="145" rx="12" fill="#0284c7"/>
        <rect x="10" y="0" width="12" height="145" fill="#0284c7"/>
        <!-- Notebook Lines -->
        <line x1="34" y1="35" x2="110" y2="35" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="34" y1="55" x2="110" y2="55" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
        <line x1="34" y1="75" x2="95" y2="75" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
        <line x1="34" y1="95" x2="105" y2="95" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
        <line x1="34" y1="115" x2="80" y2="115" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
        <!-- Bookmark ribbon -->
        <path d="M75 0 L87 0 L87 35 L81 30 L75 35 Z" fill="#f59e0b"/>
      </g>
      <!-- Pen angled -->
      <g transform="translate(130, 70) rotate(35)">
        <rect x="0" y="0" width="14" height="95" rx="4" fill="#3b82f6"/>
        <polygon points="0,95 14,95 7,112" fill="#1e293b"/>
        <polygon points="5,112 9,112 7,118" fill="#cbd5e1"/>
        <rect x="0" y="10" width="14" height="6" fill="#f59e0b"/>
      </g>
    </svg>
  `
};

