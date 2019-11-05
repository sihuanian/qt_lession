// const s = new Set()
// ;[1, 2, 3, 4, 5, 3, 2, 1].forEach(x => s.add(x))
// console.log(s)

// let set = new Set([1, 2, 3, 2, 1])
// console.log(set.size)

// let set = new Set()
// set.add(1).add(2).add(3)
// set.delete(1)
// console.log(set.has(1))

// const item = new Set([1, 2, 3, 2])
// const array = Array.from(item)
// const res = [...item]
// console.log(array, res)

// keys() 包含集合中所有的键的迭代器
// values() 包含集合中所有的值的迭代器
// entries() 包含set对象中所有的键值的迭代器
// forEach(callback, thisArg) 
let set = new Set([1, 2, 3])
const keys = set.keys()
// console.log(keys.next())
// console.log(keys.next())
// console.log(keys.next())
// console.log(keys.next())
// for (const item of set.entries()) {
//   console.log(item)
// }
// set.forEach((key, value) => {
//   console.log(key + ': ' + value)
// })
// for (const item of set.entries()) {
//   console.log(item)
// }

set = new Set([...set].map(item => item * 2))
console.log(...set)
set = new Set([...set].filter(item => item >= 4))
console.log(...set)
