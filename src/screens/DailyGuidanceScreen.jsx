import React, { useState, useEffect } from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { theme } from '../styles/theme';
import BackIcon from '../components/icons/BackIcon';
import GuidanceCard from '../components/daily/GuidanceCard';
import EnergyMeter from '../components/daily/EnergyMeter';

const DailyGuidanceScreen = () => {
  const { goBack } = useNavigationContext();
  const { t } = useLanguage();
  const { userProfile } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Simulate loading
  }, []);

  return (
    <div className="guidance-screen">
      <header className="screen-header">
        <button onClick={goBack} className="back-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">{t.home.featureDaily}</h1>
        <div style={{ width: 24 }}></div>
      </header>

      <div className="guidance-content">
        <div className="greeting-section">
          <h2 className="greeting-title">Cosmic Update for {userProfile.name}</h2>
          <p className="greeting-subtitle">Your energy alignment today is strong.</p>
        </div>

        <EnergyMeter level={85} label="Vibration Level" />

        <div className="cards-grid">
          <GuidanceCard 
            title="Focus" 
            content="Clarity & Purpose" 
            icon="🎯" 
            color="#4facfe" 
            delay={0.1}
          />
          <GuidanceCard 
            title="Avoid" 
            content="Negative Self-Talk" 
            icon="🚫" 
            color="#ff5252" 
            delay={0.2}
          />
          <GuidanceCard 
            title="Lucky Color" 
            content="Sapphire Blue" 
            icon="🔵" 
            color="#00f2fe" 
            delay={0.3}
          />
        </div>

        <div className="affirmation-box glass-card">
          <h3>Daily Affirmation</h3>
          <p>"I am aligned with the universe and trust my path completely."</p>
        </div>
      </div>

      <style>{`
        .guidance-screen { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .screen-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .back-btn { background: none; border: none; cursor: pointer; }
        .guidance-content { flex: 1; padding: 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 24px; padding-bottom: 100px; }
        .greeting-title { font-family: 'Outfit', sans-serif; font-size: 1.5rem; color: white; margin-bottom: 4px; }
        .greeting-subtitle { color: rgba(255,255,255,0.6); font-size: 0.95rem; }
        .cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .affirmation-box { padding: 24px; text-align: center; border-radius: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); }
        .affirmation-box h3 { font-family: 'Outfit', sans-serif; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.5); margin-bottom: 12px; }
        .affirmation-box p { font-family: 'Inter', sans-serif; font-size: 1.1rem; font-style: italic; color: white; line-height: 1.5; }
      `}</style>
    </div>
  );
};

export default DailyGuidanceScreen;
