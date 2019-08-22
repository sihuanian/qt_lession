- 单例模式， 是设计模式的最基本的模式
不管new 多少次，永远返回同一个对象
instance

- 立即执行函数 + 闭包
  instance 全局？ 

```javascript
  var instance = null // 污染命名空间
  function Singleton() {
    if (instance) {
      return instance
    }
    return instance = this // 创建出来
  }  
```

```javascript
  const Singleton = (function() {
    let instance = null // 闭包区域
    return function() {
      console.log('new')
      if (instance) {
        return instance
      } 
      return instance = this
    }
  })()
```

立即执行函数返回函数，是构成闭包的常用手段
生产环境 立即执行函数  创造闭包环境 变量常驻内存
闭包函数在运行时，可以引用到生成时闭包环境中的上下文（变量）