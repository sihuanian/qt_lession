// Object.assign
if (typeof Object.assign2 !== 'function') {
  Object.defineProperty(Object, 'assign2', {
    value: function (target) {
      'use strict'
      if (target === null || target === undefined) {
        throw new TypeError('Can not conver undefined or null to object')
      }
      var to = Object(target)
      console.log(arguments)
      for (let index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]
        console.log('nextSource', nextSource)
        if (nextSource !== null) {
          for (let nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    },
    writable: true,
    configurable: true
  })
}

let a = {
  name: 'ddad',
  age: 18
}
let b = {
  name: 'www',
  book: {
    title: 'you do not know js',
    price: '45'
  }
}

let c = Object.assign2(a, b)
console.log(c)