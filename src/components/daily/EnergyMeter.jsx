import React from 'react';
import { theme } from '../../styles/theme';

const EnergyMeter = ({ level, label }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="meter-container glass-card">
      <div className="meter-svg-wrapper">
        <svg width="100" height="100" viewBox="0 0 100 100" className="meter-svg">
          <circle 
            className="meter-bg" 
            cx="50" cy="50" r={radius} 
            stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" 
          />
          <circle 
            className="meter-progress" 
            cx="50" cy="50" r={radius} 
            stroke="url(#gradient)" strokeWidth="8" fill="none" 
            strokeDasharray={circumference} 
            strokeDashoffset={offset} 
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="100%" stopColor="#00f2fe" />
            </linearGradient>
          </defs>
        </svg>
        <div className="meter-value">
          <span className="level-text">{level}%</span>
        </div>
      </div>
      
      <div className="meter-info">
        <span className="meter-label">{label}</span>
        <span className="meter-desc">High Frequency</span>
      </div>

      <style>{`
        .meter-container {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .meter-svg-wrapper { position: relative; width: 80px; height: 80px; }
        .meter-svg { transform: rotate(-90deg); }
        .meter-value { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .level-text { font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 1.2rem; color: white; }
        .meter-label { font-size: 0.9rem; color: rgba(255,255,255,0.6); display: block; margin-bottom: 4px; }
        .meter-desc { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: ${theme.colors.accent.secondary}; font-weight: 600; }
      `}</style>
    </div>
  );
};

export default EnergyMeter;
