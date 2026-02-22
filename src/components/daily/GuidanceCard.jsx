import React from 'react';
import { theme } from '../../styles/theme';

const GuidanceCard = ({ title, content, icon, color, delay }) => {
  return (
    <div 
      className="guidance-card glass-card animate-fade-in"
      style={{ 
        borderLeft: `4px solid ${color}`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <span className="card-label" style={{ color: color }}>{title}</span>
        <span className="card-value">{content}</span>
      </div>

      <style>{`
        .guidance-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: transform 0.3s ease;
        }
        .guidance-card:active { transform: scale(0.98); background: rgba(255,255,255,0.06); }
        .card-icon { font-size: 1.5rem; }
        .card-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; margin-bottom: 4px; display: block; }
        .card-value { font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 500; color: white; line-height: 1.2; }
      `}</style>
    </div>
  );
};

export default GuidanceCard;
