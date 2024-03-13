/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        conhero: "url('../assets/images/forcefields.png')"
      },
      colors: {
        primary: "#0E387A",
        card: "#E7EBF2",
        grey: "#6D758F",
        darkgrey: "#353635",
        home: "#001F61"
      },
      container: {
        center: true
      }
    }
  },
  plugins: []
}
