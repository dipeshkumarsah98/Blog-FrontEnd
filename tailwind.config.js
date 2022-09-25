/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        openSans: ["'Open Sans'", "sans-serif"],
        Poppins: ["'Poppins'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
      container: {
        center: true,
        padding: "o 2rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
