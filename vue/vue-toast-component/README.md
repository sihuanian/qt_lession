## 弹出类组件
1. html 结构
  和页面的文体内容同级（与#app同级）


## 页面向对象
编程范式
解决一类问题

定义一个vue 组件 <template> <script> <style>
实际上是一个构造函数

### 1
import Toast from 'path'
<Toast />

### 2
手动拿到 Toast 的构造函数
vue.extend(obj)
生成了一个 Toast 的实例