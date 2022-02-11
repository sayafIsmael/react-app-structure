module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {

    },
    colors: {
      primary: '#1A1A1C',
      white: '#FFFFFF',
      black: '#000',
      "input-box": '#F5F6F7',
      "input-border": "#2F70B5",
      "text-hover": "#1C2080",
      "text-inactive": "#5B616E",
      "sm-border": "#DDDFE2"
    }
  },
  plugins: [],
}