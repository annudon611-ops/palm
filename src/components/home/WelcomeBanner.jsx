import React from 'react';
import { useUser } from '../../context/UserContext';
import { useLanguage } from '../../context/LanguageContext';
import { theme } from '../../styles/theme';

/**
 * 🪄 WELCOME BANNER
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Features:
 * - Zodiac-specific daily focus
 * - Premium Glassmorphism styling
 * - Subtle animated glow effect
 */
const WelcomeBanner = () => {
  const { userProfile } = useUser();
  const { t } = useLanguage();

  // 📝 Placeholder logic for "Today's Energy" 
  // In a full production app, this might come from an API or daily seed
  const dailyFocus = {
    aries: "Bold Beginnings",
    taurus: "Rooted Growth",
    gemini: "Fluid Expression",
    cancer: "Emotional Depth",
    leo: "Radiant Confidence",
    virgo: "Divine Order",
    libra: "Harmonious Balance",
    scorpio: "Sacred Transformation",
    sagittarius: "Expansive Vision",
    capricorn: "Steady Ascent",
    aquarius: "Unique Innovation",
    pisces: "Intuitive Flow"
  };

  const currentFocus = dailyFocus[userProfile.zodiacSign] || "Cosmic Alignment";

  return (
    <div className="welcome-banner glass-card animate-pulse">
      <div className="banner-content">
        <div className="zodiac-badge">
          <span className="zodiac-icon">✨</span>
          <span className="zodiac-text">{userProfile.zodiacSign}</span>
        </div>
        
        <h3 className="energy-title">Today's Energy</h3>
        <p className="focus-text">"{currentFocus}"</p>
        
        <p className="banner-desc">
          The stars are aligning to support your journey of self-discovery. 
          Focus on your breath and let intuition lead.
        </p>
      </div>

      {/* Background Decorative Element */}
      <div className="banner-orb"></div>

      <style>{`
        .welcome-banner {
          position: relative;
          padding: 24px;
          margin: 10px 0 20px 0;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: fadeIn 1s ease-out;
        }

        .banner-content {
          position: relative;
          z-index: 2;
        }

        .zodiac-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(79, 172, 254, 0.15);
          border: 1px solid rgba(79, 172, 254, 0.3);
          border-radius: 20px;
          margin-bottom: 16px;
        }

        .zodiac-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #00f2fe;
        }

        .energy-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .focus-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 12px;
          background: ${theme.colors.gradients.primary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .banner-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.7);
          max-width: 90%;
        }

        .banner-orb {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, #4facfe 0%, transparent 70%);
          opacity: 0.2;
          filter: blur(20px);
          z-index: 1;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default WelcomeBanner;
