/**
 * 📊 ONBOARDING DATA
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Defines the slides shown during the first-time user experience.
 */

export const ONBOARDING_SLIDES = [
  {
    id: 'palm_reading',
    // We use component IDs or SVG names instead of raw images for faster loading
    icon: 'PalmIcon', 
    titleKey: 'onboarding.step1Title',
    descKey: 'onboarding.step1Desc',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#00f2fe'
  },
  {
    id: 'tarot_guidance',
    icon: 'TarotIcon',
    titleKey: 'onboarding.step2Title',
    descKey: 'onboarding.step2Desc',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#764ba2'
  },
  {
    id: 'daily_astrology',
    icon: 'StarIcon',
    titleKey: 'onboarding.step3Title',
    descKey: 'onboarding.step3Desc',
    gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    color: '#fda085'
  }
];
