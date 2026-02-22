import React from 'react';
import { useNavigationContext } from '../../context/NavigationContext';
import { theme } from '../../styles/theme';

// Icons (We've created some, others will be mapped)
import HomeIcon from '../icons/HomeIcon';
import PalmIcon from '../icons/PalmIcon';
import ChatIcon from '../icons/ChatIcon';
import TarotIcon from '../icons/TarotIcon';
import SettingsIcon from '../icons/SettingsIcon';

/**
 * 🧭 BOTTOM NAVIGATION
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Features:
 * - Persistent position with safe-area support
 * - Glassmorphism backdrop
 * - Active state indicators with neon glow
 * - Tactile feedback on tap
 */
const BottomNav = ({ activeTab = 'home' }) => {
  const { navigate, currentScreen } = useNavigationContext();

  const navItems = [
    { id: 'home', icon: <HomeIcon />, label: 'Home', screen: 'Home' },
    { id: 'palm', icon: <PalmIcon />, label: 'Scan', screen: 'PalmScan' },
    { id: 'chat', icon: <ChatIcon />, label: 'AI Chat', screen: 'AIPalmChat' },
    { id: 'tarot', icon: <TarotIcon />, label: 'Tarot', screen: 'Tarot' },
    { id: 'settings', icon: <SettingsIcon />, label: 'More', screen: 'Settings' },
  ];

  // Helper to determine if a tab is active based on current screen
  const isActive = (itemId, screenName) => {
    if (activeTab === itemId) return true;
    return currentScreen === screenName;
  };

  return (
    <nav className="bottom-nav-container">
      <div className="bottom-nav-glass">
        {navItems.map((item) => {
          const active = isActive(item.id, item.screen);
          return (
            <button
              key={item.id}
              className={`nav-item ${active ? 'active' : ''}`}
              onClick={() => navigate(item.screen)}
            >
              <div className="icon-wrapper">
                {React.cloneElement(item.icon, {
                  size: 24,
                  color: active ? theme.colors.accent.secondary : 'rgba(255,255,255,0.4)',
                  glow: active
                })}
              </div>
              <span className="nav-label">{item.label}</span>
              {active && <div className="active-indicator" />}
            </button>
          );
        })}
      </div>

      <style>{`
        .bottom-nav-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: var(--z-index-header);
          padding-bottom: var(--safe-area-bottom);
          background: transparent;
          pointer-events: none; /* Allow clicks through the container edge */
        }

        .bottom-nav-glass {
          pointer-events: auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 70px;
          margin: 0 16px 16px 16px;
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }

        .nav-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          padding: 0;
          flex: 1;
          height: 100%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .icon-wrapper {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin-bottom: 4px;
        }

        .nav-item.active .icon-wrapper {
          transform: translateY(-4px);
        }

        .nav-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }

        .nav-item.active .nav-label {
          color: ${theme.colors.accent.secondary};
          font-weight: 700;
        }

        .active-indicator {
          position: absolute;
          bottom: 12px;
          width: 4px;
          height: 4px;
          background: ${theme.colors.accent.secondary};
          border-radius: 50%;
          box-shadow: 0 0 10px ${theme.colors.accent.secondary};
        }

        /* Ripple/Scale effect on click */
        .nav-item:active .icon-wrapper {
          transform: scale(0.85);
        }
      `}</style>
    </nav>
  );
};

export default BottomNav;
