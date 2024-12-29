/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#8758FF',
          dark: '#2D235D',
        },
        secondary: '#FF58F9',
      },
      animation: {
        'float-slow': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 20s ease-in-out infinite -10s',
        'spin-slow': 'spin 15s linear infinite',
        'spin-slower': 'spin 20s linear infinite reverse',
        'morph-slow': 'morph 20s ease-in-out infinite',
        'morph-delayed': 'morph 20s ease-in-out infinite -10s',
        'gradient-x': 'gradient-x 15s linear infinite',
        'grid-spin': 'grid-spin 60s linear infinite',
        'lines': 'lines 20s linear infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '200% 50%' },
          '50%': { backgroundPosition: '-200% 50%' },
        },
        'grid-spin': {
          '0%': { transform: 'perspective(1000px) rotateX(30deg) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(30deg) rotateY(360deg)' },
        },
        lines: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(20deg)' },
          '100%': { transform: 'translateX(200%) skewX(20deg)' },
        },
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'grid-white': 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};