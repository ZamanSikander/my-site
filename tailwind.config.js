/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:  {
        'sans': ['Source Sans Pro', 'sans-serif'], // for body text
        'orbitron': ['Orbitron', 'sans-serif'],    // for headings
        'exo': ['Exo', 'sans-serif'],              // for CTA and navbar links
        'display': ['Exo', 'sans-serif'],          // for navbar brand
      },
    },
  },
  plugins: [],
}

