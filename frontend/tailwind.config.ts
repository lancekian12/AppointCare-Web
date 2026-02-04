import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008081",
        secondary: "#81B641",
        "background-light": "#FFFFFF",
        "background-dark": "#0f172a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
};

export default config;
