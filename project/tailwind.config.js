/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-color': '#6881FF',
        'gradient':'gradient-to-r from-[#1C1C1C] from-10% via-[#E3E3E3] via-30% to-[#1C1C1C] to-90%'
      },
    },
  },
  plugins: [],
}

