/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#73D393",
        secondary: "#50C878",
        tertiary: "#dcf4e4",
        background: "#ffffff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
        "light",
    ],
  },
}
