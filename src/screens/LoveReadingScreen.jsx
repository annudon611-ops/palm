import React, { useState } from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { theme } from '../styles/theme';
import BackIcon from '../components/icons/BackIcon';
import HeartIcon from '../components/icons/HeartIcon';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const LoveReadingScreen = () => {
  const { goBack } = useNavigationContext();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState(null);

  const generateInsight = () => {
    setLoading(true);
    setTimeout(() => {
      setInsight("Your heart energy is radiating warmth. A period of deep emotional connection is approaching. Trust your vulnerability.");
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="love-screen">
      <header className="screen-header">
        <button onClick={goBack} className="back-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">Love Reading</h1>
        <div style={{ width: 24 }}></div>
      </header>

      <div className="love-content">
        {!insight && !loading && (
          <div className="love-intro animate-fade-in">
            <div className="heart-visual animate-float">
              <HeartIcon size={120} color="#ff5252" glow />
            </div>
            <h2 className="intro-title">Romance & Alignment</h2>
            <p className="intro-subtitle">Seek clarity on your heart's journey and relationship vibrations.</p>
            <button className="love-btn" onClick={generateInsight}>Seek Love Guidance</button>
          </div>
        )}

        {loading && (
          <div className="loading-state">
            <LoadingSpinner size="lg" message="Consulting the heart's energy..." />
          </div>
        )}

        {insight && (
          <div className="insight-card glass-card animate-fade-in">
            <div className="card-header">💖 Divine Insight</div>
            <p className="insight-text">{insight}</p>
            <button className="reset-btn" onClick={() => setInsight(null)}>Seek Another Path</button>
          </div>
        )}
      </div>

      <style>{`
        .love-screen { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .screen-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .back-btn { background: none; border: none; cursor: pointer; }
        .love-content { flex: 1; padding: 24px; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .love-intro { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 20px; }
        .intro-title { font-family: 'Outfit', sans-serif; font-size: 1.8rem; color: white; }
        .intro-subtitle { color: rgba(255,255,255,0.5); max-width: 280px; line-height: 1.5; }
        .love-btn { margin-top: 20px; padding: 18px 40px; border-radius: 30px; background: linear-gradient(135deg, #ff5252 0%, #ff1744 100%); color: white; font-weight: 700; border: none; cursor: pointer; box-shadow: 0 10px 20px rgba(255, 82, 82, 0.3); }
        .loading-state { text-align: center; }
        .insight-card { padding: 30px; text-align: left; background: rgba(255, 82, 82, 0.05); border: 1px solid rgba(255, 82, 82, 0.2); border-radius: 28px; }
        .card-header { font-family: 'Outfit', sans-serif; font-size: 0.8rem; text-transform: uppercase; color: #ff5252; margin-bottom: 16px; font-weight: 600; }
        .insight-text { font-family: 'Inter', sans-serif; font-size: 1.1rem; line-height: 1.6; color: rgba(255,255,255,0.9); }
        .reset-btn { margin-top: 30px; width: 100%; padding: 16px; border-radius: 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; cursor: pointer; }
      `}</style>
    </div>
  );
};

export default LoveReadingScreen;
