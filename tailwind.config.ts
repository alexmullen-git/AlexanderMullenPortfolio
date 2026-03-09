import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050711",
        surface: "#0B0F1F",
        surfaceSoft: "#101525",
        accent: "#4F46E5",
        accentSoft: "#6366F1",
        accentMuted: "#A5B4FC",
        borderSubtle: "rgba(148, 163, 184, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "soft-elevated":
          "0 18px 45px rgba(15, 23, 42, 0.8), 0 0 0 1px rgba(148, 163, 184, 0.15)",
        "card-hover":
          "0 20px 60px rgba(15, 23, 42, 0.95), 0 0 0 1px rgba(129, 140, 248, 0.35)"
      },
      borderRadius: {
        xl: "1.1rem",
        "2xl": "1.35rem"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" }
        },
        "soft-glow": {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0px)" },
          "50%": { opacity: "0.9", transform: "translateY(-4px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 550ms ease-out forwards",
        "soft-glow": "soft-glow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
