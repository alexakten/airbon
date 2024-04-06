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
        pink: "#FD30C0",
        orange: "#FFA637",
        cyan: "#2EFAAE",
        lightblue: "#2DCBFF",
        blue: "#3787FE",
        purple: "#AD86FF",
        yellow: "#FFD686",
        green: "#5EEF7E",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
  safelist: ["bg-purple", "bg-darkpurple", "bg-yellow", "bg-green", "bg-blue", "bg-orange", "bg-cyan", "bg-pink", "bg-lightblue"],
};
export default config;
