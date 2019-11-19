(function () {
  var o = { a: 1 }
  Object.defineProperty(o, 'b', {
    get () {
      return this.a
    },
    set (val) {
      this.a = val
    },
    configurable: true
  })
  console.log(o.b)
})()