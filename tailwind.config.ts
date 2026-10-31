import type { Config } from "tailwindcss";

// Colours sampled from the school crest (public/images/crest.png):
// shield navy #2b2f48 and marigold gold #f0a830.
// Gold 500 is for fills and rules only. Use 600/700 for gold text on light
// backgrounds (both pass WCAG AA on parchment).
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef0f6",
          100: "#d9dcea",
          200: "#b3b8d2",
          300: "#8a90b3",
          400: "#626a93",
          500: "#454c75",
          600: "#343a5f",
          700: "#2a2f4f",
          800: "#22263f", // primary, crest shield navy
          900: "#161a2c",
        },
        parchment: {
          DEFAULT: "#f9f6ee",
          100: "#fdfbf6",
          200: "#f4eee0",
          300: "#ebe2cc",
        },
        brass: {
          300: "#f7cf7a",
          400: "#f3b844",
          500: "#eba22a", // crest gold
          600: "#8a5905",
          700: "#7d5106",
        },
        ink: {
          DEFAULT: "#1d2033",
          light: "#3e4258",
          muted: "#555a70",
        },
      },
      fontFamily: {
        display: ["var(--font-caslon)", "Georgia", "serif"],
        body: ["var(--font-atkinson)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "80rem",
      },
      borderRadius: {
        xs: "0.125rem",
      },
      boxShadow: {
        card: "none",
        cardHover: "0 3px 10px rgba(22,26,44,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
