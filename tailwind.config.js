import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      maxWidth: {
        Container: '1100px',
        fontFamily: {
          sans: ['Inria Sans', 'sans-serif',],
          backgroundImage: {
            bgimage: "url('images/main.png')",
           
          }
         
        }
      }
    },
  },
  plugins: [],
}

