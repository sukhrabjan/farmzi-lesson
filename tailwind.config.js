/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html"],
  theme: {
    extend: {

      colors: {
        'accent-color': '#177165',
      },

      width: {
        '11xl': '1340px',
      }
    
    },
  },
  plugins: [],
}

