/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: "#94a3b8",
        white: '#f1f5f9'
      },
      screens: {
        '2xl' : '1320px'
      }
    }
  },
  plugins: []
};
