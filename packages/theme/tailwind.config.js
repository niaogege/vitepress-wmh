/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [],
  content: ["./demo/.vitepress/**/*.{vue,ts}", "./src/components/*.{vue, ts}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg:
          "url('https://pica.zhimg.com/v2-4f4ce41d56c9fddf603f6b489f42bdcd_1440w.jpg')",
      },
    },
  },
};
