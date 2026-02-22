import React from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { theme } from '../styles/theme';
import BackIcon from '../components/icons/BackIcon';
import SplashLogo from '../components/splash/SplashLogo';

const AboutScreen = () => {
  const { goBack } = useNavigationContext();

  return (
    <div className="about-screen">
      <header className="screen-header">
        <button onClick={goBack} className="back-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">About Oracle</h1>
        <div style={{ width: 24 }}></div>
      </header>

      <div className="about-content">
        <div className="app-branding">
          <SplashLogo />
          <h2 className="app-name">AI Palm Reader</h2>
          <p className="app-version">Version 1.0.0</p>
        </div>

        <div className="about-text-card glass-card">
          <p>
            AI Palm Reader is a modern spiritual companion designed to bridge ancient wisdom 
            with cutting-edge Artificial Intelligence. 
          </p>
          <p>
            Our mission is to provide a space for self-reflection and guidance, helping you 
            navigate life's journey with clarity and mindfulness.
          </p>
        </div>

        <div className="copyright-info">
          <p>© 2024 AI Palm Reader Studio</p>
          <p>Crafted with ✨ in the Nebula</p>
        </div>
      </div>

      <style>{`
        .about-screen { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .screen-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .back-btn { background: none; border: none; cursor: pointer; }
        .about-content { flex: 1; padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 30px; text-align: center; }
        .app-branding { margin-top: 20px; }
        .app-name { font-family: 'Outfit', sans-serif; font-size: 1.8rem; margin: 16px 0 4px 0; color: white; }
        .app-version { font-size: 0.9rem; color: rgba(255,255,255,0.4); }
        .about-text-card { padding: 24px; background: rgba(255,255,255,0.03); border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); }
        .about-text-card p { font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.6; color: rgba(255,255,255,0.7); margin-bottom: 16px; }
        .copyright-info { margin-top: auto; padding-bottom: 40px; }
        .copyright-info p { font-size: 0.8rem; color: rgba(255,255,255,0.3); margin: 4px 0; }
      `}</style>
    </div>
  );
};

export default AboutScreen;
