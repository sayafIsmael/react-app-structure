module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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