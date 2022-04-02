module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        iColor: {
          dark: '#0d253f',
          blue: '#01b4e4',
          green: '#90cea1',
        },
      },
    },
  },
  plugins: [],
}
