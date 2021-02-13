module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        first: "#f6f6f6",
        second: "#c7ffd8",
        third: "#98ded9",
        fourth: "#161d6f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
