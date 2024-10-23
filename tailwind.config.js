/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      width: ["hover", "after"],
      textColor: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".link:after": {
            content: '""',
            position: "absolute",
            height: "3px",
            width: "0",
            left: "0",
            bottom: "-10px",
            backgroundColor: "#35B855",
            transition: "width 0.3s",
          },
          ".link:hover:after": {
            width: "100%",
          },
          ".link-active:after": {
            width: "100%",
          },
        },
        ["before", "after", "hover", "active"]
      );
    },
  ],
};
