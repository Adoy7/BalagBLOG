/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      listStyleImage: {
        'user-icon':'./assets/8bit-me_blackbg.png',
      },
      colors: {
        'snow': '#F7F3F5',
        'tangerine': '#FAA275',
        'coral': '#FF8C61',
        'blush': '#CE6A85',
        'magenta': '#985277',
        'eggplant': '#5C374C',
      },
      spacing: {
        '548': '548px',
        '330': '330px',
        '190': '190px',
        '180': '180px',
        '88': '88px',
        '50': '50px',
        '45': '45px',
        '38': '38px',
        '35': '35px',
        '30': '30px',
        '25': '25px',
      },
      screens: {
        'mobile-m': '375px',
      // => @media (min-width: 640px) { ... }

      'mobile-l': '425px',
      // => @media (min-width: 640px) { ... 

        'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

