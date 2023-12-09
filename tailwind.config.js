/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
      },
      colors: {
        blue: "#3742fa",
        gray: "#ced6e0",
      },
    },
  },
  plugins: [],
};
