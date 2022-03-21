module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'monst': ['Monst'],
    },
    extend: {
      colors: {
        primary: '#FFDFD6',
        secondary: '#52C3FF',
        tertiary: '#FFCB57',
        'accent-1': '#FC77A0',
        'accent-2': '#5AE2E2',
        shades: {
          100: '#F9F9F9',
          200: '#EAEAEA',
          300: '#D5D4D4',
          400: '#6D6D78',
          500: '#172239',
          600: '#161616',
        },
      },
    },
  },
  plugins: [],
};
