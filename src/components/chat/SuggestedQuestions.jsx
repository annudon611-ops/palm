import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SuggestedQuestions = ({ onSelect }) => {
  const { t } = useLanguage();
  
  const questions = [
    "What does my Heart Line say?",
    "Tell me about my career path",
    "How is my energy today?",
    "Is my life line deep?"
  ];

  return (
    <div className="suggestions-container">
      <div className="suggestions-scroll">
        {questions.map((q, idx) => (
          <button 
            key={idx} 
            className="suggestion-chip glass-card"
            onClick={() => onSelect(q)}
          >
            {q}
          </button>
        ))}
      </div>

      <style>{`
        .suggestions-container {
          padding: 0 20px 10px 20px;
          overflow: hidden;
        }
        .suggestions-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 5px;
        }
        .suggestions-scroll::-webkit-scrollbar { display: none; }
        
        .suggestion-chip {
          white-space: nowrap;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .suggestion-chip:active {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default SuggestedQuestions;
