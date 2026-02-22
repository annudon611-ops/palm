import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

/* 
 * 🎨 IMPORT GLOBAL STYLES
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Loading order matters:
 * 1. Global Reset & Variables
 * 2. Typography Definitions
 * 3. Glassmorphism Utilities
 * 4. Animation Keyframes
 */
import './styles/global.css';
import './styles/typography.css';
import './styles/glassmorphism.css';
import './styles/animations.css';

/* 
 * 🚀 PWA SERVICE WORKER REGISTRATION
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Handles offline capabilities and installation
 */
import { registerSW } from 'virtual:pwa-register';

// Auto-update the service worker when a new version is available
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("App is ready to work offline");
  },
});

/* 
 * ⚛️ MOUNT REACT ROOT
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
