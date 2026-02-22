import React from 'react';

/**
 * 💬 CHAT ICON
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A high-quality SVG representing AI Conversation.
 * @param {number} size - Pixel width/height
 * @param {string} color - Stroke/Fill color
 * @param {boolean} glow - Enable neon glow filter
 */
const ChatIcon = ({ size = 24, color = 'currentColor', glow = false }) => {
  const glowId = `glow-chat-${Math.random().toString(36).substr(2, 9)}`;

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

      {/* 🗨️ Chat Bubble Outline */}
      <path 
        d="M21 11.5C21 15.6421 17.1944 19 12.5 19C11.1706 19 9.91971 18.7303 8.8118 18.2505L4 20L5.5 15.5C4.55744 14.3642 4 12.9904 4 11.5C4 7.35786 7.80558 4 12.5 4C17.1944 4 21 7.35786 21 11.5Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* ✨ Mystic Sparkle inside Bubble */}
      <path 
        d="M11 9L11.5 10.5L13 11L11.5 11.5L11 13L10.5 11.5L9 11L10.5 10.5L11 9Z" 
        fill={color} 
      />

      {/* 📏 Modern Dots */}
      <circle cx="15" cy="11" r="1" fill={color} opacity="0.6" />
      <circle cx="15" cy="14" r="0.5" fill={color} opacity="0.4" />
    </svg>
  );
};

export default ChatIcon;
