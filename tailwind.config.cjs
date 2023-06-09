module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Volkhov", "serif"],
      },
      colors: {
        gray: {
          50: "#F6FAFD",
        },
        orange: {
          DEFAULT: "#D9AC68",
        },
        blue: {
          DEFAULT: "#3EC1F3",
        },
        pink: {
          DEFAULT: "#F990BC",
        },
      },
      fontSize: {
        "6xl": ["3.5rem", "4.25rem"],
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
