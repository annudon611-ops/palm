import React from 'react';
import { theme } from '../../styles/theme';

/**
 * 🌌 COSMIC BACKGROUND
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A multi-layered animated background:
 * 1. Deep space gradient base
 * 2. Animated nebula clouds (radial gradients)
 * 3. Twinkling star field
 */
const CosmicBackground = () => {
  return (
    <div className="cosmic-bg">
      {/* Layer 1: Moving Nebulas */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>

      {/* Layer 2: Star Field */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="star" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random()
            }}
          />
        ))}
      </div>

      <style>{`
        .cosmic-bg {
          position: absolute;
          inset: 0;
          background: ${theme.colors.background.primary};
          overflow: hidden;
          z-index: 1;
        }

        /* 🌫️ Nebula Effects */
        .nebula {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          mix-blend-mode: screen;
          animation: drift 20s infinite ease-in-out;
        }

        .nebula-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #4facfe 0%, transparent 70%);
          top: -100px;
          right: -100px;
        }

        .nebula-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #764ba2 0%, transparent 70%);
          bottom: -150px;
          left: -150px;
          animation-delay: -5s;
        }

        .nebula-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #00f2fe 0%, transparent 70%);
          top: 40%;
          left: 10%;
          animation-duration: 15s;
          animation-delay: -2s;
        }

        /* ✨ Twinkling Stars */
        .stars-container {
          position: absolute;
          inset: 0;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 5px white;
          animation: twinkle 3s infinite ease-in-out;
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default CosmicBackground;
