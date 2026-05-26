import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",

        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          400: "#A3A3A3",
          600: "#525252",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },

        // Jwebly brand — Pulse Violet to Quantum Blue
        accent: {
          DEFAULT: "#8A6CFF", // Pulse Violet
          light: "#A98DFF",
          dark: "#6B4FE0",
          foreground: "#FFFFFF",
        },

        scale: {
          pink: "#8A6CFF",       // repurposed: Pulse Violet (primary)
          "pink-light": "#A98DFF",
          "pink-dark": "#6B4FE0",
          cyan: "#4B7BFF",       // repurposed: Quantum Blue (gradient partner)
          "cyan-light": "#7B9FFF",
          "cyan-dark": "#3B5FD0",
        },

        background: {
          DEFAULT: "#000000",
          elevated: "#0A0E1A",   // dark navy (replaces 0A0A0A)
          card: "#0F1628",       // slightly lighter navy (replaces 171717)
        },

        foreground: {
          DEFAULT: "#FFFFFF",
          muted: "#94A3B8",      // cool blue-gray (replaces A3A3A3)
        },

        border: "#1B2B45",       // dark navy border (replaces 262626)
        input: "#0F1628",
        ring: "#8A6CFF",

        primary: {
          DEFAULT: "#8A6CFF",    // Pulse Violet as primary
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0F1628",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#0F1628",
          foreground: "#94A3B8",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
