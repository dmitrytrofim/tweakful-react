/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {},
  fontFamily: {
   inter: ['Inter', 'sans-serif'],
  },
  fontSize: {
   16: 'var(--sz-16)',
  },
  colors: {
   't-white': 'var(--tx-white)',
   't-black': 'var(--tx-black)',
   'b-white': 'var(--bg-white)',
   'b-black': 'var(--bg-black)',
  },
  fontWeight: {
   300: '300',
   400: '400',
   500: '500',
   600: '600',
   700: '700',
   800: '800',
   900: '900',
  },
  lineHeight: {
   n: 'normal',
  },
 },
 plugins: [],
};
