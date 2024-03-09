/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        backgroundImage: {
          'conhero': "url('../assets/images/forcefields.png')",
        },
      colors: {
        primary: "#0E387A",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

