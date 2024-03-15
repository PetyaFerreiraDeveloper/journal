/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        alternative: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        "dark-green": "#006400",
        "darker-green": "#005000",
        "darkest-green": "#004000",
      },
      backgroundImage: {
        heroMain:
          "linear-gradient(180deg, rgba(4,0,148,1) 0%, rgba(128,219,225,1) 100%)",
        heroGreen:
          "linear-gradient(180deg, rgba(102,140,48,1) 0%, rgba(210,221,196,1) 100%)",
      },
    },
  },
  plugins: [],
};
