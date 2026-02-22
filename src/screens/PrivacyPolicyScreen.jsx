import React from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { theme } from '../styles/theme';
import BackIcon from '../components/icons/BackIcon';

const PrivacyPolicyScreen = () => {
  const { goBack } = useNavigationContext();

  return (
    <div className="privacy-screen">
      <header className="screen-header">
        <button onClick={goBack} className="back-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">Privacy Policy</h1>
        <div style={{ width: 24 }}></div>
      </header>

      <div className="privacy-content">
        <section className="policy-section">
          <h3>1. Data Collection</h3>
          <p>We do not store your palm images on any external server. All analysis is processed securely via OpenRouter AI and discarded immediately.</p>
        </section>

        <section className="policy-section">
          <h3>2. User Profile</h3>
          <p>Your name, birth details, and preferences are stored locally on your device. You can clear this data anytime from Settings.</p>
        </section>

        <section className="policy-section">
          <h3>3. AI Usage</h3>
          <p>We use AI models for generating guidance text. No personal identifiable information (PII) is used for model training.</p>
        </section>

        <section className="policy-section">
          <h3>4. Disclaimer</h3>
          <p>This app is for entertainment purposes only. Readings should not be considered as professional advice.</p>
        </section>

        <div className="footer-note">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <style>{`
        .privacy-screen { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .screen-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .back-btn { background: none; border: none; cursor: pointer; }
        .privacy-content { flex: 1; padding: 24px; overflow-y: auto; padding-bottom: 40px; }
        .policy-section { margin-bottom: 30px; }
        .policy-section h3 { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: ${theme.colors.accent.primary}; margin-bottom: 10px; }
        .policy-section p { font-family: 'Inter', sans-serif; font-size: 0.95rem; line-height: 1.6; color: rgba(255,255,255,0.7); }
        .footer-note { font-size: 0.8rem; color: rgba(255,255,255,0.3); text-align: center; margin-top: 40px; }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyScreen;
