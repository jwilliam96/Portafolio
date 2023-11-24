/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo: "#2F122A",
        title: "#D0907C",
        proyec: "#5AAFD6",
        text: "#E8E6E6",
        luz: "#884B2D",
      },
      spacing: {
        ancho: "450px",
        alto: "270px",
      },
      screens: {
        ss: { min: "425px", max: "640px" },
      },
      boxShadow: {
        caja: "6px 5px 15px 1px black",
        cajados: "-6px 5px 15px 1px black",
      },
    },
  },
  plugins: [],
};
