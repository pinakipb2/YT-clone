/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '428px',
      sm: '660px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
  variants: {
    scrollbar: ['rounded'],
  },
};
