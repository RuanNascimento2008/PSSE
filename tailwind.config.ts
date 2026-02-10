import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a6fe2",
          dark: "#084bb0",
        },
        secondary: "#d4af37",
        accent: "#ff3e7f",
        dark: {
          DEFAULT: "#121212",
          deeper: "#0a0a0a",
        },
        light: "#f5f5f5",
      },
      fontFamily: {
        sans: ["var(--font-exo2)"],
        display: ["var(--font-orbitron)"],
      },
      animation: {
        float: "float 15s infinite ease-in-out",
        "float-reverse": "float 18s infinite ease-in-out reverse",
        "float-slow": "float 12s infinite ease-in-out",
        "float-card": "float-card 6s infinite ease-in-out",
        pulse: "pulse-scale 2s infinite",
        "scroll-line": "scroll-line 2s infinite",
        "fade-in": "fadeIn 1s ease forwards",
        "pulse-glow": "pulse-glow 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(10deg)" },
        },
        "float-card": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "scroll-line": {
          "0%": { height: "0", opacity: "0" },
          "50%": { height: "50px", opacity: "1" },
          "100%": { height: "0", opacity: "0", transform: "translateY(50px)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%": { boxShadow: "0 0 5px rgba(212, 175, 55, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.8)" },
          "100%": { boxShadow: "0 0 5px rgba(212, 175, 55, 0.5)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
