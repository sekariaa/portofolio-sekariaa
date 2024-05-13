/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#153448',
        'brown-primary': '#DFD0B8'
      }
    },
    fontFamily: {
      Montserrat: ['Montserrat, sans-serif']
    }
  },
  plugins: []
}
