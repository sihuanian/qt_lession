// var t
// function foo() {
//   if (t) {
//     return t
//   }
//   t = new Date()
//   return t
// }

// var foo = (function () {
//   var t
//   return function() {
//     if (t) {
//       return t
//     }
//     t = new Date()
//     return t
//   }
// })()

// function foo() {
//   if (foo.t) {
//     return foo.t
//   }
//   foo.t = new Date()
//   return foo.t
// }

var foo = function () {
  var t = new Date()
  foo = function () {
    return t
  }
  return foo()
}

// 惰性函数解决函数中重复的判断

// function addEvent(type, el, fn) {
//   if (window.addEventListener) {
//     el.addEventListener(type, fn, false)
//   } else if (window.attachEvent) {
//     el.attachEvent('on' + type, fn)
//   }
// }

// 惰性函数就是解决每次都要进行判断的这个问题，解决原理很简单，重写函数
function addEvent(type, el, fn) {
  if (window.addEventListener) {
    addEvent = function (type, el, fn) {
      el.addEventListener(type, fn, false)
    }
  } else if (window.attachEvent) {
    addEvent = function (type, el, fn) {
      el.attachEvent(type, fn)
    }
  }
}