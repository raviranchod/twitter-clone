// https://github.com/tailwindlabs/tailwindcss/discussions/1077
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "776px",
      xl: null,
      "2xl": null,
    },
    colors: {
      // base colours
      black: "#1E1515",
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
      red: {
        DEFAULT: "#f88787",
        dark: "#f12a28",
      },
      grey: "#8e8e8e",
      cloudy: "#d8d8d8",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
