/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#032B44',
        secondary: '#34C759',
      },
      fontFamily: {
        sans: ['Calibri', 'sans-serif'],
        heading: ['Calibri', 'sans-serif'],
      },
    },
  },
  plugins: [],
};