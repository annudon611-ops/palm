import React from 'react';
import { theme } from '../../styles/theme';

const HandSelector = ({ onSelect }) => {
  return (
    <div className="hand-selector-container animate-fade-in">
      <h2 className="selection-title">Which hand shall we read?</h2>
      <p className="selection-subtitle">Your dominant hand reveals your present path.</p>
      
      <div className="hands-grid">
        <button className="hand-card glass-card" onClick={() => onSelect('left')}>
          <div className="hand-icon">✋</div>
          <span className="hand-label">Left Hand</span>
        </button>
        
        <button className="hand-card glass-card" onClick={() => onSelect('right')}>
          <div className="hand-icon" style={{ transform: 'scaleX(-1)' }}>✋</div>
          <span className="hand-label">Right Hand</span>
        </button>
      </div>

      <style>{`
        .hand-selector-container { text-align: center; margin-top: 40px; }
        .selection-title { font-family: 'Outfit', sans-serif; font-size: 1.8rem; margin-bottom: 10px; }
        .selection-subtitle { color: rgba(255,255,255,0.5); margin-bottom: 40px; }
        .hands-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .hand-card {
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .hand-icon { font-size: 3rem; }
        .hand-label { font-weight: 600; letter-spacing: 0.05em; }
        .hand-card:active { transform: scale(0.95); border-color: ${theme.colors.accent.secondary}; }
      `}</style>
    </div>
  );
};

export default HandSelector;
