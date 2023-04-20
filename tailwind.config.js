/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      neutral: {
        0: "#fff",
        900: "#000",
      },
      blue: {
        300: "#4658B3",
        400: "#3A4994",
        500: "#2D3873",              
      },
      yellow: {
        300: "#FFD32F",
        400: "#edb427",
        500: "#D4A122",              
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        dosis: ["var(--font-dosis", "sans-serif"]
      },
    },
  },
  plugins: [],
};
