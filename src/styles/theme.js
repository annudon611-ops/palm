/**
 * 🎨 AI PALM READER - DESIGN SYSTEM
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * Theme: Dark Astrology / Cosmic / Premium
 * Primary Colors: Midnight Blue, Neon Cyan, Deep Purple
 * Typography: Outfit (Headings), Inter (Body)
 * 
 * Usage:
 * import { theme } from '@styles/theme';
 * <div style={{ background: theme.colors.background.primary }}>
 */

export const theme = {
  colors: {
    background: {
      primary: '#0f0f1a',   // Deepest Midnight (Main Background)
      secondary: '#1a1a2e', // Card/Panel Background
      tertiary: '#252540',  // Lighter Element Background
      overlay: 'rgba(15, 15, 26, 0.85)', // Modal Backdrop
      glass: 'rgba(255, 255, 255, 0.05)' // Glassmorphism Base
    },
    text: {
      primary: '#ffffff',   // Main Headings & Body
      secondary: '#a0a0b0', // Subtitles & Descriptions
      accent: '#00f2fe',    // Highlighted Text
      muted: '#606070',     // Disabled / De-emphasized
      inverse: '#0f0f1a'    // Text on bright backgrounds
    },
    accent: {
      primary: '#4facfe',    // Cyan Blue
      secondary: '#00f2fe',  // Bright Neon Cyan
      tertiary: '#a18cd1',   // Soft Purple
      quaternary: '#fbc2eb', // Soft Pink
      gold: '#ffd700'        // Premium/Lucky Elements
    },
    status: {
      success: '#00c853',
      error: '#ff5252',
      warning: '#ffd740',
      info: '#40c4ff'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      purple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      cosmic: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
      mystic: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
      gold: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      darkFade: 'linear-gradient(to bottom, rgba(15,15,26,0) 0%, rgba(15,15,26,1) 100%)'
    }
  },
  typography: {
    fontFamily: {
      heading: "'Outfit', sans-serif",
      body: "'Inter', sans-serif"
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      xxl: '1.5rem',    // 24px
      display: '2.5rem' // 40px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    section: '64px'
  },
  borderRadius: {
    sm: '8px',
    md: '16px',
    lg: '24px',     // Standard Card
    xl: '32px',     // Large Containers
    round: '50%',
    pill: '9999px'
  },
  shadows: {
    soft: '0 4px 20px rgba(0, 0, 0, 0.25)',
    glow: '0 0 15px rgba(0, 242, 254, 0.3)',
    purpleGlow: '0 0 20px rgba(118, 75, 162, 0.4)',
    strong: '0 10px 30px rgba(0, 0, 0, 0.5)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
  },
  animation: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
    bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  },
  zIndex: {
    base: 0,
    card: 10,
    header: 50,
    modal: 100,
    toast: 200,
    loader: 999
  }
};
