/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
    },
  },
  variants:{
    extend:{
      display:['group-focus'],
      opacity:['group-focus'],
      inset:['group-focus']
    },
  },
  plugins: [],
}
