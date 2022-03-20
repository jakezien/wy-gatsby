module.exports = {
  mode:'jit',
  content: [
    "./content/**/*.md",
    "./src/pages/*.{mdx,js}",
    "./src/components/*.js",
    "./src/templates/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}