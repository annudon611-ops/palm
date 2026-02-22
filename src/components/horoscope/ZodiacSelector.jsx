import React from 'react';
import { theme } from '../../styles/theme';
import { ZODIAC_SIGNS } from '../../utils/constants';

const ZodiacSelector = ({ onSelect }) => {
  return (
    <div className="zodiac-grid">
      {ZODIAC_SIGNS.map((sign, idx) => (
        <button 
          key={sign.id} 
          className="zodiac-card glass-card animate-fade-in"
          style={{ animationDelay: `${idx * 0.05}s` }}
          onClick={() => onSelect(sign)}
        >
          <span className="zodiac-symbol">{sign.symbol}</span>
          <div className="zodiac-info">
            <span className="zodiac-name">{sign.name}</span>
            <span className="zodiac-date">{sign.range}</span>
          </div>
        </button>
      ))}

      <style>{`
        .zodiac-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .zodiac-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .zodiac-card:active { transform: scale(0.96); background: rgba(255,255,255,0.06); border-color: ${theme.colors.accent.secondary}; }
        .zodiac-symbol { font-size: 2.5rem; color: ${theme.colors.accent.primary}; margin-bottom: 10px; }
        .zodiac-name { font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 1rem; color: white; display: block; margin-bottom: 4px; }
        .zodiac-date { font-size: 0.75rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.05em; }
      `}</style>
    </div>
  );
};

export default ZodiacSelector;
