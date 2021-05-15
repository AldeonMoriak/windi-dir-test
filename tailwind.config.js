const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')
const tailwindDir = require('tailwindcss-dir')

module.exports = {
  plugins: [typography, tailwindDir],
  purge: {
    preserveHtmlElements: true,
  }
}
