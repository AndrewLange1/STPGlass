/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        header: 'rgb(67, 95, 161)',
        lightBlue: '#f2f9fa',
        bottom: '#446bfa',
        stripes: '#D8E7F1',
        estimate: '#375ea8',
        bh: '#3a60a6',
        pay: '#fcde03',
        navHover: '#405cd4',
      },
    },
  },
  plugins: [],
}
