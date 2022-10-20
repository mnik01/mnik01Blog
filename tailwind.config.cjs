/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Lato', 'Inter', 'Roboto', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      // ui-sans-serif, system-ui, apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
    },
  },
  plugins: [],
}
