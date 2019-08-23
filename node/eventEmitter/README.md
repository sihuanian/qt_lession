## 订阅发布好处

解耦


## 坏处


## API

1. ev.on('', callback) 订阅事件
2. ev.emit('') 发布事件
3. ev.once('') 与on 一样，但只会触发一次
4. ev.removeListener('', callback) 取消订阅