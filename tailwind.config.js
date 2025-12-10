export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#005B96',
          green: '#88B04B',
          coral: '#FF6F61',
          gold: '#D4AF37'
        },
        neutral: {
          white: '#FFFFFF',
          ice: '#F4F7F6',
          gray: '#6B7280',
          dark: '#1F2937'
        }
      },
      fontFamily: {
        heading: ['Nunito', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
