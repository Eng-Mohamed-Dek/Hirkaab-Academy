/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      colors: {
        'primary' : '#00cd8e'
      }
    },
  },
  plugins: [],
}

