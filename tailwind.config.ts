import type { Config } from 'tailwindcss';
import { manrope, unbounded } from '@/app/fonts';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ejfBlue: '#0038FF',
        ejfGray: 'rgba(255, 255, 255, 0.8)',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        unbounded: ['Unbounded', `sans`],
      },
    },
  },
  plugins: [],
};

export default config;
