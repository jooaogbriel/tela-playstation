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
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.400rem',
      '5xl': '2.200rem',
    }
    },
    colors: {
        'regal-blue': '#261634',
        'white': '#fff',
        'black': '#000000',
        'blue': '#0070CC',
        'bg': '#191634',
        'dash' : '#093ebd'
      },
  },
  plugins: [],
}
