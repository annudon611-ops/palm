import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.js';
import hi from '../locales/hi.js';
import es from '../locales/es.js';
import fr from '../locales/fr.js';
import it from '../locales/it.js';
import ko from '../locales/ko.js';

// 🌎 Default Language (Fallback)
const DEFAULT_LANGUAGE = 'en';

// 📂 Translation Registry
const translations = {
  en,
  hi,
  es,
  fr,
  it,
  ko
};

// 📦 Context Creation
const LanguageContext = createContext();

// 🪝 Custom Hook
export const useLanguage = () => useContext(LanguageContext);

// 🛡️ Provider Component
export const LanguageProvider = ({ children }) => {
  // 💾 State: Load from local storage or use browser default
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('app-language');
    const browserLang = navigator.language.split('-')[0];
    return saved || (translations[browserLang] ? browserLang : DEFAULT_LANGUAGE);
  });

  // 📝 Translation State
  const [t, setT] = useState(translations[language]);

  // 🔄 Update translations when language changes
  useEffect(() => {
    setT(translations[language]);
    localStorage.setItem('app-language', language);
    document.documentElement.lang = language;
  }, [language]);

  // 🗣️ Change Language Function
  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setLanguage(langCode);
    } else {
      console.warn(`Language code "${langCode}" not found.`);
    }
  };

  // 📤 Context Value
  const value = {
    language,
    changeLanguage,
    t, // The translation object
    availableLanguages: [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
      { code: 'es', name: 'Español', flag: '🇪🇸' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'it', name: 'Italiano', flag: '🇮🇹' },
      { code: 'ko', name: '한국어', flag: '🇰🇷' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
