/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}',
    './src/**/*.{html,js}',
        './public/index.html',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#FF6363',
        secondary:{
          100: '#e2e2d5',
          200: '#888883',
        }
        },
        fontFamily:{
          body:['Nunito']
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}

