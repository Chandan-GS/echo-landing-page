import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F2EE',
        surface: '#FBFAF7',
        green: {
          DEFAULT: '#49884F',
          deep: '#3B6E40',
          bright: '#6EBC76',
        },
        accent: {
          DEFAULT: '#D1E6D3',
          2: '#AECFB4',
        },
        ink: {
          DEFAULT: '#1E1E1E',
          2: '#5A5A5A',
        },
        hair: '#E6E0D3',
        char: {
          DEFAULT: '#141810',
          2: '#1A1A1A',
        },
        light: '#EFEFEF',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        brand: '26px',
        'brand-lg': '34px',
      },
      boxShadow: {
        brand: '0 18px 46px rgba(40,54,42,.10)',
        'brand-lg': '0 34px 80px rgba(20,28,18,.30)',
      },
      maxWidth: {
        wrap: '1160px',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        ripple: {
          '0%': { transform: 'scale(.72)', opacity: '.75' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
