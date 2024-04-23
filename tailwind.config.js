const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/*.{ts,tsx}', './stories/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animate'),
  ],
}
