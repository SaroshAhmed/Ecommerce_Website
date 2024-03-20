/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        logoGreen : '#23ddc3'
      },
      animation:{
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}

