/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito:"'Nunito', sans-serif",
        Mansalva:"'Mansalva', system-ui",
        Kristi:"'Kristi', cursive"
      }
    },
  },
  plugins: [require('daisyui'),],
}

