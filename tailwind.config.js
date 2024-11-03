/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      colors: {
        primary: "#0075ff",
        secondary: "#a0aec0",
      },
      backgroundImage : {
        primaryGradient : 'linear-gradient(127.09deg, #060b28f0 19.41%, #0a0e237d 76.65%)'
      }
    },
  },
  plugins: [],
};
