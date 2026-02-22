import React, { useState } from 'react';
import { theme } from '../../styles/theme';

const ChatInput = ({ onSend, disabled }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="chat-input-wrapper">
      <form className="input-form glass-base" onSubmit={handleSubmit}>
        <input
          type="text"
          className="msg-input"
          placeholder="Ask the stars anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
        />
        <button 
          type="submit" 
          className={`send-btn ${text.trim() ? 'active' : ''}`}
          disabled={!text.trim() || disabled}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </form>

      <style>{`
        .chat-input-wrapper {
          padding: 20px;
          padding-bottom: calc(var(--safe-area-bottom) + 20px);
          background: linear-gradient(to top, ${theme.colors.background.primary} 80%, transparent);
        }
        .input-form {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 8px 8px 20px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .msg-input {
          flex: 1;
          background: none;
          border: none;
          color: white;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          padding: 10px 0;
        }
        .msg-input:focus { outline: none; }
        .msg-input::placeholder { color: rgba(255, 255, 255, 0.3); }

        .send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .send-btn.active {
          background: ${theme.colors.gradients.primary};
          color: white;
          box-shadow: 0 4px 15px rgba(0, 242, 254, 0.4);
        }
      `}</style>
    </div>
  );
};

export default ChatInput;
