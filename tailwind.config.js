const defaultTheme = require('tailwindcss/defaultTheme')
// import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './index.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
    // etc.
  ],
  theme: {
    cursor: {
      'not-allowed': 'not-allowed',
      pointer: 'pointer',
      none: 'none',
      move: 'move',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        manrope: ['Manrope'],
      },
      fontSize: {
        'xs': '.75rem', // 12px
        'sm': '.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
      },
      colors: {
        'anti-flash-white': '#F2F2F2',
        'wisp-pink': '#FFF2F2',
        'bright-red': '#EB3722',
        mystic: '#DEE3ED',
        'spanish-gray': '#9E9E9E',
        'dove-gray': '#616161',
        'wild-sand': '#F5F5F5',
        cardinal: '#C52428',
        sangria: '#D32924',
        'mine-shaft': '#1F1F1F',
        'ghost-white': '#F9F9FA',
      },
      zIndex: {
        '-10': '-10',
        100: '100',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translatey(0)' },
          '50%': { transform: 'translateY(-15%)' },
          '100%': { transform: 'translatey(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(-20%)' },
        },
      },
      animation: {
        float: 'float 1s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      rotate: {
        135: '135deg',
        270: '270deg',
      },
      borderRadius: {
        10: '10px',
      },
      boxShadow: {
        normalSlide: 'inset 0 0 #c52428',
        hoverSlide: 'inset 454px 0 #c52428',
      },
    },
  },
  plugins: [
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#BB070D',
          'primary-focus': '#DA151A',
          'primary-content': '#FFFFFF',
          secondary: '#BB070D',
          accent: '#BB070D',
          neutral: '#616161',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
}
