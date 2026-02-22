import React, { useEffect, Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { UserProvider } from './context/UserContext';
import { NavigationProvider, useNavigationContext } from './context/NavigationContext';
import AppContainer from './components/layout/AppContainer';
import ScreenWrapper from './components/layout/ScreenWrapper';
import LoadingSpinner from './components/ui/LoadingSpinner';

// 😴 Lazy Load Screens
const SplashScreen = lazy(() => import('./screens/SplashScreen'));
const LanguageScreen = lazy(() => import('./screens/LanguageScreen'));
const OnboardingScreen = lazy(() => import('./screens/OnboardingScreen'));
const ProfileSetupScreen = lazy(() => import('./screens/ProfileSetupScreen'));
const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const PalmScanScreen = lazy(() => import('./screens/PalmScanScreen'));
const PalmResultScreen = lazy(() => import('./screens/PalmResultScreen'));
const AIPalmChatScreen = lazy(() => import('./screens/AIPalmChatScreen'));
const TarotScreen = lazy(() => import('./screens/TarotScreen'));
const TarotReadingScreen = lazy(() => import('./screens/TarotReadingScreen'));
const DailyGuidanceScreen = lazy(() => import('./screens/DailyGuidanceScreen'));
const HoroscopeScreen = lazy(() => import('./screens/HoroscopeScreen'));
const HoroscopeDetailScreen = lazy(() => import('./screens/HoroscopeDetailScreen'));
const LoveReadingScreen = lazy(() => import('./screens/LoveReadingScreen'));
const SettingsScreen = lazy(() => import('./screens/SettingsScreen'));
const PrivacyPolicyScreen = lazy(() => import('./screens/PrivacyPolicyScreen'));
const AboutScreen = lazy(() => import('./screens/AboutScreen'));

const MainNavigator = () => {
  const { currentScreen, direction } = useNavigationContext();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Splash': return <SplashScreen />;
      case 'Language': return <LanguageScreen />;
      case 'Onboarding': return <OnboardingScreen />;
      case 'ProfileSetup': return <ProfileSetupScreen />;
      case 'Home': return <HomeScreen />;
      case 'PalmScan': return <PalmScanScreen />;
      case 'PalmResult': return <PalmResultScreen />;
      case 'AIPalmChat': return <AIPalmChatScreen />;
      case 'Tarot': return <TarotScreen />;
      case 'TarotReading': return <TarotReadingScreen />;
      case 'DailyGuidance': return <DailyGuidanceScreen />;
      case 'Horoscope': return <HoroscopeScreen />;
      case 'HoroscopeDetail': return <HoroscopeDetailScreen />;
      case 'LoveReading': return <LoveReadingScreen />;
      case 'Settings': return <SettingsScreen />;
      case 'PrivacyPolicy': return <PrivacyPolicyScreen />;
      case 'About': return <AboutScreen />;
      default: return <SplashScreen />;
    }
  };

  return (
    <AppContainer>
      <Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f0f1a'}}><LoadingSpinner /></div>}>
        <ScreenWrapper key={currentScreen} direction={direction}>
          {renderScreen()}
        </ScreenWrapper>
      </Suspense>
    </AppContainer>
  );
};

const App = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <LanguageProvider>
      <UserProvider>
        <NavigationProvider>
          <MainNavigator />
        </NavigationProvider>
      </UserProvider>
    </LanguageProvider>
  );
};

export default App;
