/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {},
  fontFamily: {
   inter: ['Inter', 'sans-serif'],
  },
  fontSize: {
   14: 'var(--sz-14)',
   16: 'var(--sz-16)',
   18: 'var(--sz-18)',
   20: 'var(--sz-20)',
   24: 'var(--sz-24)',
   32: 'var(--sz-32)',
   42: 'var(--sz-42)',
   52: 'var(--sz-52)',
   64: 'var(--sz-64)',
   72: 'var(--sz-72)',
  },
  colors: {
   't-white': 'var(--tx-white)',
   't-black': 'var(--tx-black)',
   't-dark': 'var(--tx-dark)',
   't-dark2': 'var(--tx-dark2)',
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
