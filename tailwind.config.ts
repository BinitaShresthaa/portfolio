import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F0D4",
          300: "#6FDDBB",
          400: "#3CC49E",
          500: "#16A88A",
          600: "#0D9488",
          700: "#0B7A72",
          800: "#0A625E",
          900: "#0A504D",
        },
        ink: {
          DEFAULT: "#0F1B2D",
          soft: "#334156",
        },
        slate: {
          muted: "#5B6B81",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F6F9FC",
          line: "#E4EBF2",
        },
      },
      fontFamily: {
        display: ["var(--font-quicksand)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        soft: "0 8px 24px -8px rgba(13, 148, 136, 0.18)",
        card: "0 2px 10px -2px rgba(15, 27, 45, 0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
