/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#0e0e11",
        "surface-card": "#141417",
        "surface-card-hover": "#1c1c22",
        border: "rgba(255, 255, 255, 0.08)",
        "border-hover": "rgba(255, 107, 0, 0.35)",
        primary: {
          DEFAULT: "#FF6600",
          hover: "#FF7A1A",
          glow: "rgba(255, 102, 0, 0.4)",
          subtle: "rgba(255, 102, 0, 0.12)",
        },
        accent: {
          orange: "#FF5E14",
          amber: "#FF9900",
          dark: "#D44C00",
        },
        muted: {
          DEFAULT: "#9E9EA4",
          light: "#C5C5CC",
          dark: "#5A5A62",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-clash)", "var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(255, 102, 0, 0.35)",
        "glow-lg": "0 0 60px -10px rgba(255, 102, 0, 0.45)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
