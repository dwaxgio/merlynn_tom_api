/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "app-bg": "rgb(15 23 42)",
      },
      colors: {
        custom: 'rgb(15 23 42)',
      },
    },
  },
  plugins: [],
};
