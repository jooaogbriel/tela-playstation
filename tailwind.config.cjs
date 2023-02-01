/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'control': "url('/imgs/dualsenseedge.jpeg')",
        spacing: {
          '128': '30rem',
          '100': '38%'
        }
      }
    },
  },
  plugins: [],
}
