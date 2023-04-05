/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'DMSans': ['DM Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
