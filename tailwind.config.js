/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        welcome: ["Nanum Gothic", "sans-serif"],
        title: ["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
}

