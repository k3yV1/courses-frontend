/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mexcellent': ['mexcellent', 'sans-serif']
      },
      keyframes: {
        test: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        }
      },

      boxShadow: {
        '1': '0 0px 20px 5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },

      animation: {
        test: 'test 2s ease-in-out',
      }
    },
  },
  plugins: [],
}

