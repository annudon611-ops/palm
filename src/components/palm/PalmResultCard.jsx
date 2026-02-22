import React from 'react';
import { theme } from '../../styles/theme';

const PalmResultCard = ({ analysis }) => {
  // AI response typically has sections like Heart Line: ..., etc.
  // This helper splits the text into readable chunks if structured
  const parseSections = (text) => {
    if (!text) return ["Reading the lines of your soul..."];
    return text.split('\n').filter(line => line.trim() !== "");
  };

  const sections = parseSections(analysis);

  return (
    <div className="palm-result-card glass-card animate-fade-in">
      <div className="sparkle-header">✨ Cosmic Insight</div>
      
      <div className="analysis-content">
        {sections.map((section, idx) => {
          const isHeading = section.includes(':') || section.length < 30;
          return (
            <p key={idx} className={isHeading ? "result-heading" : "result-body"}>
              {section}
            </p>
          );
        })}
      </div>

      <div className="disclaimer-mini">
        Symbolic interpretation based on spiritual traditions. No medical/legal advice.
      </div>

      <style>{`
        .palm-result-card {
          padding: 24px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          margin-bottom: 20px;
        }
        .sparkle-header {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: ${theme.colors.accent.secondary};
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .analysis-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .result-heading {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin-top: 10px;
        }
        .result-body {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
        }
        .disclaimer-mini {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.3);
          font-style: italic;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default PalmResultCard;
