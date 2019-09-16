当表达式三层(a.b.c)的时候就有问题：比如a开始为空，a.b:的结果为undefined, a.b.c你再取的时候就会报错了
> let a = '' console.log(a.b) // undefined  console.log(a.b.c) // TypeError

{{seller.supports[0].description}}
会报如上错误

原因: seller是 App.vue异步获取的,报错是因为页面渲染时会首先在data 数据源中找 seller,但是这个时候 seller不存在,当请求完成时, seller才存在.

安装butter-scrool
> npm install better-scroll --save 

官方文档： http://ustbhuangyi.github.io/better-scroll/doc/options.html


- 组件拆分原则
1. 有自己的独立特性
2. 复用性高


1. 子组件： $emit(funcName, params)
2. 父组件：子组件中　@click="funcName"

- 父组件调用子组件的方法
  1. 在父组件的html 使用子组件的DOM 结构中加入ref
  2. 调用子组件中的方法
  > <ShopCart ref="shopcart" 
  > this.$refs.shopcart.drop(target)