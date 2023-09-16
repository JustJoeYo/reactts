/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'popclr': '#0d135c',
        'mainclr': '#060a36',
        'text-color': '#b3b3b3',
      },
    },
  },
  plugins: [],
}