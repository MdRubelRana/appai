/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'breadcrumb': "url('../img/breadcrumb.jpg')",
      },
      colors: {
        gray: '#757575',
        grayLight: '#4c5462',
        grayDark: '#2b323f',
        red: '#fd1d1d',
        yellow: '#fcb045',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}