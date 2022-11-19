/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '460px',
      sm: '700px',
      md: '888px',
      lg: '1071px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
  variants: {
    scrollbar: ['rounded'],
  },
};
