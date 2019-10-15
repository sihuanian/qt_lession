var { counter, obj, changeValue } = require('./node-common')

console.log(counter, obj, changeValue)
changeValue()
console.log(counter, obj, changeValue)

// commonjs require 的时候类比基本数据类型和复杂数据类型的赋值