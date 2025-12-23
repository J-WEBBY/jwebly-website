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
        
        // Scale.ai brand colors - Pink to Cyan gradient
        accent: {
          DEFAULT: "#FF0080", // Scale.ai pink
          light: "#FF4DA6",
          dark: "#CC0066",
          foreground: "#FFFFFF",
        },
        
        scale: {
          pink: "#FF0080",
          "pink-light": "#FF4DA6",
          "pink-dark": "#CC0066",
          cyan: "#00D9FF",
          "cyan-light": "#5DE5FF",
          "cyan-dark": "#00A8CC",
        },
        
        background: {
          DEFAULT: "#000000",
          elevated: "#0A0A0A",
          card: "#171717",
        },
        
        foreground: {
          DEFAULT: "#FFFFFF",
          muted: "#A3A3A3",
        },
        
        border: "#262626",
        input: "#171717",
        ring: "#FF0080",
        
        primary: {
          DEFAULT: "#FF0080", // Scale.ai pink as primary
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#171717",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#171717",
          foreground: "#A3A3A3",
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

