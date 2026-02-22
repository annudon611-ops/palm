import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// 📦 Context Creation
const NavigationContext = createContext();

// 🪝 Custom Hook
export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
};

// 🛡️ Provider Component
export const NavigationProvider = ({ children }) => {
  // ------------------------------------------------------------------
  // 💾 STATE MANAGEMENT
  // ------------------------------------------------------------------
  
  // 1. Current Active Screen
  const [currentScreen, setCurrentScreen] = useState('Splash');

  // 2. Navigation History Stack (for back button logic)
  const [historyStack, setHistoryStack] = useState(['Splash']);

  // 3. Screen Parameters (Data passed between screens)
  const [screenParams, setScreenParams] = useState({});

  // 4. Animation Direction ('forward', 'back', 'none')
  const [direction, setDirection] = useState('none');

  // ------------------------------------------------------------------
  // 🚀 NAVIGATION ACTIONS
  // ------------------------------------------------------------------

  /**
   * Navigate to a new screen
   * @param {string} screenName - ID of the screen to show
   * @param {Object} params - Optional data to pass
   */
  const navigate = useCallback((screenName, params = {}) => {
    if (screenName === currentScreen) return;

    // Set animation direction
    setDirection('forward');

    // Update params
    setScreenParams(params);

    // Update History Stack
    setHistoryStack(prev => [...prev, screenName]);
    
    // Update Active Screen
    setCurrentScreen(screenName);

    // Sync with Browser History
    window.history.pushState({ screen: screenName }, '', `#${screenName}`);
  }, [currentScreen]);

  /**
   * Replace current screen (no history push - good for Splash -> Home)
   */
  const replace = useCallback((screenName, params = {}) => {
    setDirection('none'); // No animation for replace usually
    setScreenParams(params);
    setHistoryStack(prev => {
      const newStack = [...prev];
      newStack[newStack.length - 1] = screenName;
      return newStack;
    });
    setCurrentScreen(screenName);
    window.history.replaceState({ screen: screenName }, '', `#${screenName}`);
  }, []);

  /**
   * Go Back one step
   */
  const goBack = useCallback(() => {
    if (historyStack.length <= 1) {
      // If at root, we might want to minimize app or show exit dialog
      // This is handled by useBackHandler hook usually
      return false;
    }

    setDirection('back');
    
    setHistoryStack(prev => {
      const newStack = [...prev];
      newStack.pop(); // Remove current
      const prevScreen = newStack[newStack.length - 1];
      setCurrentScreen(prevScreen);
      return newStack;
    });

    // We don't pushState here, we let the popstate event handle it
    // or manually back if triggered by UI button
    return true;
  }, [historyStack]);

  /**
   * Reset stack to Home (useful for "Done" flows)
   */
  const resetToHome = useCallback(() => {
    setDirection('back');
    setHistoryStack(['Home']);
    setCurrentScreen('Home');
    setScreenParams({});
    window.history.pushState({ screen: 'Home' }, '', '#Home');
  }, []);

  // ------------------------------------------------------------------
  // 🌍 BROWSER HISTORY SYNC
  // ------------------------------------------------------------------

  useEffect(() => {
    const handlePopState = (event) => {
      // User pressed browser Back button
      if (historyStack.length > 1) {
        setDirection('back');
        setHistoryStack(prev => {
          const newStack = [...prev];
          newStack.pop();
          const prevScreen = newStack[newStack.length - 1];
          setCurrentScreen(prevScreen);
          return newStack;
        });
      } else {
        // App exit logic handled elsewhere
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [historyStack]);

  // ------------------------------------------------------------------
  // 📤 EXPORT VALUE
  // ------------------------------------------------------------------

  const value = {
    currentScreen,
    screenParams,
    direction,
    historyStack,
    navigate,
    replace,
    goBack,
    resetToHome,
    canGoBack: historyStack.length > 1
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
