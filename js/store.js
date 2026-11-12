// store.js - State Management & LocalStorage Persistence untuk Read Daily
import {
  DEFAULT_USER,
  DEFAULT_BOOKS,
  DEFAULT_PLANS,
  DEFAULT_LOGS,
  DEFAULT_REFLECTIONS,
  DEFAULT_STREAK,
  DEFAULT_COMMUNITY_POSTS
} from './mockData.js';

const STORAGE_KEYS = {
  USER: 'read_daily_user',
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
    if (!localStorage.getItem(STORAGE_KEYS.USER)) {
      this.resetToDefaults();
    }
  }

  resetToDefaults() {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(DEFAULT_USER));
    localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(DEFAULT_BOOKS));
    localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(DEFAULT_PLANS));
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(DEFAULT_LOGS));
    localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(DEFAULT_REFLECTIONS));
    localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(DEFAULT_STREAK));
    localStorage.setItem(STORAGE_KEYS.COMMUNITY, JSON.stringify(DEFAULT_COMMUNITY_POSTS));
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify(event, data) {
    this.subscribers.forEach(cb => cb(event, data));
  }

  // --- USER ---
  getUser() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  }

  saveUser(userData) {
    const updated = { ...this.getUser(), ...userData };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated));
    this.notify('user_updated', updated);
    return updated;
  }

  // --- BOOKS ---
  getBooks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKS)) || [];
    } catch {
      return [];
    }
  }

  addBook(book) {
    const books = this.getBooks();
    const newBook = {
      id: 'b-' + Date.now(),
      currentPage: 0,
      notesCount: 0,
      coverEmoji: book.coverEmoji || '📖',
      coverColor: book.coverColor || 'from-blue-500 to-indigo-600',
      status: book.status || 'want_to_read',
      startDate: book.status === 'reading' ? new Date().toISOString().split('T')[0] : null,
      finishDate: book.status === 'completed' ? new Date().toISOString().split('T')[0] : null,
      ...book
    };
    books.unshift(newBook);
    localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
    this.notify('book_added', newBook);
    return newBook;
  }

  updateBook(id, updateData) {
    const books = this.getBooks().map(b => (b.id === id ? { ...b, ...updateData } : b));
    localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
    this.notify('book_updated', { id, updateData });
  }

  deleteBook(id) {
    const books = this.getBooks().filter(b => b.id !== id);
    localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
    this.notify('book_deleted', id);
  }

  // --- PLANS (RENCANA MEMBACA) ---
  getPlans() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.PLANS)) || [];
    } catch {
      return [];
    }
  }

  addPlan(plan) {
    const plans = this.getPlans();
    const newPlan = {
      id: 'plan-' + Date.now(),
      createdDate: new Date().toISOString().split('T')[0],
      currentProgress: 0,
      status: 'active',
      ...plan
    };
    plans.unshift(newPlan);
    localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(plans));
    this.notify('plan_added', newPlan);
    return newPlan;
  }

  updatePlan(id, updateData) {
    const plans = this.getPlans().map(p => (p.id === id ? { ...p, ...updateData } : p));
    localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(plans));
    this.notify('plan_updated', { id, updateData });
  }

  deletePlan(id) {
    const plans = this.getPlans().filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(plans));
    this.notify('plan_deleted', id);
  }

  // --- LOGS (CATATAN MEMBACA) ---
  getLogs() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.LOGS)) || [];
    } catch {
      return [];
    }
  }

  addLog(log) {
    const logs = this.getLogs();
    const newLog = {
      id: 'log-' + Date.now(),
      date: log.date || new Date().toISOString().split('T')[0],
      ...log
    };
    logs.unshift(newLog);
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));

    // Update book progress if matched
    if (log.bookId) {
      const book = this.getBooks().find(b => b.id === log.bookId);
      if (book) {
        const pagesRead = parseInt(log.pagesRead) || 0;
        const newCurrentPage = Math.min(book.totalPages, (book.currentPage || 0) + pagesRead);
        const newStatus = newCurrentPage >= book.totalPages ? 'completed' : 'reading';
        this.updateBook(book.id, {
          currentPage: newCurrentPage,
          status: newStatus,
          notesCount: (book.notesCount || 0) + 1,
          finishDate: newStatus === 'completed' ? new Date().toISOString().split('T')[0] : book.finishDate
        });
      }
    }

    // Also update Streak
    this.incrementStreak(parseInt(log.durationMinutes) || 30, parseInt(log.pagesRead) || 15);

    this.notify('log_added', newLog);
    return newLog;
  }

  deleteLog(id) {
    const logs = this.getLogs().filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
    this.notify('log_deleted', id);
  }

  // --- REFLECTIONS (REFLEKSI MEMBACA) ---
  getReflections() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.REFLECTIONS)) || [];
    } catch {
      return [];
    }
  }

  addReflection(reflection) {
    const refs = this.getReflections();
    const newRef = {
      id: 'ref-' + Date.now(),
      date: reflection.date || new Date().toISOString().split('T')[0],
      streakMaintained: true,
      ...reflection
    };
    refs.unshift(newRef);
    localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(refs));
    this.notify('reflection_added', newRef);
    return newRef;
  }

  deleteReflection(id) {
    const refs = this.getReflections().filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEYS.REFLECTIONS, JSON.stringify(refs));
    this.notify('reflection_deleted', id);
  }

  // --- STREAK & ANALYTICS ---
  getStreak() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.STREAK)) || DEFAULT_STREAK;
    } catch {
      return DEFAULT_STREAK;
    }
  }

  incrementStreak(minutes = 30, pages = 15) {
    const streak = this.getStreak();
    const today = new Date().toISOString().split('T')[0];
    if (streak.lastReadDate !== today) {
      streak.currentStreak += 1;
      if (streak.currentStreak > streak.longestStreak) {
        streak.longestStreak = streak.currentStreak;
      }
      streak.lastReadDate = today;
    }

    // update today's history bar
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const currentDayName = dayNames[new Date().getDay()];
    const todayHistory = streak.historyDays.find(d => d.day === currentDayName);
    if (todayHistory) {
      todayHistory.minutes = (todayHistory.minutes || 0) + minutes;
      todayHistory.pages = (todayHistory.pages || 0) + pages;
      todayHistory.status = 'completed';
    }

    localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(streak));
    this.notify('streak_updated', streak);
  }

  // --- BOOK BUDDY / COMMUNITY ---
  getCommunityPosts() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMMUNITY)) || [];
    } catch {
      return [];
    }
  }

  addCommunityPost(post) {
    const posts = this.getCommunityPosts();
    const user = this.getUser();
    const newPost = {
      id: 'post-' + Date.now(),
      author: user.name,
      grade: user.grade,
      avatar: user.name.split(' ').map(n => n[0]).join('').slice(0, 2),
      avatarBg: 'bg-indigo-600',
      time: 'Baru saja',
      likes: 1,
      hasLiked: true,
      comments: [],
      ...post
    };
    posts.unshift(newPost);
    localStorage.setItem(STORAGE_KEYS.COMMUNITY, JSON.stringify(posts));
    this.notify('post_added', newPost);
    return newPost;
  }

  toggleLikePost(postId) {
    const posts = this.getCommunityPosts().map(p => {
      if (p.id === postId) {
        const hasLiked = !p.hasLiked;
        return {
          ...p,
          hasLiked,
          likes: hasLiked ? p.likes + 1 : Math.max(0, p.likes - 1)
        };
      }
      return p;
    });
    localStorage.setItem(STORAGE_KEYS.COMMUNITY, JSON.stringify(posts));
    this.notify('post_liked', postId);
  }

  addCommentToPost(postId, commentText) {
    const user = this.getUser();
    const posts = this.getCommunityPosts().map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [
            ...p.comments,
            { author: user.name, text: commentText, date: 'Baru saja' }
          ]
        };
      }
      return p;
    });
    localStorage.setItem(STORAGE_KEYS.COMMUNITY, JSON.stringify(posts));
    this.notify('comment_added', postId);
  }

  // --- SUMMARY STATS ---
  getStats() {
    const books = this.getBooks();
    const logs = this.getLogs();
    const streak = this.getStreak();

    const totalBooks = books.length;
    const completedBooks = books.filter(b => b.status === 'completed').length;
    const readingBooks = books.filter(b => b.status === 'reading').length;
    const wantToReadBooks = books.filter(b => b.status === 'want_to_read').length;

    const totalPagesRead = logs.reduce((acc, l) => acc + (parseInt(l.pagesRead) || 0), 0);
    const totalMinutesRead = logs.reduce((acc, l) => acc + (parseInt(l.durationMinutes) || 0), 0);

    // Calculate percentage toward total books completion
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

export const store = new Store();

