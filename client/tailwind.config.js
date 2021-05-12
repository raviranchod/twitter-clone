module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      // base colours
      black: "#000000",
      white: "#ffffff",
      current: "currentColor",
      transparent: "transparent",

      //
      primary: "#1da1f2",
      cloudy: "#ebf6fe",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
