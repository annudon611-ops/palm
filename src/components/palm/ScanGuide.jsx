import React from 'react';
import { theme } from '../../styles/theme';

const ScanGuide = ({ hand, onNext }) => {
  return (
    <div className="guide-container animate-fade-in">
      <div className="guide-visual">
        <div className="hand-outline">
          <div className="scan-line-animation"></div>
          <span className="hand-emoji">{hand === 'left' ? '✋' : '🤚'}</span>
        </div>
      </div>

      <h2 className="guide-title">Position your {hand} hand</h2>
      <ul className="guide-list">
        <li>Ensure your palm is flat and well-lit.</li>
        <li>Keep fingers slightly apart.</li>
        <li>Avoid direct sunlight or harsh shadows.</li>
      </ul>

      <button className="primary-btn" onClick={onNext}>
        Continue to Scan
      </button>

      <style>{`
        .guide-container { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .guide-visual {
          width: 200px;
          height: 200px;
          background: rgba(255,255,255,0.03);
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
          position: relative;
          border: 2px dashed rgba(255,255,255,0.1);
        }
        .hand-emoji { font-size: 80px; opacity: 0.5; }
        .guide-title { font-family: 'Outfit', sans-serif; font-size: 1.5rem; margin-bottom: 20px; text-transform: capitalize; }
        .guide-list { text-align: left; color: rgba(255,255,255,0.6); margin-bottom: 40px; line-height: 2; }
        .primary-btn {
          width: 100%;
          padding: 18px;
          border-radius: 20px;
          background: ${theme.colors.gradients.primary};
          color: white;
          font-weight: 600;
          border: none;
        }
        .scan-line-animation {
          position: absolute;
          width: 90%;
          height: 2px;
          background: ${theme.colors.accent.secondary};
          box-shadow: 0 0 15px ${theme.colors.accent.secondary};
          animation: scanMove 2s infinite ease-in-out;
        }
        @keyframes scanMove {
          0% { top: 10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ScanGuide;
