/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        alternative: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
};
