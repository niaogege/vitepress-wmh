/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {}
  },
  plugins: [],
  content: [
    "./docs/.vitepress/**/*.{vue,ts}",
    "./node_modules/@chendap/vitepress-wmh/src/**/*.{vue,ts}"
  ],
  theme: {}
}
