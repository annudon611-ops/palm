/**
 * 🛠️ APP CONSTANTS
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

export const APP_NAME = "AI Palm Reader";
export const APP_VERSION = "1.0.0";

// 🔑 LOCAL STORAGE KEYS
export const STORAGE_KEYS = {
  USER_PROFILE: 'palm_reader_user_profile',
  USER_SETTINGS: 'palm_reader_user_settings',
  ONBOARDING_COMPLETE: 'palm_reader_onboarding_done',
  LANGUAGE: 'palm_reader_lang',
  LAST_READING: 'palm_reader_last_result'
};

// 🌍 SUPPORTED LANGUAGES
export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' }
];

// ♈ ZODIAC SIGNS
export const ZODIAC_SIGNS = [
  { id: 'aries', name: 'Aries', symbol: '♈', range: 'Mar 21 - Apr 19' },
  { id: 'taurus', name: 'Taurus', symbol: '♉', range: 'Apr 20 - May 20' },
  { id: 'gemini', name: 'Gemini', symbol: '♊', range: 'May 21 - Jun 20' },
  { id: 'cancer', name: 'Cancer', symbol: '♋', range: 'Jun 21 - Jul 22' },
  { id: 'leo', name: 'Leo', symbol: '♌', range: 'Jul 23 - Aug 22' },
  { id: 'virgo', name: 'Virgo', symbol: '♍', range: 'Aug 23 - Sep 22' },
  { id: 'libra', name: 'Libra', symbol: '♎', range: 'Sep 23 - Oct 22' },
  { id: 'scorpio', name: 'Scorpio', symbol: '♏', range: 'Oct 23 - Nov 21' },
  { id: 'sagittarius', name: 'Sagittarius', symbol: '♐', range: 'Nov 22 - Dec 21' },
  { id: 'capricorn', name: 'Capricorn', symbol: '♑', range: 'Dec 22 - Jan 19' },
  { id: 'aquarius', name: 'Aquarius', symbol: '♒', range: 'Jan 20 - Feb 18' },
  { id: 'pisces', name: 'Pisces', symbol: '♓', range: 'Feb 19 - Mar 20' }
];

// 🃏 TAROT CATEGORIES
export const TAROT_CATEGORIES = [
  { id: 'love', icon: '❤️', label: 'Love & Relationships' },
  { id: 'career', icon: '💼', label: 'Career & Ambition' },
  { id: 'finance', icon: '💰', label: 'Finance & Wealth' },
  { id: 'growth', icon: '🌱', label: 'Personal Growth' }
];

// 🖐️ PALM LINES
export const PALM_LINES = [
  { id: 'heart', label: 'Heart Line', focus: 'Emotions & Relationships' },
  { id: 'head', label: 'Head Line', focus: 'Intellect & Mental Focus' },
  { id: 'life', label: 'Life Line', focus: 'Vitality & Life Path' },
  { id: 'fate', label: 'Fate Line', focus: 'Career & Outer Influence' }
];

// 🎨 THEME COLORS (Hex Sync with theme.js)
export const COLORS = {
  PRIMARY: '#4facfe',
  SECONDARY: '#00f2fe',
  PURPLE: '#764ba2',
  BACKGROUND: '#0f0f1a',
  TEXT: '#ffffff',
  TEXT_MUTED: '#a0a0b0'
};

// 🤖 AI CONFIG
export const AI_CONFIG = {
  BASE_URL: import.meta.env.VITE_OPENROUTER_BASE_URL,
  VISION_MODEL: import.meta.env.VITE_VISION_MODEL,
  REASONING_MODEL: import.meta.env.VITE_REASONING_MODEL
};

// 📱 NAVIGATION SCREENS
export const SCREENS = {
  SPLASH: 'Splash',
  LANGUAGE: 'Language',
  ONBOARDING: 'Onboarding',
  PROFILE_SETUP: 'ProfileSetup',
  HOME: 'Home',
  PALM_SCAN: 'PalmScan',
  PALM_RESULT: 'PalmResult',
  CHAT: 'AIPalmChat',
  TAROT: 'Tarot',
  TAROT_CATEGORY: 'TarotCategory',
  TAROT_READING: 'TarotReading',
  DAILY_GUIDANCE: 'DailyGuidance',
  HOROSCOPE: 'Horoscope',
  HOROSCOPE_DETAIL: 'HoroscopeDetail',
  LOVE_READING: 'LoveReading',
  SETTINGS: 'Settings',
  PRIVACY: 'PrivacyPolicy',
  ABOUT: 'About'
};
