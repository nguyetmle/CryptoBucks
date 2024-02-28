/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
      colors: {
        gray: { 100: "#808080", 200: "#323232", 300: "#030712" },
        white: "#fff",
        cyan: "#d1fae5",
        red: "#d6436e",
        green: "#2dd4bf",   
      },
      fontSize: {
        sm: "14px", md: "18px", lg: "24px", xl: "32px", base: "16px"
      }
    },
  },
  plugins: [],
}