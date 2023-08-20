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
    },
  },
  plugins: [],
};
export default config;
