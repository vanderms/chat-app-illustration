/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      sm: "var(--shadow-sm)",
      md: "var(--shadow-md)",
      xl: "var(--shadow-xl)",
    },
    
    screens: {
      sm: "22rem",
      md: "45rem",
      xl: "74rem"
    },
    colors: {
      "neutral": "var(--neutral)",
      "neutral-50": "var(--neutral-50)",
      "neutral-100": "var(--neutral-100)",
      "neutral-300": "var(--neutral-300)",
      "neutral-500": "var(--neutral-500)",
      "neutral-800": "var(--neutral-800)",
      "primary": "var(--primary)",
      "primary-100": "var(--primary-100)",
      "primary-200": "var(--primary-200)",
      "primary-300": "var(--primary-300)",
    },
    extend: {
      backgroundImage: {
        'primary-gradient': "var(--gradient)",
      }
    },
  },
  plugins: [],
}