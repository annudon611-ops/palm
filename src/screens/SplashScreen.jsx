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
    }, 3500);
    return () => clearTimeout(timer);
  }, [hasCompletedOnboarding, isProfileComplete, replace]);

  return (
    <div style={{ height: '100vh', width: '100%', background: '#030308', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <CosmicBackground />
      <div style={{ zIndex: 10, textAlign: 'center' }}>
        <div style={{ filter: 'drop-shadow(0 0 20px #00f2fe)', animation: 'pulse 2s infinite ease-in-out' }}>
          <SplashLogo />
        </div>
        <h1 style={{ color: '#fff', fontFamily: 'Outfit, sans-serif', letterSpacing: '0.4em', marginTop: '20px', fontSize: '1.8rem' }}>ORACLE AI</h1>
        <div style={{ height: '1px', width: '100px', background: 'linear-gradient(90deg, transparent, #00f2fe, transparent)', margin: '15px auto' }}></div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Decoding Your Destiny</p>
      </div>
      <style>{`
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.05); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default SplashScreen;
