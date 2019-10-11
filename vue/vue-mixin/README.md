## mixin 混入
  将不同的组件公共的逻辑抽离出来放到mixin 中
  使用： mixins: [visiable]
tips：
1. 使用mixin的不同组件数据不会相互影响

缺点： 
```javascript
// mixin
methods: {
  open (){},
  close (){}
}
```

组件里面存在同名的方法