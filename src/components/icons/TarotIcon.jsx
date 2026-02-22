import React from 'react';

/**
 * 🃏 TAROT ICON
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A high-quality SVG representing a Tarot Card.
 * @param {number} size - Pixel width/height
 * @param {string} color - Stroke/Fill color
 * @param {boolean} glow - Enable neon glow filter
 */
const TarotIcon = ({ size = 24, color = 'currentColor', glow = false }) => {
  const glowId = `glow-tarot-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: glow ? `url(#${glowId})` : 'none' }}
    >
      {glow && (
        <defs>
          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      )}

      {/* 🎴 Card Frame */}
      <rect 
        x="5" 
        y="3" 
        width="14" 
        height="18" 
        rx="2" 
        stroke={color} 
        strokeWidth="1.5" 
      />

      {/* 🌙 Crescent Moon Symbol */}
      <path 
        d="M12 8C10.5 8 9.2 8.6 8.3 9.7C8.1 10 8 10.3 8 10.7C8 12.1 9.1 13.3 10.5 13.3C10.9 13.3 11.2 13.2 11.5 13C10.4 12.1 9.7 10.8 9.7 9.3C9.7 8.8 9.8 8.4 10 8C10.6 8 11.3 8 12 8Z" 
        fill={color}
        opacity="0.8"
      />

      {/* ✨ Star Symbol */}
      <path 
        d="M14 11L14.5 12.5L16 13L14.5 13.5L14 15L13.5 13.5L12 13L13.5 12.5L14 11Z" 
        fill={color} 
      />

      {/* 📏 Decorative Lines */}
      <line x1="8" y1="17" x2="16" y2="17" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="8" y1="6" x2="16" y2="6" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
};

export default TarotIcon;
