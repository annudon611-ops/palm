import React, { useEffect } from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { useUser } from '../context/UserContext';
import { theme } from '../styles/theme';
import SplashLogo from '../components/splash/SplashLogo';
import CosmicBackground from '../components/splash/CosmicBackground';

/**
 * 🔮 SPLASH SCREEN
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Features:
 * - Animated Cosmic Background
 * - Pulsing Palm/Mystic Logo
 * - Auto-routing logic based on user state
 */
const SplashScreen = () => {
  const { replace } = useNavigationContext();
  const { hasCompletedOnboarding, isProfileComplete } = useUser();

  useEffect(() => {
    // ⏱️ Hold splash for 3 seconds to allow assets to load and create mood
    const timer = setTimeout(() => {
      determineNextScreen();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  /**
   * 🗺️ ROUTING LOGIC
   * Decide where the user goes next
   */
  const determineNextScreen = () => {
    const isFirstTime = !localStorage.getItem('app_initialized');

    if (isFirstTime) {
      localStorage.setItem('app_initialized', 'true');
      replace('Language'); // 1. Select Language first
    } else if (!hasCompletedOnboarding) {
      replace('Onboarding'); // 2. Show features
    } else if (!isProfileComplete) {
      replace('ProfileSetup'); // 3. Get user details
    } else {
      replace('Home'); // 4. Direct to Dashboard
    }
  };

  return (
    <div className="splash-container">
      {/* 🌌 Animated Stars and Nebulas */}
      <CosmicBackground />

      <div className="splash-content">
        {/* 🖐️ Pulsing Mystic Logo */}
        <SplashLogo />
        
        <div className="splash-text-area">
          <h1 className="splash-title">AI PALM READER</h1>
          <p className="splash-subtitle">Consult the Universe within you</p>
        </div>

        {/* 🪄 Subtle loading indicator at the bottom */}
        <div className="splash-footer">
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>

      <style>{`
        .splash-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${theme.colors.background.primary};
          overflow: hidden;
        }

        .splash-content {
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .splash-text-area {
          margin-top: 30px;
          animation: fadeInUp 1s ease-out 0.5s both;
        }

        .splash-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: white;
          text-shadow: 0 0 20px rgba(0, 242, 254, 0.5);
          margin-bottom: 8px;
        }

        .splash-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .splash-footer {
          position: absolute;
          bottom: 60px;
          width: 120px;
        }

        .loading-bar {
          height: 2px;
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .loading-progress {
          height: 100%;
          width: 0%;
          background: ${theme.colors.gradients.primary};
          animation: loadProgress 2.5s ease-in-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes loadProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
