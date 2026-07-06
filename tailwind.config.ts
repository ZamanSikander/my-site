import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#101014',
        paper: '#f7f5ef',
        clay: '#c66a43',
        moss: '#4b735f',
        gold: '#d5a642'
      },
      boxShadow: {
        soft: '0 22px 70px rgba(16, 16, 20, 0.10)'
      }
    }
  },
  plugins: []
};

export default config;
