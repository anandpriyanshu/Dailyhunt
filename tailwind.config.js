/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "100px": "100px",
        "200px": "200px",
        "250px": "250px",
        "350px": "350px",
        "300px": "300px",
        "400px": "400px",
        "450px": "450px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1500px": "1500px",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
      },
      height: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "400px": "400px",
        "450px": "450px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1500px": "1500px",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
      },
      boxShadow: {
        shadow33:
          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;",
      },
      screens: {
        "400px": "400px",

        "600px": "600px",
        "800px": "800px",
        "1100px": "1100px",
        "1300px": "1300px",
        "1500px": "1500px",
      },
    },
  },
  plugins: [],
}