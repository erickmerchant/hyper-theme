const foregroundColor = '#fafafa'
const backgroundColor = 'hsla(0, 0%, 0%, 0.25)'
const red = '#ff667f'
const yellow = '#ffe566'
const green = '#66ff99'
const cyan = '#66ffe5'
const blue = '#66cbff'
const magenta = '#ff66cc'
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
