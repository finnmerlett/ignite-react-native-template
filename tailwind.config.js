const { color } = require("./app/theme/color")
const { spacing } = require("./app/theme/spacing")

module.exports = {
  content: ["./app/**/*.{js,ts,tsx}"],
  theme: {
    colors: color,
    extend: {
      spacing,
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
}
