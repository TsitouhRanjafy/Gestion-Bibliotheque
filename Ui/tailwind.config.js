/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      'redpropre':'#FF0000',
      'bluepropre':'#00FF00',
      'whitepropre':'#FFFFFF',
      'bluehover':'#c4d5ff',
      'blueactive':'#a6c0ff',
      'blackprimary':'#9b9b9b',
      'primary':'#242424',
      'secondary':'#848484',
      'thirty':'#747474'
    },
    extend: {
      width: {
        'book':'110px',
        '20%':'20%',
        'screen':'100vw'
      },
      minWidth: {
        '20%':'16%'
      },
      height: {
        'book':'180px',
        'screen':'100vh'
      },
      maxHeight: {
        'screen':'100vh'
      }
    },
  },
  plugins: [],
}

