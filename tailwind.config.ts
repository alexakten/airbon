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
        deepgreen: "#0D1B1A",
        darkgreen: "#131718",
        lightgreen: "#24483E",
        bluegray: "#D9E1DE",
        deeporange: "#954013",
        orange: "#D99256",
        lightorange: "#F2BD8B",
        frostwhite: "#D5C9C4",
        icewhite: "#D9E1DE",
        lightgray: "#EEEEEE",
        offblack: "#151515"
      },
      fontSize: {
        base: "0.9375rem",
        "2xl": "1.375rem",
        "7xl": "5.12rem",
      },
      borderWidth: {
        DEFAULT: "0.5px", // Sets the default border width
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
