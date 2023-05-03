/** @type {import('tailwindcss').Config} */
  const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.js",
            "./index.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        elizaPurple: '#786599',
        elizaGreen: '#DAE08F',
        elizaDarkGreen: '#8b8f5b',
        elizaBlue: '#D4E9F9',
        elizaGray: '#6B6A69',
        elizaHeader: '#F9F5E9'
      },
    },
    fontFamily: {
      'eliza': ['Lato', defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}

