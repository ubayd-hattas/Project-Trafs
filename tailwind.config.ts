import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f5",
          100: "#d6dde7",
          200: "#adbccf",
          300: "#8399b6",
          400: "#5a769e",
          500: "#3d5a82",
          600: "#2c4566",
          700: "#20344e",
          800: "#16253a", // primary brand navy
          900: "#0d1726", // deepest navy
        },
        parchment: {
          DEFAULT: "#faf7f0",
          100: "#fdfcf9",
          200: "#f7f2e8",
          300: "#efe7d6",
        },
        brass: {
          300: "#e0c179",
          400: "#cda454",
          500: "#b8893a",
          600: "#806024",
          700: "#755625",
        },
        ink: {
          DEFAULT: "#1c2430",
          light: "#3f4a58",
          muted: "#596573",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        body: ["var(--font-plex)"],
      },
      maxWidth: {
        content: "80rem",
      },
      borderRadius: {
        xs: "0.125rem",
      },
      boxShadow: {
        card: "none",
        cardHover: "0 3px 10px rgba(13,23,38,0.06)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
