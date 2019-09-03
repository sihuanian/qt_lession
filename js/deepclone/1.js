// 简单类型的拷贝是拷贝值
let a = 1 
let b = a

b = 2
console.log(a)
// 复杂数据类型，拷贝是引用式赋值
let obj = {
  a: 1,
  b: function() {
    console.log('bbbbb')
  }
}
// 返回新对象
let obj2 = JSON.parse(JSON.stringify(obj)) // 深拷贝
obj2.a = 2
console.log(obj2) // 创业公司