import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#e8d5a3",
          400: "#d4b96a",
          500: "#c9a84c",
          600: "#b8932f",
          700: "#9a7a20",
        },
        surface: {
          50:  "#1e2418",
          100: "#171d12",
          200: "#12180d",
          300: "#0e1309",
          400: "#0a0f06",
          500: "#070b04",
        },
        card: "#1a1f14",
        border: "#2a3020",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
