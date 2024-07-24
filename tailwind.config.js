/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theRed: '#B61F2E',
        theDGray: '#3E3E3E',
        theLGray: '#F8F8F8',
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
      fontWeight: {
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};