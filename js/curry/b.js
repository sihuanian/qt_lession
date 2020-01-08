// curry 函数, 返回新函数, 逐渐的消化，
function curry(fn, len = fn.length) {
  console.log(this)
  return _curry.call(this, fn, len)
}

function _curry(fn, len, ...args) {
  // typeof function
  return function (...params) {
    // 自己调用自己 递归
    // 如果没到数量， 返回函数，
    // 到了，执行代码
    // console.log(...args, '======args=====')
    // console.log(...params, '======params=====')
    // console.log(len, '======len=====')
    let _args = [...args, ...params]
    if (_args.length >= len) {
      // console.log(_args, '=====_args======')
      return fn.apply(this, _args)
    } else {
      // console.log(this === global, 'this 是否是 global')
      return _curry.call(this, fn, len, ..._args)
    }
  }
}

// let _fn = curry(function (a, b, c, d, e) {
//   console.log(a, b, c, d, e)
// })
// _fn(1)(2)(3)(4)(5)
// _fn(1)

module.exports = curry