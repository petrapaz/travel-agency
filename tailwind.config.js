/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- DODAJTE ILI IZMIJENITE OVAJ DIO ---
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}