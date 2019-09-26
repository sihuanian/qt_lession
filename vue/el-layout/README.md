##
```vue
<template>
  <div>
    <slot></slot>
    <el-button><el-button>
  </div>
</template>
```

里面的东西都会被编译为
h('div', {}, [])

h 函数的返回
一个对象
{
  详细地描述了该标签(组件div，el-button)上的信息： props, id, class, 子节点...
}
虚拟节点 virtual node
虚拟DOM：  vNode 建立起来的树