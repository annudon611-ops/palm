import React from 'react';
import ToastContainer from '../ui/Toast'; // Hum apna custom toast use karenge

/**
 * 📱 APP CONTAINER
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
const AppContainer = ({ children }) => {
  return (
    <div className="app-root">
      <div className="mobile-frame">
        <main className="app-content">
          {children}
        </main>

        {/* ✅ Sirf hamara custom toast container yahan rahega */}
        <ToastContainer />
      </div>

      <style>{`
        .app-root {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          min-height: 100dvh;
          background-color: #050510;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(79, 172, 254, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 20%);
        }

        .mobile-frame {
          width: 100%;
          max-width: 480px;
          height: 100vh;
          height: 100dvh;
          background-color: #0f0f1a;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 481px) {
          .mobile-frame {
            height: 95vh;
            border-radius: 30px;
            border: 8px solid #2d2d44;
          }
        }

        .app-content {
          flex: 1;
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AppContainer;
