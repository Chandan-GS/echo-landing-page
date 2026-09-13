import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // App design-system tokens (dark mode)
        bg: '#1A1A1A',
        surface: '#232323',
        surface2: '#2A2A2A',
        divider: '#333333',
        text: '#EFEFEF',
        muted: '#A0A0A0',
        green: {
          DEFAULT: '#6EBC76', // bright — accents, links, glows
          deep: '#49884F', // solid filled cards/buttons
          ink: '#16301B', // text on green
          hi: '#8FE0A6', // waveform highlight
          soft: '#AECFB4',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1120px',
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '10%': { opacity: '1' },
          '80%': { opacity: '0.6' },
          '100%': { opacity: '0', transform: 'translateY(-280px)' },
        },
        wave: {
          '0%,100%': { height: '4px' },
          '50%': { height: '20px' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        ripple: {
          '0%': { transform: 'scale(.72)', opacity: '.7' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        heroGlow: {
          '0%,100%': { opacity: '0.7', transform: 'translateX(-50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translateX(-50%) scale(1.12)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
