module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Playfair Display", "serif"],
      },
      colors: {
        primary: {
          darken: "#232323",
          "red-text": " #BF2316",
          "white-text": "#F0E7BE",
        },
      },
    },
  },
  plugins: [],
};
