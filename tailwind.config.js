/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E387A",
        card: "#E7EBF2",
        grey: "#6D758F",
        darkgrey: "#353635"
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

