/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "deeper-blue": "#241468",
        "deep-blue": "#40128B",
        burgundy: "#900C3F",
        cadmium: "#C70039",
        orange: "#F94C10",
        yellow: "#E7B10A",
        "faded-yellow": "#F79327",
        cream: "#F9F9F9",
        gold: "#C0B236",
        "other-black": "#0F0E0E",
        blue: "#8BF5FA",
      },
      fontFamily: {
        retro: ["Monoton", "cursive"],
        cinzel: ["Cinzel Decorative", "cursive"],
        limelight: ["Limelight", "cursive"],
        goodvibes: ["Great Vibes", "cursive"],
      },
      height: {
        "11/12": "91.666667%",
        "10/12": "83.333333%",
      },
      width: {
        "90vw": "90vw",
        vmax: "100vmax",
      },
    },
    screens: {
      xxs: "412px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      "txt-fit": "957px",
      md: "1060px",
      lg: "1280px",
      xl: "1450px",
    },
  },
  plugins: [],
}
