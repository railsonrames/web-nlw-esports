/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.svg')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 20%, #43E7AD 70%, #E1D55D 10%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67%)'
      }
    },
  },
  plugins: [],
}
