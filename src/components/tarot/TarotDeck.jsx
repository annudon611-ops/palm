import React, { useState } from 'react';
import { theme } from '../../styles/theme';
import TarotCard from './TarotCard';

const TarotDeck = ({ onPick }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setIsShuffling(false);
    }, 1500);
  };

  const handleCardClick = (index) => {
    if (isShuffling) return;
    setSelectedCard(index);
    // Simulating card selection logic
    const dummyCard = { name: "The Fool", meaning: "New Beginnings", image: "fool.png" };
    onPick([dummyCard]);
  };

  return (
    <div className="deck-container animate-fade-in">
      <div className={`deck-stack ${isShuffling ? 'shuffling' : ''}`}>
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="card-wrapper"
            style={{ 
              transform: `translate(${i * 2}px, ${i * -2}px) rotate(${isShuffling ? (Math.random() * 10 - 5) : 0}deg)`,
              zIndex: 5 - i 
            }}
            onClick={() => handleCardClick(i)}
          >
            <TarotCard back />
          </div>
        ))}
      </div>

      <div className="deck-instructions">
        <p>Focus on your question...</p>
        <button className="shuffle-btn" onClick={handleShuffle} disabled={isShuffling}>
          {isShuffling ? "Shuffling..." : "Shuffle Deck"}
        </button>
      </div>

      <style>{`
        .deck-container { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 40px; }
        .deck-stack { position: relative; width: 200px; height: 300px; perspective: 1000px; }
        .card-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; transition: all 0.5s ease; cursor: pointer; }
        .card-wrapper:hover { transform: translateY(-20px) !important; }
        .shuffling .card-wrapper { animation: shuffle 0.5s infinite alternate ease-in-out; }
        .deck-instructions { text-align: center; color: rgba(255,255,255,0.6); }
        .shuffle-btn { margin-top: 10px; padding: 12px 24px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: white; cursor: pointer; transition: all 0.3s; }
        .shuffle-btn:active { background: rgba(255,255,255,0.1); }
        @keyframes shuffle { 0% { transform: translateX(0); } 100% { transform: translateX(10px) rotate(5deg); } }
      `}</style>
    </div>
  );
};

export default TarotDeck;
