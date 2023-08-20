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
    },
  },
  plugins: [],
};
export default config;
