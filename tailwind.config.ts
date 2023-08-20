import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tc: {
          primary: '#877EFF',
          secondary: '#FFB620',
          blue: '#0095F6',
          red: '#FF5A5A',
          dark: {
            '100': '#1F1F22',
            '200': '#101012',
            '300': '#121417',
            '400': '#000000',
          },
          light: {
            '100': '#FFFFFF',
            '200': '#EFEFEF',
            '300': '#7878A3',
            '400': '#5C5C7B',
          },
          gray: {
            '100': '#697C89',
            '200': 'rgba(16, 16, 18, 0.6)',
          },
        },
      },
      boxShadow: {
        'tc-30': '0px 0px 6px 2px rgba(219, 188, 159, 0.30)',
        'tc-50': '-30px 0px 60px 0px rgba(28, 28, 31, 0.50)',
      },
      keyframes: {
        'tc-spin': {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'tc-ping': {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        'tc-pulse': {
          '50%': {
            opacity: '.5',
          },
        },
        'tc-bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        'tc-accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'tc-accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'tc-accordion-down': 'accordion-down 0.2s ease-out',
        'tc-accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('tailwindcss-animate')],
};
export default config;
