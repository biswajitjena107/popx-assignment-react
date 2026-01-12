/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pop: {
          primary: '#6C25FF',       // The main Purple
          secondary: '#4B3F72',     // Darker purple for text
          light: '#F7F7FF',         // Light purple background
          input: '#F7F7F7',         // Input background
          border: '#DDDDDD',        // Input Border
          text: '#1D2226',          // Main dark text
          subtext: '#666666',       // Grey text
          error: '#FF0000',         // Red stars
        }
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}