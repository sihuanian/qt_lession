const proto = {

}

// 参数分别是代理的对象和对象上的属性
function defineGetter (prop, name) {
  // 每个对象都有__defineGetter___方法， 用这个方法实现代理
  proto.__defineGetter__(name, function() {
    return this[prop][name] // this --> ctx 所以ctx.url 得到的就是this.request.url
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')

module.exports = proto