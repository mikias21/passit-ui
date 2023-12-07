/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // body: ["Nunito Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        black: "#121212",
        green: "#00684A",
        white: "#FFFFFF",
        whitesmoke: "#CCC",
      },
    },
  },
  plugins: [],
};
