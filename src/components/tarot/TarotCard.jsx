import React from 'react';
import { theme } from '../../styles/theme';

const TarotCard = ({ back, image, revealed }) => {
  return (
    <div className={`tarot-card ${revealed ? 'revealed' : ''}`}>
      <div className="card-inner">
        {/* Back of Card */}
        <div className="card-face card-back">
          <div className="card-pattern">
            <div className="moon-symbol">☾</div>
            <div className="star-symbol">★</div>
          </div>
        </div>

        {/* Front of Card */}
        <div className="card-face card-front">
          <div className="card-image-placeholder">
            {image ? <img src={image} alt="Tarot" /> : <div className="placeholder-art">🔮</div>}
          </div>
        </div>
      </div>

      <style>{`
        .tarot-card { width: 100%; height: 100%; perspective: 1000px; border-radius: 16px; }
        .card-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.8s; transform-style: preserve-3d; }
        .revealed .card-inner { transform: rotateY(180deg); }
        .card-face { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
        .card-back { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border: 2px solid #764ba2; display: flex; align-items: center; justify-content: center; }
        .card-pattern { border: 1px dashed rgba(255,255,255,0.2); width: 90%; height: 90%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; }
        .moon-symbol, .star-symbol { font-size: 2rem; color: #ffd700; opacity: 0.6; }
        .card-front { background: #fff; color: #000; transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; }
        .placeholder-art { font-size: 4rem; }
      `}</style>
    </div>
  );
};

export default TarotCard;
