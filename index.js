const foregroundColor = '#fafafa'
const backgroundColor = 'hsla(0, 0%, 0%, 0.25)'
const red = '#ff4c6a'
const yellow = '#ffe14c'
const green = '#4cff88'
const cyan = '#4cffe1'
const blue = '#4cc3ff'
const magenta = '#ff4cc3'
const gray = '#bfbfbf'

exports.decorateConfig = (config) => Object.assign({}, config, {
  fontSize: 16,
  cursorColor: foregroundColor,
  cursorShape: 'BEAM',
  backgroundColor,
  foregroundColor,
  colors: {
    black: backgroundColor,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white: foregroundColor,
    lightBlack: gray,
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: foregroundColor
  }
})
