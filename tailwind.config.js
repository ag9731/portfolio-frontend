/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#344c36", 
        lightpurple: "#b388eb", 
        secondary: "#fab42e", 
      },
    },
  },
  plugins: [],
};
