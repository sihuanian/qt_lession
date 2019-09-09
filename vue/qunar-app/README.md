## 学到什么

1. 移动端 click 事件延迟
  1. 原因：移动端双击事件
  2. fastClick
2. vue 项目搭建
3. 组件划分


## webpack

打包成一个文件
scss  不认识

- 解决方式
```javascript
// webpack.base.conf.js module: rules
{
  test: /\.scss$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'sass-loader'
  ]
}
```
> npm i sass-loader@7.3.1 node-sass -D