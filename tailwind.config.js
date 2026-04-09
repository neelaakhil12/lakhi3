/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./services.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5D0E11", // Luxury Maroon
        accent: "#d4af37",  // Luxury Gold
        secondary: "#1f2937", // Dark Gray
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
