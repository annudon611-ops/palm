import React from 'react';

/**
 * 🖐️ PALM ICON
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A high-quality SVG representing Palmistry.
 * @param {number} size - Pixel width/height
 * @param {string} color - Stroke/Fill color
 * @param {boolean} glow - Enable neon glow filter
 */
const PalmIcon = ({ size = 24, color = 'currentColor', glow = false }) => {
  const glowId = `glow-palm-${Math.random().toString(36).substr(2, 9)}`;

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
      
      {/* ✋ Hand Outline */}
      <path 
        d="M12 22C15.5 22 18.5 20.5 19.5 17C20 15 19.5 11 19 9.5C18.7 8.5 17.5 8.2 16.8 8.8L15.5 10M12 22C8.5 22 5.5 20.5 4.5 17C4 15 4.5 11 5 9.5C5.3 8.5 6.5 8.2 7.2 8.8L8.5 10M12 22V14M12 2C10.5 2 9.5 3 9.5 4.5V11M12 2C13.5 2 14.5 3 14.5 4.5V11M8 5C6.5 5 5.5 6 5.5 7.5V12M16 5C17.5 5 18.5 6 18.5 7.5V12" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* 🌀 Life Line Detail */}
      <path 
        d="M8.5 14C8.5 14 10 17 12 17C14 17 15.5 14 15.5 14" 
        stroke={color} 
        strokeWidth="1" 
        strokeLinecap="round" 
        opacity="0.6"
      />

      {/* ✨ Mystic Dot */}
      <circle cx="12" cy="11.5" r="1" fill={color} />
    </svg>
  );
};

export default PalmIcon;
