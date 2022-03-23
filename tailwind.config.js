module.exports = {
  mode:'jit',
  content: [
    "./content/**/*.md",
    "./src/pages/*.{mdx,js}",
    "./src/components/*.js",
    "./src/templates/*.js",
  ],
  theme: {
    fontFamily: {
      franklin: ["Franklin Gothic Compressed", "sans-serif"],
      display: ["Garamond Pro Display", "serif"],
    },
    extend: {},
  },
  plugins: [],
}
