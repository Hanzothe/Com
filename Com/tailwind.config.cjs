/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      marrom: "#935A5A",
      cinza: "#D9D9D9",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
