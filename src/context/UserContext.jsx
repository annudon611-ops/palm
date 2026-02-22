import React, { createContext, useContext, useState, useEffect } from 'react';

// 📦 Initial State Template
const INITIAL_PROFILE = {
  name: '',
  dob: '',         // Date of Birth (YYYY-MM-DD)
  tob: '',         // Time of Birth (HH:mm)
  gender: '',      // male, female, non-binary, other
  zodiacSign: '',  // Calculated automatically
  hand: null,      // 'left' or 'right' (dominant hand)
  avatar: null     // ID of selected avatar
};

const INITIAL_SETTINGS = {
  notifications: true,
  soundEnabled: true,
  hapticFeedback: true,
  theme: 'dark' // specific override if needed
};

// 📦 Context Creation
const UserContext = createContext();

// 🪝 Custom Hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// 🛡️ Provider Component
export const UserProvider = ({ children }) => {
  // ------------------------------------------------------------------
  // 💾 STATE MANAGEMENT
  // ------------------------------------------------------------------
  
  // 1. User Profile Data
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('user_profile');
    return saved ? JSON.parse(saved) : INITIAL_PROFILE;
  });

  // 2. App Preferences
  const [userSettings, setUserSettings] = useState(() => {
    const saved = localStorage.getItem('user_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  // 3. Onboarding Status
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    return localStorage.getItem('onboarding_completed') === 'true';
  });

  // ------------------------------------------------------------------
  // 🔄 PERSISTENCE EFFECTS
  // ------------------------------------------------------------------

  useEffect(() => {
    localStorage.setItem('user_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('user_settings', JSON.stringify(userSettings));
  }, [userSettings]);

  useEffect(() => {
    localStorage.setItem('onboarding_completed', hasCompletedOnboarding);
  }, [hasCompletedOnboarding]);

  // ------------------------------------------------------------------
  // 🛠️ ACTION HANDLERS
  // ------------------------------------------------------------------

  /**
   * Updates specific fields in the user profile
   * @param {Object} updates - Partial profile object
   */
  const updateProfile = (updates) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  /**
   * Updates specific settings
   * @param {Object} updates - Partial settings object
   */
  const updateSettings = (updates) => {
    setUserSettings(prev => ({ ...prev, ...updates }));
  };

  /**
   * Marks onboarding as finished
   */
  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
  };

  /**
   * Hard reset of all user data (Privacy / Clear Data)
   */
  const resetUserData = () => {
    setUserProfile(INITIAL_PROFILE);
    setUserSettings(INITIAL_SETTINGS);
    setHasCompletedOnboarding(false);
    localStorage.clear();
    // Note: We might want to keep language, but clear PII
    window.location.reload();
  };

  /**
   * Calculates age from DOB
   */
  const getAge = () => {
    if (!userProfile.dob) return 0;
    const birthDate = new Date(userProfile.dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // ------------------------------------------------------------------
  // 📤 EXPORT VALUE
  // ------------------------------------------------------------------
  
  const value = {
    userProfile,
    userSettings,
    hasCompletedOnboarding,
    updateProfile,
    updateSettings,
    completeOnboarding,
    resetUserData,
    getAge,
    // Helper: Check if profile is fully set up
    isProfileComplete: !!(userProfile.name && userProfile.dob && userProfile.tob)
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
