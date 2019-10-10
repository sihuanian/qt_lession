-vuex 数据流
组件 + 共享数据
1. 共享一个状态
- this.$store
  Vue.use(Vuex) Vue.$store
- this.$store.state
```javascript
new Vue({
  store
})
store = new Vuex.Store({
  state,
  mutaticons,
  actions,
  getters
})
```
myVuex Vue.use()
new myVuex.store({
  state,
  mutaticons,
  actions,
  getters
})

- es6的模块化机制
  export default xxx
  index.js

- class 中的 get 方法
  Store是一个类，四大家族是它的属性
  this.$store 对Vue.prototype扩展后，所有的组件都可以调用 
  Vue 钩子函数，beforeCreated
  除了它该做的，再做下vuex的初始化
  Vue.mixin({beforeCreated: })

- 让唯一的store 对象state 是它的一个属性
  beforeCreated() {} vue再多做一些事情 this.$store = ...
  this Vue单例 根组件
  beforeCreated 之前的beforeCreated 之前的代码也要运行， Vue.mixin({
    beforedCreated: vuexInit
  })

  通过源码认识到所有组件都可以访问$store 是因为它已经为vue 的单例加入了这个属性
  每个组件的this -> 本组件 prototype -> vue单例


- this.$store.getters.xxx
  跟state 不一样的地方 是方法
  会返回根据state的新的值
  ```javascript
  Object.defineProperty(this.$store.getters, xxx, {
    get() {
      数据劫持
      1. return store.options.getters[xxx]
      2. return getterFn(store.state)
    }
  })
  ```

  definePrpperty() 是一个个属性定义
  [key, fn]
  forEachVal()
  registerGetter(this, key, fn)