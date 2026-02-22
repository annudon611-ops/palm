import React from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { theme } from '../styles/theme';
import { ZODIAC_SIGNS } from '../utils/constants';
import BackIcon from '../components/icons/BackIcon';
import ZodiacSelector from '../components/horoscope/ZodiacSelector';

const HoroscopeScreen = () => {
  const { goBack, navigate } = useNavigationContext();
  const { t } = useLanguage();

  const handleZodiacSelect = (sign) => {
    navigate('HoroscopeDetail', { sign });
  };

  return (
    <div className="horoscope-screen">
      <header className="screen-header">
        <button onClick={goBack} className="back-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">{t.horoscope.title}</h1>
        <div style={{ width: 24 }}></div>
      </header>

      <div className="horoscope-content">
        <div className="intro-section">
          <h2 className="intro-title">Choose Your Sign</h2>
          <p className="intro-subtitle">Daily cosmic forecast for all 12 signs.</p>
        </div>

        <ZodiacSelector onSelect={handleZodiacSelect} />
      </div>

      <style>{`
        .horoscope-screen { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .screen-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .back-btn { background: none; border: none; cursor: pointer; }
        .horoscope-content { flex: 1; padding: 24px; overflow-y: auto; padding-bottom: 100px; }
        .intro-section { margin-bottom: 30px; text-align: center; }
        .intro-title { font-family: 'Outfit', sans-serif; font-size: 1.6rem; color: white; margin-bottom: 8px; }
        .intro-subtitle { font-size: 0.95rem; color: rgba(255,255,255,0.5); }
      `}</style>
    </div>
  );
};

export default HoroscopeScreen;
