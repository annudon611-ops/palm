import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import { useNavigationContext } from '../context/NavigationContext';
import { theme } from '../styles/theme';
import { getTimeBasedGreeting } from '../utils/helpers';

// Components (We will create these in the next steps)
import FeatureGrid from '../components/home/FeatureGrid';
import WelcomeBanner from '../components/home/WelcomeBanner';
import QuickActions from '../components/home/QuickActions';
import BottomNav from '../components/layout/BottomNav';
import StarIcon from '../components/icons/StarIcon';

/**
 * 🏠 HOME DASHBOARD
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * The main hub of the PWA.
 * Features:
 * - Dynamic greeting based on time of day
 * - Personalized welcome message
 * - Feature access grid (Palm, Tarot, etc.)
 * - Daily guidance preview
 */
const HomeScreen = () => {
  const { userProfile } = useUser();
  const { t, language } = useLanguage();
  const { navigate } = useNavigationContext();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Set greeting based on time (Morning, Afternoon, Evening)
    const timeKey = getTimeBasedGreeting();
    // For now using simple logic, later can be translated
    setGreeting(timeKey.charAt(0).toUpperCase() + timeKey.slice(1));
  }, []);

  return (
    <div className="home-container">
      {/* 🌌 Top Header Area */}
      <header className="home-header">
        <div className="user-info">
          <p className="greeting-text">{greeting},</p>
          <h1 className="user-name">{userProfile.name || 'Seeker'}</h1>
        </div>
        <button className="settings-trigger" onClick={() => navigate('Settings')}>
          <div className="avatar-placeholder">
            {userProfile.name?.charAt(0) || 'S'}
          </div>
        </button>
      </header>

      {/* 📜 Main Scrollable Content */}
      <div className="home-scroll-area">
        {/* 🪄 Welcome Banner / Daily Quote */}
        <WelcomeBanner />

        {/* ⚡ Quick Access (AI Palm Chat focus) */}
        <QuickActions />

        {/* 🧩 Core Features Grid */}
        <div className="section-label-container">
          <h2 className="section-label">{t.home.featureDaily}</h2>
          <div className="label-line"></div>
        </div>
        
        <FeatureGrid />

        <div className="spacer"></div>
      </div>

      {/* 🧭 Persistent Navigation */}
      <BottomNav activeTab="home" />

      <style>{`
        .home-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: ${theme.colors.background.primary};
          color: white;
          padding-top: var(--safe-area-top);
        }

        .home-header {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          animation: fadeIn 0.8s ease-out;
        }

        .greeting-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          margin: 0;
        }

        .user-name {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0;
        }

        .settings-trigger {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .avatar-placeholder {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: ${theme.colors.gradients.purple};
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .home-scroll-area {
          flex: 1;
          overflow-y: auto;
          padding: 0 24px;
          padding-bottom: 100px; /* Space for bottom nav */
          scrollbar-width: none;
        }

        .home-scroll-area::-webkit-scrollbar {
          display: none;
        }

        .section-label-container {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0 16px 0;
        }

        .section-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(255, 255, 255, 0.4);
          white-space: nowrap;
        }

        .label-line {
          height: 1px;
          flex: 1;
          background: linear-gradient(90deg, rgba(255,255,255,0.1), transparent);
        }

        .spacer {
          height: 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HomeScreen;
