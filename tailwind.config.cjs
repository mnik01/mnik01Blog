/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: 'jit',
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      sans: ["ui-sans-serif", "system-ui", "apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Apple Color Emoji", "Arial", "sans-serif", "Segoe UI Emoji", "Segoe UI Symbol"],
    },
    extend: {
      colors: {
        h1: "#37352F",
        h2: "#3F4447",
        p: "#37352F",
      },
    },
  },
}
