import React from 'react';
import { theme } from '../../styles/theme';

const TarotReadingCard = ({ reading, onRetry }) => {
  return (
    <div className="reading-result glass-card animate-fade-in">
      <h2 className="reading-title">The Cards Speak</h2>
      
      <div className="cards-reveal-grid">
        {reading.cards.map((card, idx) => (
          <div key={idx} className="revealed-card">
            <div className="card-visual">{card.name[0]}</div>
            <p className="card-name">{card.name}</p>
          </div>
        ))}
      </div>

      <div className="interpretation-box">
        <h3 className="interp-label">Interpretation</h3>
        <p className="interp-text">{reading.interpretation}</p>
      </div>

      <button className="retry-btn" onClick={onRetry}>Draw Again</button>

      <style>{`
        .reading-result { padding: 24px; display: flex; flex-direction: column; gap: 24px; text-align: center; }
        .reading-title { font-family: 'Outfit', sans-serif; font-size: 1.5rem; color: white; margin-bottom: 10px; }
        .cards-reveal-grid { display: flex; justify-content: center; gap: 20px; margin-bottom: 20px; }
        .revealed-card { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .card-visual { width: 80px; height: 120px; background: linear-gradient(135deg, #ffd700 0%, #ff8c00 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: #000; font-weight: bold; box-shadow: 0 0 15px rgba(255, 215, 0, 0.4); }
        .card-name { font-size: 0.9rem; color: white; font-weight: 500; }
        .interpretation-box { text-align: left; background: rgba(0,0,0,0.2); padding: 16px; border-radius: 16px; }
        .interp-label { font-family: 'Outfit', sans-serif; font-size: 0.9rem; color: rgba(255,255,255,0.5); text-transform: uppercase; margin-bottom: 8px; }
        .interp-text { line-height: 1.6; color: rgba(255,255,255,0.9); }
        .retry-btn { margin-top: 10px; padding: 16px; border-radius: 20px; background: transparent; border: 1px solid rgba(255,255,255,0.2); color: white; cursor: pointer; transition: all 0.3s; }
        .retry-btn:hover { background: rgba(255,255,255,0.1); }
      `}</style>
    </div>
  );
};

export default TarotReadingCard;
