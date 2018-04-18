const white = '#fafafa'
const black = '#222'
const red = '#ff4c6a'
const yellow = '#ffe14c'
const green = '#4cff88'
const cyan = '#4cffe1'
const blue = '#4cc3ff'
const magenta = '#ff4cc3'
const gray = '#bfbfbf'

exports.decorateConfig = (config) => {
  config.colors = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightBlack: gray,
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: white
  }

  console.log(config)

  return config
}
