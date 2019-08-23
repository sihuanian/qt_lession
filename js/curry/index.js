const curry = require('./b')

// 普世
function checkByRegExp(reg, str) {
  return reg.test(str)
}

function sum(a, b) {
  return a + b
}

// function checkByRegExp(reg) {
//   return function(str) {
//     return reg.test(str)
//   }
// }

let s = curry(sum)
console.log(s(1)(2))
let checkCellPhone = curry(checkByRegExp)
console.log(checkCellPhone(/^1[3-9]\d{9}$/)('13666666666'), '#############')
let checkEmail = curry(checkByRegExp)
console.log(checkEmail(/^\w+@[a-z0-9]+\.[a-z]{2,4}$/)('111@test.com'), '++++++++++++')

console.log(checkByRegExp(/^1[3-9]\d{9}$/, '13888888888'))
console.log(checkByRegExp(/^\w+@[a-z0-9]+\.[a-z]{2,4}$/, '121212121@qq.com'))