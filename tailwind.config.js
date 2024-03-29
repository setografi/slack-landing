/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PurpleBack: "#74247A",
        LightBlue: "#69D3FA",
        LightGreen: "#5CF1A4",
        YellowBack: "#FFC700",
        BlackText: "#303030",
        BlackTextTwo: "#000000",
        WhiteBack: "#FFFFFF",
      },

      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
