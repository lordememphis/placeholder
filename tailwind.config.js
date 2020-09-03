module.exports = {
  theme: {
    customForms: (theme) => ({
      default: {
        input: {
          borderWidth: theme("borderWidth.2"),
          borderColor: theme("colors.shadow-blue"),
          borderRadius: theme("borderRadius.md"),
          backgroundColor: theme("colors.white"),
          marginTop: theme("spacing.1"),
          width: theme("width.full"),
          "&:focus": {
            borderColor: theme("colors.rich-black-forga"),
            boxShadow: theme("boxShadow.none"),
          },
        },
        select: {
          borderRadius: theme("borderRadius.lg"),
          boxShadow: theme("boxShadow.default"),
        },
        checkbox: {
          width: theme("spacing.5"),
          height: theme("spacing.5"),
          borderWidth: theme("borderWidth.2"),
          borderColor: theme("colors.shadow-blue"),
          borderRadius: theme("borderRadius.default"),
          backgroundColor: theme("colors.white"),
          marginTop: theme("spacing.1"),
          "&:focus": {
            borderColor: theme("colors.rich-black-forga"),
            boxShadow: theme("boxShadow.none"),
          },
        },
        radio: {
          width: theme("spacing.5"),
          height: theme("spacing.5"),
          borderWidth: theme("borderWidth.2"),
          borderColor: theme("colors.shadow-blue"),
          backgroundColor: theme("colors.white"),
          marginTop: theme("spacing.1"),
          "&:focus": {
            borderColor: theme("colors.rich-black-forga"),
            boxShadow: theme("boxShadow.none"),
          },
        },
        textarea: {
          borderWidth: theme("borderWidth.2"),
          borderColor: theme("colors.shadow-blue"),
          borderRadius: theme("borderRadius.md"),
          backgroundColor: theme("colors.white"),
          marginTop: theme("spacing.1"),
          width: theme("width.full"),
          "&:focus": {
            borderColor: theme("colors.rich-black-forga"),
            boxShadow: theme("boxShadow.none"),
          },
        },
      },
    }),
    extend: {
      boxShadow: {
        focus: "0 0 0 3px rgba(8, 28, 36, .75)",
      },
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
      spacing: {
        "10vh": "10vh",
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
  plugins: [require("@tailwindcss/custom-forms")],
};
