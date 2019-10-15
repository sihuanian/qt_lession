## AMD 异步模块加载
异步模块化加载方案
代表作： require.js
define 定义
require 引入

## CMD 公共模块加载
代表作： Sea.js 玉伯

## 区别
AMD 会提升所有的require，只要依赖了模块就会加载
CMD 按照代码顺序

## 共同
都能异步加载

## UMD 通用模块加载
AMD + Common.js

1. commonjs的模块化机制类似于基本数据类型和复杂数据类型的赋值
2. export import 是引用地址

