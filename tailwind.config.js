/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#123044',
          50: '#e8eef1',
          100: '#c5d2d9',
          200: '#9aafbb',
          300: '#6f8c9d',
          400: '#446a7f',
          500: '#2a4d63',
          600: '#1e3a4f',
          700: '#123044',
          800: '#0c2233',
          900: '#081823',
        },
        accent: {
          DEFAULT: '#65CF72',
          50: '#eafbeec',
          100: '#d0f6d8',
          200: '#a3edba',
          300: '#76e49c',
          400: '#65CF72',
          500: '#45b555',
          600: '#369043',
          700: '#276b32',
          800: '#184621',
          900: '#0a2210',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        'btn': '10px',
      },
      maxWidth: {
        'content': '1280px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
