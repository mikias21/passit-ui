/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
        afacad: ["Afacad", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        blue: "#3742fa",
        gray: "#ced6e0",
        whitesmoke: "#F1F5F9",
      },
    },
  },
  plugins: [],
};
