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
          'btn-red': 'hsl(345, 91%, 55%)',
          'bg-sombre': 'hsl(0, 0%, 8%, 0.6)',
          'text-link': '#31c7c6'
      },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Rokkitt: ["Rokkitt", "sans-serif"],
      },
      backgroundImage: {
        'hero-img': "url('../images/bg_header.jpg')",
        'about-img': "url('../images/bg_nuage.jpg')",
        'history-img': "url('../images/bg_appareil_photo.jpg')",
        'contact-img': "url('../images/bg_newsletter.jpg')",
      },
    },
  },
  plugins: [],
};
