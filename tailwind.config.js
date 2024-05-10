/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      'darkmode':"#0d161c",
      'darkmodeligth':"#111b22"
     },
    extend: {backgroundImage:{
      '1': "url('../assets/img/1.jpg')",
      
      corePlugins: {
        aspectRatio: false,
      },
      
      
    }},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}

