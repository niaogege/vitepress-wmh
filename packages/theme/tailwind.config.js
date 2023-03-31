/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  plugins: [],
  content: ["./demo/.vitepress/**/*.{vue,ts}", "./src/components/*.{vue, ts}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg:
          "url('https://pica.zhimg.com/v2-4f4ce41d56c9fddf603f6b489f42bdcd_1440w.jpg')",
      },
      textColor: {
        little: "#8D8D91",
        primary: "#9b9baa",
      },
    },
  },
};
