function Person(name) {
  this.name = name
}

let p = new Person('sihuanian')
// console.log(p.__proto__ === Person.prototype)
// console.log(Person.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)

function Student(name) {
  this.name = name
  return {name}
}
let s = new Student('sihuanian')
console.log(s)

Array.prototype.age = 21
const arr = [1, 2, 3]

arr.name = 'ass'
for (const key in arr) {
  console.log(key)
}

// for in
// 1. index 是字符串形式
// 2. 遍历顺序可能不是按照实际数组内部顺序进行
// 3. 使用 for in 会遍历数组及原型链上的可枚举属性

// for of
// 1. 遍历的是数组的元素
// 2. 不包括数组原型和索引

let gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
let oArr = [1, 2, 3, 4, 5, 6, 7, 3, 2, 8]

function flat(arr, dep = 0, stack = [] ) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array && dep > 0) {
      flat(arr[i], dep - 1, stack)
    } else {
      stack.push(arr[i])
    }
  }
  return stack
}

let res = flat(gArr, 2)
console.log(res)

function flattenDeep(arr1) {
  return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}