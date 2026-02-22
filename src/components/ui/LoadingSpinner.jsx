import React from 'react';

/**
 * 🌀 LOADING SPINNER
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * A cosmic-themed loading indicator.
 * Used for Suspense fallbacks and AI processing states.
 */
const LoadingSpinner = ({ size = 'md', message = '' }) => {
  // Determine dimensions based on size prop
  const dimensions = {
    sm: '30px',
    md: '60px',
    lg: '100px'
  }[size];

  return (
    <div className="spinner-container">
      <div className="cosmic-spinner" style={{ width: dimensions, height: dimensions }}>
        {/* Core glowing orb */}
        <div className="orb"></div>
        
        {/* Outer rotating orbit */}
        <div className="orbit">
          <div className="star"></div>
        </div>
      </div>
      
      {message && <p className="loading-message">{message}</p>}

      <style>{`
        .spinner-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .cosmic-spinner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orb {
          width: 40%;
          height: 40%;
          background: radial-gradient(circle at 30% 30%, #4facfe, #00f2fe);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.6),
                      0 0 40px rgba(0, 242, 254, 0.2);
          animation: pulse 2s infinite ease-in-out;
        }

        .orbit {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: rotate 3s linear infinite;
        }

        .star {
          position: absolute;
          top: -4px;
          left: 50%;
          width: 8px;
          height: 8px;
          background: #00f2fe;
          border-radius: 50%;
          box-shadow: 0 0 10px #00f2fe;
        }

        .loading-message {
          margin-top: 24px;
          color: var(--color-text-secondary);
          font-family: var(--font-heading);
          font-size: 1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-align: center;
          animation: fadeInOut 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
