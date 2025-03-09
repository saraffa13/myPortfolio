/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darmode:'class',
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#112240",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
        accent: "#64ffda",
      },
    },
  },
  plugins: [],
}