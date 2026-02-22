import React from 'react';
import { theme } from '../../styles/theme';

/**
 * 🧩 FEATURE CARD
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A premium interactive card for the Home Dashboard grid.
 * Features:
 * - Glassmorphism surface
 * - Color-coded icon container
 * - Staggered entry animation
 * - Haptic-style scale feedback on click
 */
const FeatureCard = ({ title, icon, color, delay, onClick }) => {
  return (
    <button 
      className="feature-card glass-card" 
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
    >
      <div 
        className="icon-container" 
        style={{ 
          backgroundColor: `${color}15`, // 15% opacity hex
          borderColor: `${color}30`     // 30% opacity hex
        }}
      >
        {icon}
      </div>
      
      <h3 className="feature-title">{title}</h3>

      <style>{`
        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          padding: 20px;
          min-height: 140px;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          cursor: pointer;
          animation: cardPopIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
                      background 0.3s ease, 
                      border-color 0.3s ease;
        }

        .feature-card:active {
          transform: scale(0.95);
          background: rgba(255, 255, 255, 0.07);
          border-color: ${color}60;
        }

        .icon-container {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border: 1px solid transparent;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .icon-container {
          transform: translateY(-2px) rotate(-5deg);
        }

        .feature-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          line-height: 1.3;
          margin: 0;
          opacity: 0.9;
        }

        @keyframes cardPopIn {
          from { 
            opacity: 0; 
            transform: scale(0.8) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }

        /* Desktop specific hover effect */
        @media (min-width: 768px) {
          .feature-card:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </button>
  );
};

export default FeatureCard;
