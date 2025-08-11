import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#24543c",
          light: "#2a6349",
          dark: "#1c4230",
          hover: "#1c4230",
          foreground: "hsl(var(--brand-foreground))",
        },
        secondary: {
          DEFAULT: "#a0c067",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#24543c",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        "inter": ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #24543c, #2a6349)",
        "gradient-primary-hover": "linear-gradient(to right, #1c4230, #24543c)",
        "gradient-hero": "linear-gradient(135deg, rgba(36, 84, 60, 0.1), rgba(36, 84, 60, 0.05))",
        "gradient-card": "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.75))",
      },
      boxShadow: {
        "soft": "0 2px 4px rgba(36, 84, 60, 0.1)",
        "medium": "0 4px 6px rgba(36, 84, 60, 0.1)",
        "large": "0 10px 15px rgba(36, 84, 60, 0.1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeInUp": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fadeIn": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slideInLeft": {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slideInRight": {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scaleIn": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeInUp": "fadeInUp 0.6s ease-out forwards",
        "fadeIn": "fadeIn 0.6s ease-out forwards",
        "slideInLeft": "slideInLeft 0.6s ease-out forwards",
        "slideInRight": "slideInRight 0.6s ease-out forwards",
        "scaleIn": "scaleIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 1.5s infinite",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;