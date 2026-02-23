import React, { useEffect } from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { useUser } from '../context/UserContext';
import SplashLogo from '../components/splash/SplashLogo';
import CosmicBackground from '../components/splash/CosmicBackground';

const SplashScreen = () => {
  const { replace } = useNavigationContext();
  const { hasCompletedOnboarding, isProfileComplete } = useUser();

  useEffect(() => {
    const timer = setTimeout(() => {
      const isFirstTime = !localStorage.getItem('app_initialized');
      if (isFirstTime) {
        localStorage.setItem('app_initialized', 'true');
        replace('Language');
      } else if (!hasCompletedOnboarding) {
        replace('Onboarding');
      } else if (!isProfileComplete) {
        replace('ProfileSetup');
      } else {
        replace('Home');
      }
    }, 4000); // 4 seconds for a premium feel

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="premium-splash">
      <CosmicBackground />
      
      <div className="splash-content">
        <div className="logo-aura">
          <SplashLogo />
        </div>
        
        <div className="text-reveal">
          <h1 className="brand-name">ORACLE AI</h1>
          <div className="divider"></div>
          <p className="tagline">Your Destiny, Decoded</p>
        </div>

        <div className="loading-container">
          <div className="shimmer-bar"></div>
        </div>
      </div>

      <style>{`
        .premium-splash {
          height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center;
          background: #05050a; overflow: hidden; position: relative;
        }
        .splash-content { z-index: 10; display: flex; flex-direction: column; align-items: center; }
        
        .logo-aura {
          filter: drop-shadow(0 0 30px rgba(0, 242, 254, 0.4));
          animation: logoFloat 4s infinite ease-in-out;
          margin-bottom: 40px;
        }

        .brand-name {
          font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 800;
          letter-spacing: 0.4em; color: white; margin: 0;
          animation: textFadeUp 1.5s ease-out both;
        }

        .divider {
          height: 1px; width: 40px; background: linear-gradient(90deg, transparent, #00f2fe, transparent);
          margin: 15px 0; animation: expandLine 2s ease-in-out forwards;
        }

        .tagline {
          font-family: 'Inter', sans-serif; font-size: 0.8rem; color: rgba(255,255,255,0.4);
          text-transform: uppercase; letter-spacing: 0.3em;
          animation: textFadeUp 1.5s ease-out 0.5s both;
        }

        .loading-container {
          position: absolute; bottom: 80px; width: 200px; height: 2px;
          background: rgba(255,255,255,0.05); border-radius: 10px; overflow: hidden;
        }

        .shimmer-bar {
          height: 100%; width: 50%;
          background: linear-gradient(90deg, transparent, #00f2fe, transparent);
          animation: shimmer 2s infinite linear;
        }

        @keyframes logoFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes textFadeUp { from { opacity: 0; transform: translateY(20px); filter: blur(10px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes expandLine { from { width: 0; } to { width: 60px; } }
        @keyframes shimmer { from { transform: translateX(-150%); } to { transform: translateX(150%); } }
      `}</style>
    </div>
  );
};

export default SplashScreen;
