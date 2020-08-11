module.exports = {
  theme: {
    extend: {
      colors: {
        emerald: "#01D277",
        "rich-black-forga": "#081c24",
        "tart-orange": "#f44336",
        "mikado-orange": "#ffc107",
        "shadow-blue": "#788aa3",
        "mat-blue-gray": {
          "50": "#ECEFF1",
          "100": "#CFD8DC",
          "200": "#B0BEC5",
          "300": "#90A4AE",
          "400": "#78909C",
          "500": "#607D8B",
          "600": "#546E7A",
          "700": "#455A64",
          "800": "#37474F",
          "900": "#263238",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
