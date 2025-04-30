import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'black-100': '#0C0C0C',
        'black-200': '#141414',
        'black-300': '#1C1E21',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '105rem',
        '10xl': '120rem',
      },
      zIndex: {
        1: '1',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      keyframes: {
        'spin-slow': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        typing: {
          '0%, 44%': {
            transform: 'translateY(0px)',
          },
          '28%': {
            opacity: '0.4',
            transform: 'translateY(-6px)',
          },
          '44%': {
            opacity: '0.2',
          },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite',
      },
    },
  },
  plugins: [aspectRatio, forms, typography],
} satisfies Config;
