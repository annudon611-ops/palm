import React from 'react';

/**
 * ✨ STAR ICON
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A high-quality SVG representing Astrology & Celestial energy.
 * @param {number} size - Pixel width/height
 * @param {string} color - Stroke/Fill color
 * @param {boolean} glow - Enable neon glow filter
 */
const StarIcon = ({ size = 24, color = 'currentColor', glow = false }) => {
  const glowId = `glow-star-${Math.random().toString(36).substr(2, 9)}`;

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
          <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      )}

      {/* 🌟 Central 4-Pointed Star */}
      <path 
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" 
        fill={color}
        stroke={color}
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* 💫 Outer Decorative Orbit (Subtle) */}
      <circle 
        cx="12" 
        cy="12" 
        r="9" 
        stroke={color} 
        strokeWidth="0.5" 
        strokeDasharray="2 4" 
        opacity="0.3" 
      />

      {/* ✨ Small twinkling secondary stars */}
      <circle cx="5" cy="5" r="0.8" fill={color} opacity="0.6" />
      <circle cx="19" cy="18" r="1.2" fill={color} opacity="0.4" />
    </svg>
  );
};

export default StarIcon;
