/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Alegreya:'Alegreya Sans',
        Montserrat:'Montserrat',
        OpenSans:'Open Sans',
        Lato:'Lato',
        Roboto:'Roboto',
        RobotoSlab:'Roboto Slab'

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}