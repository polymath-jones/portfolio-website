/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Gasoek", "Open Sans"],
      body: ["FHOscar", "Open Sans"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "500px",
        "2md": "900px",
      },
      spacing: {
        0.75: "0.1875rem",
        1.25: "0.3125rem",
        1.75: "0.4375rem",
        3.75: "0.9375rem",
        4.5: "1.125rem",
        6.25: "1.5625rem",
        6.75: "1.6875rem",
        7: "1.75rem",
        7.5: "1.875rem",
        8.75: "2.1875rem",
        11.25: "2.8125rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        15: "3.75rem",
        16.25: "4.0625rem",
        17.5: "4.375rem",
        18: "4.5rem",
        25: "6.25rem",
        30: "7.5rem",
      },

      colors: {
        dark: {
          black: "#121212",
          "black-200": "#171717",
        },
        gray: {
          dark: "#4C4C4C",
          darker: "#1E1E1E",
          normal: "#696969",
        },
        outline: {
          black: "#212121",
          dark: "#323232",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          danger: "#E4033B",
          success: "#39CD62",
          yellow: "#E9B200",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          400: "#1A8224",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
