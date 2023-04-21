/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#43d487",
        darkbase: "#268951",
        lightbase: "#87eac5",
        neutral: "#cbe4d4",
      },
    },
  },
  plugins: [],
};
