/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "vazir" : "vazir",
      "Varelmo" : "Varelmo",
      "ABSTER" : "ABSTER",
      "vazir-bold" : "vazir-bold",
      "vazir-light" : "vazir-light",
      "iransans" : "iransans",
      "iransans-light" : "iransans-light",
    },
    container:{
      center : true, 
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      'xmd': '976px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },

    maxWidth:{
      maxWidth: "1300px",
      '100' : "400px"
    },
    extend: {
      dropShadow:{
        "4xl" : "0 100px 10px 0 #ffffff"
      },
      boxShadow:{
        "4xl" : "0 0 15px -3px rgba(0, 0, 0, 0.2)",
      }
    },
  },
  plugins: [],
}