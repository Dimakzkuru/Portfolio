/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Correctly set up dark mode
  theme: {
    extend: {
      width: ["hover", "after"],
      1.5: "3px",
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
            backgroundColor: "#80ff80",
            transition: "width 0.3s",
          },
          ".link-active:after": {
            width: "100%",
          },
        },
        ["hover", "focus", "active"] // Updated variants
      );
    },
  ],
};
