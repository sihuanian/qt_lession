- 看页面，再写vuex
  focus 数据流设计
- modules
  宏观设计一个项目
  模块 对应于 vuex 中的一个数据单元设计 四大家族
  Store 单一状态树
  树
  export default new Vuex.Store({
    // 小型项目不要用vuex,很复杂，就用组件传值 props + emit 
    // 大型项目？ vuex + modules
  })

  this.$store.products.items
  this.$store.cart.items
  namespaced: true

前后端分离
- 传统vue
mounted()
  axios /api/products/:1
  this.products = 

- vuex
products 数据不在vuex 里， []
组件中 mounted() {}
  actions
  axios  /api/products/:1
  mutations
  products.all