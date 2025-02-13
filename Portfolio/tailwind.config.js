/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      'inner-darkblue': 'inset 0 4px 6px rgba(0, 0, 139, 0.8)',
      "custom": '0 4px 10px rgba(0, 0, 0, 0.5)', //
    },
    screens: {
      sm: "400px"
    },
    backdropSepia: {
      25: '.25',
      75: '.75',
    },
    animation: {
      wave: 'wave 3s ease-in-out infinite', // Define the wave animation
    },
    keyframes: {
      wave: {
        '0%': {
          transform: 'translateX(-100%)',
          color: '#ff0000', // Starting color
        },
        '50%': {
          transform: 'translateX(100%)',
          color: '#00ff00', // Midway color
        },
        '100%': {
          transform: 'translateX(-100%)',
          color: '#0000ff', // End color
        },
      }
    }


  },
  plugins: [

  ],
}