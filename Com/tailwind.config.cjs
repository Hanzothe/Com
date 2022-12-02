/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      marrom: "#935A5A",
      cinza: "rgba(255, 255, 255, 0.3)",
      cta: "#D79B00",
      ctah: "#c99617",
      cor1: "#445827 ",
      cor2: "#ded8cc ",
      cor3: "#f0a213 ",
      cor4: "#febd59 ",
      cor5: "#856d41",
      cor6: "#774936",
      cor7: "#E0C66E",
      cor8: "#d9b558",
      cor9: "#b46b48",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
