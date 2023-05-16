/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#ffffff",
        tertiary: "#151030",
      },
      boxShadow: {
        // card: "-5px 5px 30px 5px #de6bbf",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/planets-bg.jpg')",
      },
    },
  },
  plugins: [],
};
