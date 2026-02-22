import React from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { theme } from '../styles/theme';
import { useLanguage } from '../context/LanguageContext';
import PalmResultCard from '../components/palm/PalmResultCard';
import BottomNav from '../components/layout/BottomNav';
import BackIcon from '../components/icons/BackIcon';
import ShareIcon from '../components/icons/ShareIcon';

const PalmResultScreen = () => {
  const { goBack, screenParams, navigate } = useNavigationContext();
  const { t } = useLanguage();
  const result = screenParams.result;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My AI Palm Reading',
          text: 'The stars have spoken! Check out my palm reading analysis.',
          url: window.location.href,
        });
      } catch (err) { console.log('Share failed'); }
    }
  };

  return (
    <div className="result-container">
      <header className="result-header">
        <button onClick={goBack} className="icon-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">{t.palm.resultTitle}</h1>
        <button onClick={handleShare} className="icon-btn"><ShareIcon size={24} color="white" /></button>
      </header>

      <div className="result-content">
        <PalmResultCard analysis={result} />
        
        <div className="action-area">
          <button className="chat-btn" onClick={() => navigate('AIPalmChat')}>
            Ask AI Follow-up Questions
          </button>
          <button className="home-btn" onClick={() => navigate('Home')}>
            Back to Home
          </button>
        </div>
      </div>

      <style>{`
        .result-container { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .result-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10; background: ${theme.colors.background.primary}; }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .icon-btn { background: none; border: none; cursor: pointer; padding: 8px; }
        .result-content { flex: 1; overflow-y: auto; padding: 20px; padding-bottom: 100px; }
        .action-area { margin-top: 30px; display: flex; flex-direction: column; gap: 12px; }
        .chat-btn { padding: 18px; border-radius: 20px; border: none; background: ${theme.colors.gradients.primary}; color: white; font-weight: 600; font-family: 'Outfit', sans-serif; box-shadow: 0 10px 20px rgba(79, 172, 254, 0.2); }
        .home-btn { padding: 18px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: rgba(255,255,255,0.6); font-weight: 500; }
      `}</style>
    </div>
  );
};

export default PalmResultScreen;
