/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html"],
  theme: {
    extend: {

      colors: {
        'accent-color': '#177165',
        'accent2': '#A4D6CF',
        'accent3':'#177165',
      },
      width: {
        '455': '455px',
        '170': '170px',
        '212': '212px',
      },
      height: {
        '390': '390px',
        '30': '30px',
      },

      maxWidth: {
        '8xl': '1340px',
      },
      margin: {
        '15': '60px',
        '18':'18px' ,
        '123':'123px' ,
        
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '26px',
        'extra-loose': '2.5',
        '13': '29px',
        'extra-loose': '2.5',
        '79': '78px',
      }


    },
  },
  plugins: [],
}

