import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigationContext } from '../../context/NavigationContext';
import FeatureCard from './FeatureCard';

// Icons
import PalmIcon from '../icons/PalmIcon';
import TarotIcon from '../icons/TarotIcon';
import HeartIcon from '../icons/HeartIcon';
import StarIcon from '../icons/StarIcon';
import SunIcon from '../icons/SunIcon';

/**
 * 🧩 FEATURE GRID
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A responsive grid of feature cards.
 * Features:
 * - Staggered entrance animations
 * - Centralized feature configuration
 * - Navigates to specialized reading screens
 */
const FeatureGrid = () => {
  const { t } = useLanguage();
  const { navigate } = useNavigationContext();

  // 📋 Feature Configuration
  const features = [
    {
      id: 'palm',
      title: t.home.featurePalm,
      icon: <PalmIcon size={32} color="#4facfe" />,
      screen: 'PalmScan',
      color: '#4facfe'
    },
    {
      id: 'tarot',
      title: t.home.featureTarot,
      icon: <TarotIcon size={32} color="#764ba2" />,
      screen: 'Tarot',
      color: '#764ba2'
    },
    {
      id: 'horoscope',
      title: t.home.featureHoroscope,
      icon: <StarIcon size={32} color="#ffd700" />,
      screen: 'Horoscope',
      color: '#ffd700'
    },
    {
      id: 'love',
      title: t.home.featureLove,
      icon: <HeartIcon size={32} color="#ff5252" />,
      screen: 'LoveReading',
      color: '#ff5252'
    },
    {
      id: 'guidance',
      title: t.home.featureDaily,
      icon: <SunIcon size={32} color="#00f2fe" />,
      screen: 'DailyGuidance',
      color: '#00f2fe'
    }
  ];

  return (
    <div className="feature-grid">
      {features.map((item, index) => (
        <FeatureCard
          key={item.id}
          title={item.title}
          icon={item.icon}
          color={item.color}
          delay={index * 0.1}
          onClick={() => navigate(item.screen)}
        />
      ))}

      <style>{`
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        /* Make the last item span full width if odd count */
        .feature-grid > *:last-child:nth-child(odd) {
          grid-column: span 2;
        }
      `}</style>
    </div>
  );
};

export default FeatureGrid;
