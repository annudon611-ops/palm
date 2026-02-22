import React, { useState } from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { theme } from '../styles/theme';
import BackIcon from '../components/icons/BackIcon';
import TarotDeck from '../components/tarot/TarotDeck';
import TarotReadingCard from '../components/tarot/TarotReadingCard';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const TarotReadingScreen = () => {
  const { goBack, screenParams } = useNavigationContext();
  const [reading, setReading] = useState(null);
  const [loading, setLoading] = useState(false);
  const category = screenParams?.category || { label: 'General' };

  const handleCardPick = async (selectedCards) => {
    setLoading(true);
    // In real app, call aiService.generateTarotReading
    // For now, simulating API call
    setTimeout(() => {
      setReading({
        cards: selectedCards,
        interpretation: "The cards suggest a period of reflection and transformation. Stay grounded as you navigate the upcoming cosmic shifts."
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="reading-screen">
      <header className="screen-header">
        <button onClick={goBack} className="back-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">{category.label} Reading</h1>
        <div style={{ width: 24 }}></div>
      </header>

      <div className="reading-content">
        {!reading && !loading && (
          <TarotDeck onPick={handleCardPick} />
        )}

        {loading && (
          <div className="reading-loading">
            <LoadingSpinner size="lg" message="Shuffling the Arcana..." />
          </div>
        )}

        {reading && (
          <TarotReadingCard reading={reading} onRetry={() => setReading(null)} />
        )}
      </div>

      <style>{`
        .reading-screen { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .screen-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .back-btn { background: none; border: none; cursor: pointer; }
        .reading-content { flex: 1; padding: 24px; overflow-y: auto; display: flex; flex-direction: column; }
        .reading-loading { flex: 1; display: flex; align-items: center; justify-content: center; }
      `}</style>
    </div>
  );
};

export default TarotReadingScreen;
