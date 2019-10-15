// typeof export
console.log(exports === module.exports)
var counter = 3
var obj = {
  name: 'sihuanian'
}
function changeValue() {
  counter++
  obj.name = 'kobe'
}
// typeof exports === 'object'
module.exports = {
  counter,
  obj,
  changeValue
}

// module.exports.counter = counter
// exports.counter = counter
// exports = module.exports = {
//   counter
// }