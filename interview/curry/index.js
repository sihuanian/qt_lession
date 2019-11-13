function add(a, b) {
  return a + b
}


// var curry = function (fn) {
//   let args = [].slice.call(arguments, 1)
//   return function () {
//     var newArgs = args.concat([].slice.call(arguments)) // 这个arguments与上面的不同
//     return fn.apply(this, newArgs)
//   }
// }
// var addCurry = curry(add, 1)
// console.log(addCurry(2))


// function sub_curry(fn) {
//   var args = [].slice.call(arguments, 1)
//   return function () {
//     return fn.apply(this, args.concat([].slice.call(arguments)))
//   }
// }
// let n = 0
// function curry(fn, length) {
//   length = length || fn.length
//   var slice = Array.prototype.slice
//   return function () {
//     n++
//     console.log(n, arguments)
//     if (arguments.length < length) {
//       var combined = [fn].concat(slice.call(arguments))
//       return curry(sub_curry.apply(this, combined), length - arguments.length)
//     } else {
//       return fn.apply(this, arguments)
//     }
//   }
// }

// var fn = curry(function (a, b, c) {
//   return [a, b, c]
// })
// // console.log(fn('a', 'b', 'c'))
// // console.log(fn('a', 'b')('c'))
// console.log(fn('a')('b')('c'))

function sub_curry(fn) {
  return function () {
    return fn()
  }
}
function curry(fn, length) {
  length = length || 4
  return function () {
    if (length > 1) {
      return curry(sub_curry(fn), --length)
    } else {
      return fn()
    }
  }
}
var fn = curry(function (a,b,c) {
  return [a, b, c]
})
console.log(fn('a')('b')('c'))