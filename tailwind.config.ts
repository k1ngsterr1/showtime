module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        neo: ["Neo Sans Cyr"],
        killbill: ["Keetano Katana KillBill"],
        katana: ["Keetano Katana"],
        neolight: ["Neo Sans Cyr Light"],
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
