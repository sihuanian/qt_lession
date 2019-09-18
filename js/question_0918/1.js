/**
 * freeze 只能冻结一层
 * 可以冻结数组
 */
const box = {
  a: 10,
  b: { c: 100}
}
// Object.freeze(box)
// box.a = 100
// box.b.c = 0
const box1 = box
console.log(box)

const arr = [0, 1, 2]
Object.freeze(arr)
arr[0] += 100
console.log(arr)
console.log('2-------------------')
// 2.
const {name: myName} = { name: 'lihua' }
// console.log(name)
console.log('3-------------------')

// 3.
const add = () => {
  const cache = {}
  return num => {
    if (num in cache) {
      return `from cache ${num}`
    } else {
      const r = num + 10
      cache[num] = r
      return `calcul ${r}`
    }
  }
}

const addFunc = add()
console.log(addFunc(10)) // calcul 20
console.log(addFunc(10)) // from cache 10
console.log(addFunc(2 * 5)) // from cache 10

console.log('4-------------------')

// 4.
const arr4 = ['lihua', 'lilei']
// 枚举一个对象里面的属性 arr4[0]
// {'0': 'lihua', '1': 'lilei'}
for (const item1 in arr4) {
  console.log(item1) // 0 1
}
// 数组 map set 类数组 String arguments (含有iterator的可迭代对象)
for (const item2 of arr4) {
  console.log(item2) // lihua  lilei
}

console.log('5-------------------')
// 5. 
var status = 'global'
var obj = {
  status: 'obj',
  getStatus () {
    return this.status
  }
}
console.log(obj.getStatus()) // 'obj'
var fun = obj.getStatus
console.log(fun()) // 'global'

// 6.
// class 只是一个语法糖，背后还是es5
console.log('6-------------------')
class Foo {

}
console.log(typeof Foo)


// 7. es6新增的数据类型
// string boolean null undefined object symbol number
// 给对象添加属性不会覆盖之前的属性
console.log('7-------------------')
let a = Symbol('a')
let b = Symbol('a')
var obj7 = {
  [a]: 'a value',
  b: 'b value',
  b: '123'
}
console.log(a === b)
console.log(Object.keys(obj7)) // 返回一个对象上面可枚举的属性
console.log(Object.getOwnPropertySymbols(obj7)) // 获取对象上的symbol属性
console.log(a in obj7)
console.log(obj7.hasOwnProperty(a))