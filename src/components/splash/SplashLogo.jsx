import React from 'react';
import { theme } from '../../styles/theme';

/**
 * 🖐️ SPLASH LOGO
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A mystical SVG logo representing Palmistry & Intuition.
 * Features:
 * - Hand silhouette with "All-Seeing Eye" in the palm
 * - CSS Glowing filters
 * - Pulsing "breathing" animation
 */
const SplashLogo = () => {
  return (
    <div className="logo-wrapper">
      <svg 
        width="120" 
        height="160" 
        viewBox="0 0 120 160" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mystic-hand"
      >
        {/* Define Gradients & Filters */}
        <defs>
          <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 🖐️ Hand Shape (Stylized) */}
        <path 
          d="M60 155C80 155 105 135 105 100C105 65 95 40 90 25C88 20 82 18 78 22L70 30C68 32 65 32 63 30L57 20C55 17 50 17 48 20L42 30C40 32 37 32 35 30L27 22C23 18 17 20 15 25C10 40 0 65 0 100C0 135 25 155 60 155Z" 
          fill="url(#handGradient)" 
          fillOpacity="0.15"
          stroke="url(#handGradient)"
          strokeWidth="2"
          filter="url(#glow)"
        />

        {/* 👁️ The Mystic Eye (Center of Palm) */}
        <circle cx="60" cy="95" r="18" stroke="url(#handGradient)" strokeWidth="1.5" strokeDasharray="4 2" />
        <path 
          d="M45 95C45 95 52 83 60 83C68 83 75 95 75 95C75 95 68 107 60 107C52 107 45 95 45 95Z" 
          stroke="#ffffff" 
          strokeWidth="1.5" 
        />
        <circle cx="60" cy="95" r="5" fill="#ffffff">
            <animate 
                attributeName="r" 
                values="4;6;4" 
                dur="3s" 
                repeatCount="indefinite" 
            />
        </circle>

        {/* ✨ Sparkles / Stars around the hand */}
        <circle cx="20" cy="30" r="1.5" fill="#ffffff" opacity="0.6" />
        <circle cx="100" cy="45" r="2" fill="#00f2fe" />
        <circle cx="85" cy="130" r="1" fill="#ffffff" />
      </svg>

      <style>{`
        .logo-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          filter: drop-shadow(0 0 15px rgba(0, 242, 254, 0.4));
        }

        .mystic-hand {
          animation: breath 4s infinite ease-in-out;
          transform-origin: center;
        }

        @keyframes breath {
          0%, 100% { 
            transform: scale(1); 
            filter: drop-shadow(0 0 10px rgba(0, 242, 254, 0.3));
          }
          50% { 
            transform: scale(1.05); 
            filter: drop-shadow(0 0 25px rgba(0, 242, 254, 0.6));
          }
        }
      `}</style>
    </div>
  );
};

export default SplashLogo;
