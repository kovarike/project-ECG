/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
        "robotom": ["Roboto Mono", "sans-serif"],
        "ws": ["Work Sans", "sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
