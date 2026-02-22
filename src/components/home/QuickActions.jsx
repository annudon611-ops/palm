import React from 'react';
import { useNavigationContext } from '../../context/NavigationContext';
import { useLanguage } from '../../context/LanguageContext';
import { theme } from '../../styles/theme';
import ChatIcon from '../icons/ChatIcon';

/**
 * ⚡ QUICK ACTIONS
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * The primary interaction hub for the AI Chat feature.
 * Designed to be the most prominent element on the Home screen.
 */
const QuickActions = () => {
  const { navigate } = useNavigationContext();
  const { t } = useLanguage();

  return (
    <div className="quick-actions-container">
      <button 
        className="chat-cta-button glass-card"
        onClick={() => navigate('AIPalmChat')}
      >
        <div className="cta-icon-box">
          <ChatIcon size={32} color="#00f2fe" glow />
        </div>
        
        <div className="cta-text-box">
          <h3 className="cta-title">Consult the AI Oracle</h3>
          <p className="cta-subtitle">Ask anything about your path & energy</p>
        </div>

        <div className="cta-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      <style>{`
        .quick-actions-container {
          margin-bottom: 30px;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .chat-cta-button {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 20px;
          gap: 16px;
          text-align: left;
          background: linear-gradient(
            135deg,
            rgba(79, 172, 254, 0.15) 0%,
            rgba(0, 242, 254, 0.05) 100%
          );
          border: 1px solid rgba(79, 172, 254, 0.3);
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .chat-cta-button:active {
          transform: scale(0.97);
          background: rgba(79, 172, 254, 0.2);
        }

        .cta-icon-box {
          width: 56px;
          height: 56px;
          background: rgba(15, 15, 26, 0.5);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .cta-text-box {
          flex: 1;
        }

        .cta-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: white;
          margin-bottom: 4px;
        }

        .cta-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .cta-arrow {
          opacity: 0.5;
          transition: transform 0.3s ease;
        }

        .chat-cta-button:hover .cta-arrow {
          transform: translateX(4px);
          opacity: 1;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default QuickActions;
