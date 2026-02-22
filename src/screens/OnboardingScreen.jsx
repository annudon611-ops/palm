import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigationContext } from '../context/NavigationContext';
import { ONBOARDING_SLIDES } from '../data/onboardingData';
import { theme } from '../styles/theme';

// Import Icons (We will create these files next)
import PalmIcon from '../components/icons/PalmIcon';
import TarotIcon from '../components/icons/TarotIcon';
import StarIcon from '../components/icons/StarIcon';

/**
 * 📱 ONBOARDING SCREEN
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Features:
 * - Touch-enabled swiping logic
 * - Staggered content animations
 * - Dynamic progress indicators (dots)
 * - Transitions to Profile Setup
 */
const OnboardingScreen = () => {
  const { t } = useLanguage();
  const { navigate } = useNavigationContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 🖱️ Touch Gesture State
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  // 🛠️ Icon Mapper
  const renderIcon = (iconName, color) => {
    switch (iconName) {
      case 'PalmIcon': return <PalmIcon size={120} color={color} glow />;
      case 'TarotIcon': return <TarotIcon size={120} color={color} glow />;
      case 'StarIcon': return <StarIcon size={120} color={color} glow />;
      default: return null;
    }
  };

  // 🚀 Navigation Handlers
  const handleNext = () => {
    if (currentIndex < ONBOARDING_SLIDES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      navigate('ProfileSetup');
    }
  };

  const handleSkip = () => {
    navigate('ProfileSetup');
  };

  // 🖐️ Swipe Handlers
  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe && currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const currentSlide = ONBOARDING_SLIDES[currentIndex];

  return (
    <div 
      className="onboarding-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Top Header Actions */}
      <div className="onboarding-header">
        <button className="skip-btn" onClick={handleSkip}>
          {t.onboarding.skip}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="onboarding-content" key={currentIndex}>
        <div className="icon-wrapper animate-float">
          {renderIcon(currentSlide.icon, currentSlide.color)}
        </div>

        <div className="text-content">
          <h2 className="slide-title">{t[currentSlide.titleKey.split('.')[0]][currentSlide.titleKey.split('.')[1]]}</h2>
          <p className="slide-desc">{t[currentSlide.descKey.split('.')[0]][currentSlide.descKey.split('.')[1]]}</p>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="onboarding-footer">
        <div className="pagination-dots">
          {ONBOARDING_SLIDES.map((_, idx) => (
            <div 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              style={{ backgroundColor: idx === currentIndex ? currentSlide.color : 'rgba(255,255,255,0.2)' }}
            />
          ))}
        </div>

        <button 
          className="next-btn" 
          onClick={handleNext}
          style={{ background: currentSlide.gradient }}
        >
          {currentIndex === ONBOARDING_SLIDES.length - 1 ? t.onboarding.getStarted : t.common.next}
        </button>
      </div>

      <style>{`
        .onboarding-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 20px;
          background: ${theme.colors.background.primary};
          transition: background 0.5s ease;
        }

        .onboarding-header {
          display: flex;
          justify-content: flex-end;
          padding-top: var(--safe-area-top);
        }

        .skip-btn {
          background: none;
          border: none;
          color: var(--color-text-secondary);
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          padding: 10px;
        }

        .onboarding-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          animation: slideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .icon-wrapper {
          margin-bottom: 50px;
          filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.3));
        }

        .text-content {
          max-width: 300px;
        }

        .slide-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: white;
        }

        .slide-desc {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .onboarding-footer {
          padding-bottom: calc(var(--safe-area-bottom) + 30px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .pagination-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 24px;
          border-radius: 4px;
        }

        .next-btn {
          width: 100%;
          max-width: 280px;
          padding: 18px;
          border-radius: 20px;
          border: none;
          color: white;
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s active;
        }

        .next-btn:active {
          transform: scale(0.98);
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default OnboardingScreen;
