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
        olive: "#5C5443",
        tan: "#F1EFE6",
        orange: "#EA642B",
        purple: "#AD86FF",
        darkpurple: "#9B78E5",
        yellow: "#FFD686",
        green: "#5EEF7E",
        blue: "#3787FE",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: ["bg-purple", "bg-darkpurple", "bg-yellow", "bg-green", "bg-blue"],
};

export default config;
