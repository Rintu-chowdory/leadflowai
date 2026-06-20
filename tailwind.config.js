export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#6366f1', dark: '#4f46e5' },
        secondary: '#8b5cf6',
      }
    }
  },
  plugins: []
}
