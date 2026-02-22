import React, { useEffect, useState } from 'react';

/**
 * 🎬 SCREEN WRAPPER
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Wraps individual screens to handle:
 * 1. Entry/Exit animations
 * 2. Scroll management (overflow-y)
 * 3. Absolute positioning for transitions
 */
const ScreenWrapper = ({ children, direction = 'none' }) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // 🎨 Determine Animation Class based on direction
    switch (direction) {
      case 'forward':
        setAnimationClass('anim-slide-in-right');
        break;
      case 'back':
        setAnimationClass('anim-slide-in-left');
        break;
      case 'none':
      default:
        setAnimationClass('anim-fade-in');
        break;
    }
  }, [direction]);

  return (
    <>
      <div className={`screen-wrapper ${animationClass}`}>
        {children}
      </div>

      {/* 
        🎨 Local Animation Styles 
        (Adding specific slide animations here to keep them scoped)
      */}
      <style>{`
        .screen-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          background: transparent;
          /* Hide scrollbar but allow scrolling */
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        
        .screen-wrapper::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        /* 👉 Forward: New screen comes from Right */
        .anim-slide-in-right {
          animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 👈 Back: New screen comes from Left (simulating previous screen) */
        .anim-slide-in-left {
          animation: slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* ✨ Fade: Default transition */
        .anim-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        @keyframes slideInRight {
          from { transform: translateX(20%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-20%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default ScreenWrapper;
