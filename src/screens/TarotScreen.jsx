import React from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { theme } from '../styles/theme';
import { TAROT_CATEGORIES } from '../utils/constants';
import BackIcon from '../components/icons/BackIcon';
import CategorySelector from '../components/tarot/CategorySelector';

const TarotScreen = () => {
  const { goBack, navigate } = useNavigationContext();
  const { t } = useLanguage();

  const handleCategorySelect = (category) => {
    navigate('TarotReading', { category });
  };

  return (
    <div className="tarot-screen">
      <header className="screen-header">
        <button onClick={goBack} className="back-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">{t.tarot.title}</h1>
        <div style={{ width: 24 }}></div>
      </header>

      <div className="tarot-content">
        <div className="mystic-intro">
          <div className="mystic-orb"></div>
          <h2 className="intro-title">Consult the Major Arcana</h2>
          <p className="intro-subtitle">Choose a realm where you seek clarity and guidance.</p>
        </div>

        <CategorySelector onSelect={handleCategorySelect} />
      </div>

      <style>{`
        .tarot-screen { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .screen-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .back-btn { background: none; border: none; cursor: pointer; }
        .tarot-content { flex: 1; overflow-y: auto; padding: 24px; padding-bottom: 100px; }
        .mystic-intro { position: relative; text-align: center; margin-bottom: 40px; }
        .intro-title { font-family: 'Outfit', sans-serif; font-size: 1.6rem; margin-bottom: 8px; color: white; }
        .intro-subtitle { font-size: 0.95rem; color: rgba(255,255,255,0.5); line-height: 1.5; }
        .mystic-orb { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); width: 100px; height: 100px; background: radial-gradient(circle, #764ba2 0%, transparent 70%); opacity: 0.3; filter: blur(20px); z-index: -1; }
      `}</style>
    </div>
  );
};

export default TarotScreen;
