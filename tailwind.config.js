/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      inset: {
        "-10": "-10px",
      },
      spacing: {
        "70vw": "70vw",
      },
      minWidth: {
        600: "600px",
      },
      transitionProperty: {
        width: "width",
      },
      backgroundColor: {
        "pink-500": "#ff3c78",
        dark: "#0a0a0a",
        "gray-500": "#a0a0a0",
        white: "#ffffff",
      },
      colors: {
        dark: "#0a0a0a",
        "gray-500": "#a0a0a0",
        white: "#ffffff",
        red: "#FB5936",
        primary: "var(--primary-color)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)", scale: "0.7" },
          "100%": { opacity: "1", transform: "translateX(0)", scale: "1" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(20px)", scale: "0.7" },
          "100%": { opacity: "1", transform: "translateX(0)", scale: "1" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeRight: "fadeRight 1s",
        fadeLeft: "fadeLeft 1.5s",
        fadeDown: "fadeDown 1s",
      },
    },
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
        },
        ["before", "after", "hover"]
      );
    },
  ],
};
