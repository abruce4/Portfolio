/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom theme colors for the portfolio
        desk: {
          light: '#fef3c7', // amber-100
          dark: '#1f2937',   // gray-800
        },
        surface: {
          light: '#fffbeb', // amber-50
          dark: '#111827',   // gray-900
        }
      },
      fontFamily: {
        'handwriting': ['Kalam', 'Comic Sans MS', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} 