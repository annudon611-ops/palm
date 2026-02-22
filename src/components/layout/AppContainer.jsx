import React from 'react';
import { Toaster } from 'react-hot-toast'; // We will install this or build our own Toast component later
import ToastContainer from '../ui/Toast'; // Our custom toast container

/**
 * 📱 APP CONTAINER
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Wraps the entire application.
 * - Enforces mobile aspect ratio on desktop
 * - Handles safe area insets (notch/home bar)
 * - Manages global background styles
 */
const AppContainer = ({ children }) => {
  return (
    <div className="app-root">
      {/* 
        The main container constrains width on desktop 
        to simulate a mobile device 
      */}
      <div className="mobile-frame">
        {/* Content Area */}
        <main className="app-content">
          {children}
        </main>

        {/* 🍞 Global Toast Notifications Layer */}
        <ToastContainer />
      </div>

      {/* 
        Styles specific to this container 
        (Inline here for simplicity, or could be in CSS)
      */}
      <style>{`
        .app-root {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          min-height: 100dvh;
          background-color: #050510; /* Darker than app bg for desktop margins */
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(79, 172, 254, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 20%);
        }

        .mobile-frame {
          width: 100%;
          max-width: 480px; /* Standard mobile width limit */
          height: 100vh;
          height: 100dvh;
          background-color: var(--color-bg-primary);
          position: relative;
          overflow: hidden; /* Screens handle their own scrolling */
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
        }

        /* Desktop specific tweaks */
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
