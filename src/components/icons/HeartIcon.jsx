import React from 'react';

/**
 * ❤️ HEART ICON
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A high-quality SVG representing Love & Compatibility.
 * @param {number} size - Pixel width/height
 * @param {string} color - Stroke/Fill color
 * @param {boolean} glow - Enable neon glow filter
 */
const HeartIcon = ({ size = 24, color = 'currentColor', glow = false }) => {
  const glowId = `glow-heart-${Math.random().toString(36).substr(2, 9)}`;

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

      {/* ❤️ Heart Shape */}
      <path 
        d="M12 21L10.55 19.705C5.4 15.03 2 11.95 2 8.15C2 5.05 4.42 2.61 7.5 2.61C9.24 2.61 10.91 3.42 12 4.7C13.09 3.42 14.76 2.61 16.5 2.61C19.58 2.61 22 5.05 22 8.15C22 11.95 18.6 15.03 13.45 19.71L12 21Z" 
        fill={color}
        fillOpacity={glow ? "0.2" : "1"}
        stroke={color}
        strokeWidth="1.5"
      />

      {/* ✨ Internal Sparkle */}
      <circle cx="16" cy="7" r="1.5" fill="white" opacity="0.6" />
    </svg>
  );
};

export default HeartIcon;
