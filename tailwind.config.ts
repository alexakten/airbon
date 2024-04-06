import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: "#384238",
        deepgreen: "#222822",
        darkorange: "#D6730F",
        deeporange: "#AD5B0A",
        bluegray: "#EFF5F1",
        lightgray: "#F9FCFA",
      },
      fontSize: {
        base: "1rem",
        "2xl": "1.5rem",
        "7xl": "4.5rem",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      borderWidth: {
        DEFAULT: "1px", // Sets the default border width
      },
    },
  },
  plugins: [],
};

export default config;
