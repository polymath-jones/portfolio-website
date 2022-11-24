/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Work Sans", "Open Sans"],
      display: ["Work Sans", "Open Sans"],
    },
    screens: {
      sm: "520px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      outline: {
        primary: "1px solid #332089",
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
      animation: {
        "spin-once": "spin 600ms linear",
      },
      keyframes: {
        spin: {
          to: {
            transform: "rotate(180deg)",
          },
        },
      },
      colors: {
        primary: {
          400: "#39CDCC",
        },
        secondary: {
          100: "#545F7D",
          400: "#213F7D",
        },
        accent: {
          "danger": "#E4033B",
          "success": "#39CD62" ,
          "yellow": "#E9B200"
        }
      },
    },
  },
  plugins: [],
};
