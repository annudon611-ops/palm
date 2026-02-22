import React from 'react';
import { useNavigationContext } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { theme } from '../styles/theme';
import BackIcon from '../components/icons/BackIcon';
import SettingsItem from '../components/settings/SettingsItem';
import BottomNav from '../components/layout/BottomNav';

const SettingsScreen = () => {
  const { goBack, navigate } = useNavigationContext();
  const { t, language } = useLanguage();
  const { resetUserData, userProfile } = useUser();

  const handleReset = () => {
    if (window.confirm("Are you sure? This will delete your profile and readings.")) {
      resetUserData();
    }
  };

  return (
    <div className="settings-screen">
      <header className="screen-header">
        <button onClick={goBack} className="back-btn"><BackIcon size={24} color="white" /></button>
        <h1 className="header-title">{t.settings.title}</h1>
        <div style={{ width: 24 }}></div>
      </header>

      <div className="settings-content">
        <div className="profile-summary glass-card">
          <div className="avatar-lg">{userProfile.name?.charAt(0) || 'S'}</div>
          <div className="profile-details">
            <h2 className="profile-name">{userProfile.name || 'Seeker'}</h2>
            <p className="profile-zodiac">{userProfile.zodiacSign || 'Unknown Sign'}</p>
          </div>
          <button className="edit-btn" onClick={() => navigate('ProfileSetup')}>Edit</button>
        </div>

        <div className="settings-group">
          <h3 className="group-title">Preferences</h3>
          <SettingsItem 
            label={t.settings.language} 
            value={language.toUpperCase()} 
            onClick={() => navigate('Language')} 
            icon="🌐"
          />
          <SettingsItem 
            label={t.settings.notifications} 
            toggle 
            defaultChecked 
            icon="🔔"
          />
        </div>

        <div className="settings-group">
          <h3 className="group-title">Support</h3>
          <SettingsItem 
            label={t.settings.privacy} 
            onClick={() => navigate('PrivacyPolicy')} 
            icon="🔒"
          />
          <SettingsItem 
            label={t.settings.contact} 
            onClick={() => window.open('mailto:support@aipalm.com')} 
            icon="✉️"
          />
          <SettingsItem 
            label="About App" 
            onClick={() => navigate('About')} 
            icon="ℹ️"
          />
        </div>

        <div className="settings-group danger-zone">
          <button className="reset-btn" onClick={handleReset}>
            {t.settings.reset}
          </button>
          <p className="version-text">v{import.meta.env.VITE_APP_VERSION || '1.0.0'}</p>
        </div>
      </div>

      <BottomNav activeTab="settings" />

      <style>{`
        .settings-screen { height: 100%; display: flex; flex-direction: column; background: ${theme.colors.background.primary}; }
        .screen-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .header-title { font-family: 'Outfit', sans-serif; font-size: 1.1rem; color: white; }
        .back-btn { background: none; border: none; cursor: pointer; }
        .settings-content { flex: 1; padding: 24px; overflow-y: auto; padding-bottom: 100px; display: flex; flex-direction: column; gap: 30px; }
        .profile-summary { display: flex; align-items: center; padding: 20px; gap: 16px; background: rgba(255,255,255,0.05); border-radius: 20px; }
        .avatar-lg { width: 60px; height: 60px; border-radius: 50%; background: ${theme.colors.gradients.purple}; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; color: white; }
        .profile-details { flex: 1; }
        .profile-name { font-family: 'Outfit', sans-serif; font-size: 1.2rem; color: white; margin: 0; }
        .profile-zodiac { font-size: 0.9rem; color: rgba(255,255,255,0.6); text-transform: capitalize; }
        .edit-btn { background: rgba(255,255,255,0.1); border: none; padding: 8px 16px; border-radius: 20px; color: white; font-size: 0.8rem; cursor: pointer; }
        .group-title { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.4); margin-bottom: 12px; padding-left: 8px; }
        .settings-group { display: flex; flex-direction: column; gap: 8px; }
        .danger-zone { margin-top: 20px; align-items: center; }
        .reset-btn { width: 100%; padding: 16px; border-radius: 16px; background: rgba(255, 82, 82, 0.1); border: 1px solid rgba(255, 82, 82, 0.3); color: #ff5252; font-weight: 600; cursor: pointer; }
        .version-text { margin-top: 16px; font-size: 0.8rem; color: rgba(255,255,255,0.3); }
      `}</style>
    </div>
  );
};

export default SettingsScreen;
