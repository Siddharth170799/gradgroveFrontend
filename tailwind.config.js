/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        "custom-blue": "rgb(70, 83, 120)",
      },
    },
  },
};
