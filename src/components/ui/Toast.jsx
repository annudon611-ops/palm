import React, { useState, useEffect, useCallback } from 'react';

/**
 * 📢 TOAST UTILITY
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Trigger a toast from anywhere:
 * toast.show('Message', 'success')
 */
export const toast = {
  show: (message, type = 'info', duration = 3000) => {
    const event = new CustomEvent('app-toast', { 
      detail: { message, type, duration } 
    });
    window.dispatchEvent(event);
  },
  success: (m, d) => toast.show(m, 'success', d),
  error: (m, d) => toast.show(m, 'error', d),
  info: (m, d) => toast.show(m, 'info', d),
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    const handleToastEvent = (event) => {
      const { message, type, duration } = event.detail;
      const id = Math.random().toString(36).substr(2, 9);
      
      setToasts((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        removeToast(id);
      }, duration);
    };

    window.addEventListener('app-toast', handleToastEvent);
    return () => window.removeEventListener('app-toast', handleToastEvent);
  }, [removeToast]);

  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast-item glass-base toast-${t.type}`}>
          <div className="toast-icon">
            {t.type === 'success' && '✨'}
            {t.type === 'error' && '⚠️'}
            {t.type === 'info' && '🔮'}
          </div>
          <div className="toast-message">{t.message}</div>
        </div>
      ))}

      <style>{`
        .toast-container {
          position: fixed;
          top: calc(var(--safe-area-top) + 20px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: 90%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          pointer-events: none;
        }

        .toast-item {
          pointer-events: auto;
          display: flex;
          align-items: center;
          padding: 12px 20px;
          border-radius: 16px;
          gap: 12px;
          animation: toastSlideDown 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .toast-message {
          font-size: 0.9rem;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.4;
        }

        .toast-icon {
          font-size: 1.2rem;
        }

        /* Type Variations */
        .toast-success {
          border-left: 4px solid #00c853;
          background: rgba(0, 200, 83, 0.1);
        }

        .toast-error {
          border-left: 4px solid #ff5252;
          background: rgba(255, 82, 82, 0.1);
        }

        .toast-info {
          border-left: 4px solid #00f2fe;
          background: rgba(0, 242, 254, 0.1);
        }

        @keyframes toastSlideDown {
          from { opacity: 0; transform: translateY(-20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ToastContainer;
