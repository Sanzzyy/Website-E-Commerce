import { transform } from "sucrase";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#EEEEEE",
      },
    },
    darkMode: "class",
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    container: {
      center: true,
      padding: {
        default: "12px",
        md: "32px",
      },
    },

    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      KiteOne: ["Kite One", "sans-serif"],
      Poppins: ["Poppins", " sans-serif"],
    },
    keyframes: {
      move: {
        "50% ": { transform: "translateY(-1rem)" },
      },
    },
    animation: {
      movingY: "move 5s linear infinite ",
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
