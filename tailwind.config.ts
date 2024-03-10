module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        neo: ["Neo Sans Cyr"],
        neoregular: ["Neo Sans Cyr Regular"],
        killbill: ["Keetano Katana KillBill"],
        katana: ["Keetano Katana"],
        neolight: ["Neo Sans Cyr Light"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          dark: "#232323",
          red: " #BF2316",
          light: "#F0E7BE",
          hovered: "#af1306",
        },
      },
    },
  },
  plugins: [],
};
