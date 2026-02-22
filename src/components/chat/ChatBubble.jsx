import React from 'react';
import { theme } from '../../styles/theme';

const ChatBubble = ({ role, content }) => {
  const isAI = role === 'ai';

  return (
    <div className={`bubble-wrapper ${isAI ? 'ai' : 'user'} bubble-enter`}>
      <div className={`bubble ${isAI ? 'glass-bubble-received' : 'glass-bubble-sent'}`}>
        {content}
      </div>
      
      <style>{`
        .bubble-wrapper {
          display: flex;
          width: 100%;
          margin-bottom: 4px;
        }
        .bubble-wrapper.user { justify-content: flex-end; }
        .bubble-wrapper.ai { justify-content: flex-start; }

        .bubble {
          max-width: 85%;
          padding: 14px 18px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .bubble-wrapper.user .bubble {
          border-radius: 20px 20px 4px 20px;
          background: ${theme.colors.gradients.primary};
          color: white;
          box-shadow: 0 4px 15px rgba(79, 172, 254, 0.2);
        }

        .bubble-wrapper.ai .bubble {
          border-radius: 20px 20px 20px 4px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </div>
  );
};

export default ChatBubble;
