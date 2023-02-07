/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./views/**/*.handlebars", "./views/**/*.html", "./public/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'color1': '#f4a460',
        'color2': '#70c0af',
        'color3': '#6789cd',
        'color4': '#7d7295',
        'color5': '#769bc0',
        'color6': '#ffffff',
        'color7': '#000000',
        'color8': '#00000050',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}}
