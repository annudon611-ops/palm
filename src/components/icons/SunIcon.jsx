import React from 'react';

/**
 * ☀️ SUN ICON
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A high-quality SVG representing Daily Guidance & Vitality.
 * @param {number} size - Pixel width/height
 * @param {string} color - Stroke/Fill color
 * @param {boolean} glow - Enable neon glow filter
 */
const SunIcon = ({ size = 24, color = 'currentColor', glow = false }) => {
  const glowId = `glow-sun-${Math.random().toString(36).substr(2, 9)}`;

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
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      )}

      {/* ☀️ Core Sun Body */}
      <circle 
        cx="12" 
        cy="12" 
        r="4" 
        stroke={color} 
        strokeWidth="1.5" 
      />

      {/* 🔅 Radiating Beams */}
      <path 
        d="M12 3V5M12 19V21M3 12H5M19 12H21M5.636 5.636L7.05 7.05M16.95 16.95L18.364 18.364M5.636 18.364L7.05 16.95M16.95 7.05L18.364 5.636" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />

      {/* 💫 Mystical Ring */}
      <circle 
        cx="12" 
        cy="12" 
        r="8" 
        stroke={color} 
        strokeWidth="0.5" 
        strokeDasharray="2 3" 
        opacity="0.5"
      />
    </svg>
  );
};

export default SunIcon;
