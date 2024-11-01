/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        neutral:{
          'off-white': 'hsl(36, 100%, 99%)',
      },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Rokkitt: ["Rokkitt", "sans-serif"],
      },
      backgroundImage: {
        'hero-img': "url('../images/bg_header.jpg')",
      },
    },
  },
  plugins: [],
};
