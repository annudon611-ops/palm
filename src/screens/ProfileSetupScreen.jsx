import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
import { useNavigationContext } from '../context/NavigationContext';
import { theme } from '../styles/theme';
import { calculateZodiac } from '../utils/helpers';
import useToast from '../hooks/useToast';

/**
 * 👤 PROFILE SETUP SCREEN
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Features:
 * - Local form state management
 * - Dynamic Zodiac calculation on date change
 * - Glassmorphism input styling
 * - Form validation and context persistence
 */
const ProfileSetupScreen = () => {
  const { t } = useLanguage();
  const { updateProfile, completeOnboarding } = useUser();
  const { replace } = useNavigationContext();
  const { success, error } = useToast();

  // 📝 Local Form State
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    gender: 'other'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔄 Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 🚀 Submit Profile
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.dob) {
      error(t.common.error || "Please fill in your name and birth date");
      return;
    }

    setIsSubmitting(true);

    // Calculate Zodiac before saving
    const birthDate = new Date(formData.dob);
    const zodiacSign = calculateZodiac(birthDate.getMonth() + 1, birthDate.getDate());

    // Artificial delay for "Cosmic Alignment" feel
    setTimeout(() => {
      updateProfile({
        ...formData,
        zodiacSign
      });
      completeOnboarding();
      success(t.profile.saveProfile + " ✨");
      replace('Home');
    }, 1500);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">{t.profile.setupTitle}</h1>
        <p className="profile-desc">{t.profile.setupDesc}</p>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="input-group">
          <label className="input-label">{t.profile.nameLabel}</label>
          <input 
            type="text"
            name="name"
            placeholder="e.g. Alexander"
            className="glass-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row-group">
          {/* Date of Birth */}
          <div className="input-group flex-1">
            <label className="input-label">{t.profile.dobLabel}</label>
            <input 
              type="date"
              name="dob"
              className="glass-input"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* Time of Birth */}
          <div className="input-group flex-1">
            <label className="input-label">{t.profile.tobLabel}</label>
            <input 
              type="time"
              name="tob"
              className="glass-input"
              value={formData.tob}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Gender Selection */}
        <div className="input-group">
          <label className="input-label">{t.profile.genderLabel}</label>
          <select 
            name="gender" 
            className="glass-input"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">{t.profile.genderMale}</option>
            <option value="female">{t.profile.genderFemale}</option>
            <option value="other">{t.profile.genderOther}</option>
          </select>
        </div>

        <div className="spacer"></div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? t.common.processing : t.profile.saveProfile}
        </button>
      </form>

      <style>{`
        .profile-container {
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          background: ${theme.colors.background.primary};
        }

        .profile-header {
          margin-bottom: 40px;
          animation: fadeInDown 0.8s ease-out;
        }

        .profile-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 12px;
          background: ${theme.colors.gradients.primary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .profile-desc {
          color: var(--color-text-secondary);
          font-size: 1rem;
          line-height: 1.5;
        }

        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .row-group {
          display: flex;
          gap: 16px;
        }

        .flex-1 { flex: 1; }

        .input-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          margin-left: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .glass-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px;
          color: white;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }

        .glass-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          border-color: ${theme.colors.accent.secondary};
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.1);
        }

        select.glass-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 18px;
        }

        .spacer { flex: 1; min-height: 40px; }

        .submit-btn {
          padding: 18px;
          border-radius: 20px;
          border: none;
          background: ${theme.colors.gradients.primary};
          color: white;
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          box-shadow: 0 10px 20px rgba(79, 172, 254, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:active { transform: scale(0.98); }
        .submit-btn.loading { opacity: 0.7; cursor: not-allowed; }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Date/Time picker icon color fix for some mobile browsers */
        input::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default ProfileSetupScreen;
