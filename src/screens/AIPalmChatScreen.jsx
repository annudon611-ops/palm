import React, { useState, useEffect, useRef } from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { getSpiritualGuidance } from '../services/aiService';
import { theme } from '../styles/theme';
import ChatContainer from '../components/chat/ChatContainer';
import BackIcon from '../components/icons/BackIcon';
import useToast from '../hooks/useToast';

const AIPalmChatScreen = () => {
  const { goBack } = useNavigationContext();
  const { t, language } = useLanguage();
  const { userProfile } = useUser();
  const { error } = useToast();
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'ai',
      content: `Greetings, ${userProfile.name || 'Seeker'}. I am the AI Oracle. What mysteries of your path shall we explore today?`,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // 1. Add User Message
    const userMsg = { id: Date.now(), role: 'user', content: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      // 2. Call AI Service
      const aiResponse = await getSpiritualGuidance(text, language, userProfile.name);
      
      // 3. Add AI Message
      const aiMsg = { 
        id: Date.now() + 1, 
        role: 'ai', 
        content: aiResponse, 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      error("The stars are clouded. Please try again.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-screen">
      <header className="chat-header">
        <button onClick={goBack} className="back-btn">
          <BackIcon size={24} color="white" />
        </button>
        <div className="header-info">
          <h1 className="header-title">AI Oracle</h1>
          <div className="status-indicator">
            <span className="pulse-dot"></span>
            <span className="status-text">Connected to Stars</span>
          </div>
        </div>
        <div style={{ width: 40 }}></div>
      </header>

      <ChatContainer 
        messages={messages} 
        isTyping={isTyping} 
        onSend={handleSendMessage} 
      />

      <style>{`
        .chat-screen {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: ${theme.colors.background.primary};
        }
        .chat-header {
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(15, 15, 26, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          z-index: 10;
        }
        .header-info { text-align: center; }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; margin: 0; }
        .status-indicator { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 2px; }
        .pulse-dot { width: 6px; height: 6px; background: #00f2fe; border-radius: 50%; box-shadow: 0 0 8px #00f2fe; animation: pulse 2s infinite; }
        .status-text { font-size: 0.7rem; color: rgba(255, 255, 255, 0.5); text-transform: uppercase; letter-spacing: 0.1em; }
        .back-btn { background: none; border: none; cursor: pointer; padding: 8px; }
        @keyframes pulse { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }
      `}</style>
    </div>
  );
};

export default AIPalmChatScreen;
