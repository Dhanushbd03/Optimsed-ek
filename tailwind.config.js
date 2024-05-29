/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "ek-",
  content: [".//*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D3F82",
        secondary: "#D5202E",
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
