import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        cream: { DEFAULT: "#FAF6F0", soft: "#F5EFE6", deep: "#EDE0D0" },
        brown: { DEFAULT: "#8B5E3C", light: "#C4956A", dark: "#2D1B0E", mid: "#6B4226" },
        golden: { DEFAULT: "#D4A96A", light: "#EDD9A3", warm: "#C4956A" },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(139,94,60,0.06)",
        subtle: "0 2px 8px rgba(139,94,60,0.12)",
        glow: "0 0 24px rgba(212,169,106,0.45), 0 0 60px rgba(212,169,106,0.18)",
        "glow-sm": "0 0 12px rgba(212,169,106,0.4)",
        "glow-lg": "0 0 48px rgba(212,169,106,0.35), 0 0 100px rgba(212,169,106,0.12)",
        "glow-brown": "0 0 20px rgba(139,94,60,0.3), 0 0 48px rgba(139,94,60,0.1)",
        "card-luxury": "0 8px 32px rgba(139,94,60,0.12), 0 0 0 1px rgba(196,149,106,0.15)",
        "card-hover": "0 16px 48px rgba(139,94,60,0.2), 0 0 0 1px rgba(212,169,106,0.3), 0 0 24px rgba(212,169,106,0.2)",
      },
      backgroundImage: {
        "cream-gradient": "linear-gradient(135deg, #FAF6F0 0%, #F5EFE6 50%, #EDE0D0 100%)",
        "brown-gradient": "linear-gradient(135deg, #8B5E3C, #C4956A)",
        "golden-gradient": "linear-gradient(135deg, #C4956A, #D4A96A, #EDD9A3)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))",
        "golden-radial": "radial-gradient(ellipse at center, rgba(212,169,106,0.2) 0%, transparent 70%)",
        "section-radial": "radial-gradient(ellipse at 50% 0%, rgba(212,169,106,0.12) 0%, transparent 60%)",
        "footer-gradient": "linear-gradient(180deg, #3D2010 0%, #2D1B0E 100%)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-14px) rotate(2deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: { "0%": { left: "-100%" }, "100%": { left: "200%" } },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,169,106,0.35), 0 0 40px rgba(212,169,106,0.12)" },
          "50%": { boxShadow: "0 0 40px rgba(212,169,106,0.6), 0 0 80px rgba(212,169,106,0.28)" },
        },
        "particle-drift": {
          "0%": { transform: "translateY(100vh) translateX(0px) scale(0)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.3" },
          "100%": { transform: "translateY(-100px) translateX(60px) scale(1.2)", opacity: "0" },
        },
        "rotate-slow": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "spin-reverse": { from: { transform: "rotate(360deg)" }, to: { transform: "rotate(0deg)" } },
        "text-shimmer": { "0%": { backgroundPosition: "-200% center" }, "100%": { backgroundPosition: "200% center" } },
        "fade-up": { from: { opacity: "0", transform: "translateY(30px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "scale-in": { from: { opacity: "0", transform: "scale(0.9)" }, to: { opacity: "1", transform: "scale(1)" } },
        "warm-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,169,106,0.3), 0 0 40px rgba(196,149,106,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(212,169,106,0.55), 0 0 80px rgba(196,149,106,0.22)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "particle-drift": "particle-drift 8s ease-in infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "spin-reverse": "spin-reverse 15s linear infinite",
        "text-shimmer": "text-shimmer 4s linear infinite",
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "warm-glow": "warm-glow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
