- Vue
  VueRouter 路由
  Vuex 数据流

  ElementUI  PC框架
  MintUI / IVIEW  mobile  移动端

  插件 
  Vue 瘦身 MVVM
  其它的都是它的周边生态
  插件机制往里面加
  Vue.use(plugin)
  plugin 按一定的规定
  this.$route
  Vue.prototype

- ElementUI 有两种引入组件的方式
1. <el-button></el-button>
  > Vue.component(component.name, component)
  > const components = []
  > components.forEach(component => {Vue.component(component.name, component)})
2. this.$message()

- 写一个vue 组件，开源插件 100+
```javascript
{
  install: function () {
    Vue.component(component.name, component)
    Vue.prototype.$message = Message
  }
}
```

Vue.use(plugin)  执行plugin 中的 install