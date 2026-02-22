import React from 'react';
import { theme } from '../../styles/theme';

const TypingIndicator = () => (
  <div className="typing-wrapper bubble-enter">
    <div className="typing-bubble glass-bubble-received">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
    
    <style>{`
      .typing-wrapper {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 4px;
      }
      .typing-bubble {
        padding: 12px 18px;
        border-radius: 20px 20px 20px 4px;
        background: rgba(255, 255, 255, 0.05);
        display: flex;
        gap: 5px;
        align-items: center;
      }
      .dot {
        width: 6px;
        height: 6px;
        background: ${theme.colors.accent.secondary};
        border-radius: 50%;
        opacity: 0.4;
        animation: typingPulse 1.4s infinite ease-in-out;
      }
      .dot:nth-child(2) { animation-delay: 0.2s; }
      .dot:nth-child(3) { animation-delay: 0.4s; }

      @keyframes typingPulse {
        0%, 100% { transform: scale(1); opacity: 0.4; }
        50% { transform: scale(1.3); opacity: 1; }
      }
    `}</style>
  </div>
);

export default TypingIndicator;
