/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", /* Que tenga en cuenta todos los que esten en pages */
    "./Layout/**/*.{js,ts,jsx,tsx}", /* Que tenga en cuenta la carpeta de layout */
    "./components/**/*.{js,ts,jsx,tsx}", /* Que tenga en cuenta todo lo que este en components */
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

