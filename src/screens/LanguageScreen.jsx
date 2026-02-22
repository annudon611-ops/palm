import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigationContext } from '../context/NavigationContext';
import { theme } from '../styles/theme';

/**
 * 🌍 LANGUAGE SELECTION SCREEN
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Features:
 * - Animated list of supported languages
 * - Visual feedback for selection
 * - "Continue" action to proceed to Onboarding
 */
const LanguageScreen = () => {
  const { language, changeLanguage, availableLanguages, t } = useLanguage();
  const { navigate } = useNavigationContext();

  const handleContinue = () => {
    navigate('Onboarding');
  };

  return (
    <div className="screen-container">
      <div className="header-section">
        <h1 className="title">Language</h1>
        <p className="subtitle">Select your preferred language for guidance</p>
      </div>

      <div className="languages-list">
        {availableLanguages.map((lang, index) => (
          <button
            key={lang.code}
            className={`lang-item glass-card ${language === lang.code ? 'active' : ''}`}
            onClick={() => changeLanguage(lang.code)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="lang-flag">{lang.flag}</span>
            <span className="lang-name">{lang.name}</span>
            {language === lang.code && (
              <div className="selection-indicator">
                <div className="dot"></div>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="footer-action">
        <button className="continue-btn" onClick={handleContinue}>
          {t.common.next}
        </button>
      </div>

      <style>{`
        .screen-container {
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          background: ${theme.colors.background.primary};
        }

        .header-section {
          margin-top: 40px;
          margin-bottom: 40px;
          animation: fadeIn 0.8s ease-out;
        }

        .title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .subtitle {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
        }

        .languages-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        .lang-item {
          display: flex;
          align-items: center;
          padding: 18px 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          width: 100%;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideInUp 0.5s ease-out both;
          cursor: pointer;
        }

        .lang-item.active {
          background: rgba(79, 172, 254, 0.1);
          border-color: rgba(79, 172, 254, 0.4);
          transform: scale(1.02);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .lang-flag {
          font-size: 1.5rem;
          margin-right: 16px;
        }

        .lang-name {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          color: white;
          flex: 1;
        }

        .selection-indicator {
          width: 20px;
          height: 20px;
          border: 2px solid ${theme.colors.accent.secondary};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: ${theme.colors.accent.secondary};
          border-radius: 50%;
          box-shadow: 0 0 10px ${theme.colors.accent.secondary};
        }

        .footer-action {
          margin-top: 30px;
          padding-bottom: 20px;
        }

        .continue-btn {
          width: 100%;
          padding: 18px;
          border-radius: 20px;
          border: none;
          background: ${theme.colors.gradients.primary};
          color: white;
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
          transition: transform 0.2s active;
        }

        .continue-btn:active {
          transform: scale(0.98);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LanguageScreen;
