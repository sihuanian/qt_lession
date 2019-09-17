## 组件间通信

1. 父组件向子组件传值 props中的数据不能被修改
  - 使用 `v-bind="test"` 向子组件传值相当于解构了一层

2. 子组件向父组件传值
  1. this.$bus.$emit('funcName', params)
  2. created: this.$bus.$on('funcName', (arg) => {console.log(arg)})
  3. 使用了$on，要在beforeDestory() 生命周期中销毁监听 this.$bus.$off('funcName')

$attrs：包含了**父作用域中** **不被 prop 所识别** (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 inheritAttrs 选项一起使用。

$listeners：包含了**父作用域中**的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件
