/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        neutral:{
          'off-white': 'hsl(36, 100%, 99%)',
          'gray': 'hsl(0, 0%, 33%)',
          'bg-blue': 'hsl(197, 79%, 75%, 75%)',
      },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Rokkitt: ["Rokkitt", "sans-serif"],
      },
      backgroundImage: {
        'hero-img': "url('../images/bg_header.jpg')",
        'about-img': "url('../images/bg_nuage.jpg')",
      },
    },
  },
  plugins: [],
};
