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
        primary: {
          DEFAULT: "#335654",
          dark: "#223228",
          light: "#2d5282",
        },
        slick: "#d2b371",
        cream: "#F5F0E8",
        charcoal: "#1a1a1a",
        muted: "#6b7280",
      },
      fontFamily: {
        display: ["var(--font-gilda)", "Georgia", "serif"],
        body: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 8vw, 7rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 5vw, 4.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.75rem, 3.5vw, 3rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        "display-section": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        section: "6rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "92rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        "fade-in": "fade-in 1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
