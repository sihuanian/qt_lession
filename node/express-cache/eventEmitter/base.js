const Event = require('events')
const ev = new Event()

function price1() {
  console.log('大米涨价了')
}

function price2(thing) {
  console.log(`${thing}涨价了`)
}
// 订阅者
ev.on('price', price1)
ev.on('price', price2)
// 发布者
ev.emit('price', '大蒜')
// 移除price 的订阅
ev.removeListener('price', price1)
ev.emit('price', '大蒜')

// once 最多调用一次监听器
ev.once('eat', () => {
  console.log('eate1')
})
ev.once('eat', () => {
  console.log('eate2')
})
ev.emit('eat')
ev.emit('eat')
ev.emit('eat')

// 大米涨价了
// 大蒜涨价了
// 大蒜涨价了
// eate1
// eate2