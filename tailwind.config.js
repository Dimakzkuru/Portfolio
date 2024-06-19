/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      content: {
        after: '""',
      },
      inset: {
        "-10": "-2.5rem",
      },
      height: {
        "3px": "3px",
      },
      transitionProperty: {
        width: "width",
      },
      backgroundColor: {
        "pink-500": "#ff3c78",
      },
    },
  },
  variants: {
    extend: {
      width: ["after"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".a-after": {
            position: "absolute",
            content: '""',
            height: "3px",
            width: "0",
            left: "0",
            bottom: "-2.5rem",
            backgroundColor: "#ff3c78",
            transitionProperty: "width",
            transitionDuration: "300ms",
          },
        },
        ["before", "after"]
      );
    },
  ],
};
