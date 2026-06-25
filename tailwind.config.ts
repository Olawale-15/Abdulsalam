import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef4ff",
          100: "#d9e7ff",
          200: "#bcd3ff",
          300: "#8eb7fd",
          400: "#598df9",
          500: "#3366f5",
          600: "#1d47ea",
          700: "#1636d7",
          800: "#182dae",
          900: "#192b89",
          950: "#141d54",
        },
        slate: {
          850: "#172033",
          950: "#0c1220",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(51,102,245,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(51,102,245,0.06) 1px, transparent 1px)",
        "radial-brand":
          "radial-gradient(ellipse at 50% 0%, rgba(51,102,245,0.15) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        "brand-sm": "0 2px 8px rgba(51,102,245,0.15)",
        "brand-md": "0 4px 20px rgba(51,102,245,0.2)",
        "brand-lg": "0 8px 40px rgba(51,102,245,0.25)",
        "card": "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.1), 0 16px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
