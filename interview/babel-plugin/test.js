const babel = require('babel-core') // 3 * 1 + 2 / 1'
const result = babel.transform('const result = 1 + 3 * 2', {
  plugins: [
    require('./index')
  ]
})

console.log(result.code)