import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';

const ChatContainer = ({ messages, isTyping, onSend }) => {
  const scrollRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="chat-container">
      <div className="messages-area" ref={scrollRef}>
        <div className="welcome-spacer"></div>
        {messages.map((msg) => (
          <ChatBubble key={msg.id} role={msg.role} content={msg.content} />
        ))}
        {isTyping && <TypingIndicator />}
      </div>
      
      <ChatInput onSend={onSend} disabled={isTyping} />

      <style>{`
        .chat-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }
        .messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          scrollbar-width: none;
        }
        .messages-area::-webkit-scrollbar { display: none; }
        .welcome-spacer { height: 20px; }
      `}</style>
    </div>
  );
};

export default ChatContainer;
