/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: "#0e161b",
        dark: "#162022",
        grayest: "#232e30",
        grayer: "#56666f"
      },
      fontFamily: {
        mystery: ["Mystery", "sans-serif"]
      }
    },
  },
  plugins: [],
}

