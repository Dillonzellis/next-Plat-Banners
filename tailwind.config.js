/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        brandingRed: {
          400: "#b2191e",
        },
        brandingGreen: {
          400: "#045f2c",
        },
      },
      fontFamily: {
        serif: ["Playfair Display, serif"],
      },
    },
  },
  plugins: [],
};
