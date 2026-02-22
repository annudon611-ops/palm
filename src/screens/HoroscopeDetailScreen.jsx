import React, { useState, useEffect } from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { theme } from '../styles/theme';
import BackIcon from '../components/icons/BackIcon';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const HoroscopeDetailScreen = () => {
  const { goBack, screenParams } = useNavigationContext();
  const [loading, setLoading] = useState(true);
  const sign = screenParams?.sign || { name: 'Aries' };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate AI generation
  }, []);

  return (
    <div className="detail-screen">
      <header className="screen-header">
        <button onClick={goBack} className="back-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">{sign.name} Horoscope</h1>
        <div style={{ width: 24 }}></div>
      </header>

      {loading ? (
        <div className="loading-container">
          <LoadingSpinner size="lg" message={`Aligning with ${sign.name}...`} />
        </div>
      ) : (
        <div className="detail-content animate-fade-in">
          <div className="date-badge">Today, {new Date().toLocaleDateString()}</div>
          
          <div className="horoscope-card glass-card">
            <h3 className="section-title">General Mood</h3>
            <p className="section-text">
              The planetary alignment suggests a day of introspection. 
              Embrace the quiet moments to find clarity in your path.
            </p>
          </div>

          <div className="metrics-grid">
            <div className="metric-box">
              <span className="metric-label">Love</span>
              <span className="metric-val">85%</span>
            </div>
            <div className="metric-box">
              <span className="metric-label">Career</span>
              <span className="metric-val">70%</span>
            </div>
            <div className="metric-box">
              <span className="metric-label">Health</span>
              <span className="metric-val">90%</span>
            </div>
          </div>

          <div className="horoscope-card glass-card">
            <h3 className="section-title">Cosmic Advice</h3>
            <p className="section-text">
              Avoid rushing into decisions today. Wait for the dust to settle before taking action.
            </p>
          </div>
        </div>
      )}

      <style>{`
        .detail-screen { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .screen-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .back-btn { background: none; border: none; cursor: pointer; }
        .loading-container { flex: 1; display: flex; align-items: center; justify-content: center; }
        .detail-content { flex: 1; padding: 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; padding-bottom: 100px; }
        .date-badge { align-self: center; background: rgba(255,255,255,0.1); padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; color: rgba(255,255,255,0.8); margin-bottom: 10px; }
        .horoscope-card { padding: 24px; background: rgba(255,255,255,0.03); border-radius: 24px; border: 1px solid rgba(255,255,255,0.08); }
        .section-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: ${theme.colors.accent.secondary}; margin-bottom: 12px; }
        .section-text { font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.6; color: rgba(255,255,255,0.8); }
        .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .metric-box { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .metric-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.5); }
        .metric-val { font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 1.2rem; color: white; }
      `}</style>
    </div>
  );
};

export default HoroscopeDetailScreen;
