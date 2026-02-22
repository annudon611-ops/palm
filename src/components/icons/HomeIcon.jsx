import React from 'react';

/**
 * 🏠 HOME ICON
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A high-quality SVG representing the Dashboard / Sanctuary.
 * @param {number} size - Pixel width/height
 * @param {string} color - Stroke/Fill color
 * @param {boolean} glow - Enable neon glow filter
 */
const HomeIcon = ({ size = 24, color = 'currentColor', glow = false }) => {
  const glowId = `glow-home-${Math.random().toString(36).substr(2, 9)}`;

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
          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      )}

      {/* 🏠 House Structure */}
      <path 
        d="M3 9.5L12 3L21 9.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9.5Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* ✨ Central Cosmic Star */}
      <path 
        d="M12 10L12.5 12L14.5 12.5L12.5 13L12 15L11.5 13L9.5 12.5L11.5 12L12 10Z" 
        fill={color} 
      />

      {/* 🚪 Entrance Detail */}
      <path 
        d="M9 21V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V21" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export default HomeIcon;
