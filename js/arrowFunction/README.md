## 箭头函数
1. 箭头函数不支持重名形参，普通函数可以
2. 箭头函数没有this 箭头函数定义时 this指向所处上下文 apply call不能改变箭头函数的this

## 类数组
1. length
2. 索引获取值
eg: arguments 

类数组 => 数组
1. Array.prototype.slice.call()
2. Array.from()