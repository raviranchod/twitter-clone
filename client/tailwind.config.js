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
      primary: {
        lightest: "#ebf6fe",
        light: "#77c7f7",
        DEFAULT: "#1da1f2",
        dark: "#0b7cc1",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
