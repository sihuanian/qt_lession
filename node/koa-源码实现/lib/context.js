const proto = {

}

// 参数分别是代理的对象和对象上的属性
function defineGetter (prop, name) {
  // 每个对象都有__defineGetter___方法， 用这个方法实现代理
  proto.__defineGetter__(name, function() {
    return this[prop][name] // this --> ctx 所以ctx.url 得到的就是this.request.url
  })
}

// 将ctx.request.body = {...} ==> ctx.body = {...}
function defineSetter(prop, name) {
  proto.__defineSetter__(name, function(val) {
    this[prop][name] = val
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body') // ctx.body 代理response 的body属性
defineSetter('response', 'body')

module.exports = proto
