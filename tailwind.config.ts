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
        purple: "#AD86FF",
        darkpurple: "#9B78E5",
        yellow: "#FFD686",
        green: "#5EEF7E",
        blue: "#3787FE",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
  safelist: ["bg-purple", "bg-darkpurple", "bg-yellow", "bg-green", "bg-blue"],
};
export default config;
