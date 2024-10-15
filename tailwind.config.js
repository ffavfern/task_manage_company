/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#b71c1c',  // Dark red
        dark: '#212121',     // Dark background
        light: '#ffffff',    // White text for contrast
        gray: '#424242'      // Dark gray for secondary elements
      }
    },
  },
  plugins: [],
}

