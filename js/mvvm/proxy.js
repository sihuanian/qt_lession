// 代理 浏览器也是一种代理
var proxy = new Proxy({}, {
  get (obj, prop) {
    console.log('设置get 操作')
    return obj[prop]
  },
  set (obj, prop, newValue) {
    console.log('设置set 操作')
    obj[prop] = newValue
  }
})

proxy.time = 35
console.log(proxy.time)