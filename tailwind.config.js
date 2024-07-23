const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        white: "white",
        none: "none",
        background: "#030417",
        stockSage: "#FF3600",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
      padding: {
        152: "38rem",
        180: "45rem",
      },
      margin: {
        112: "28rem",
        120: "30rem",
        140: "35rem",
        160: "40rem",
        240: "60rem",
      },
    },
  },
  plugins: [],
};
