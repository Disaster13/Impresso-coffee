/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aqua: {
          light: '#E6F4F1',
          DEFAULT: '#7FDBDA',
          dark: '#2A9D8F',
        },
        coffee: {
          light: '#8B4513',
          dark: '#3E2723',
        },
        olive: {
          light: '#98A987',
          DEFAULT: '#657153',
          dark: '#414833',
        }
      },
      fontFamily: {
        greek: ['GFS Didot', 'system-ui', 'serif'],
      },
      backgroundImage: {
        'texture': "url('https://www.transparenttextures.com/patterns/greek-vase.png')",
      }
    },
  },
  plugins: [],
};