const d = Symbol('d')
let obj = {
  a: 'aaa',
  b: 'bbb',
  c: 'ccc',
  [d]: 'ddd'
}

Object.defineProperty(obj, 'e', {
  value: 'eee',
  enumerable: true
})

for (const key in obj) {
  console.log(key)
}

const keys = Object.keys(obj)
console.log(keys)

let descripter = Object.getOwnPropertyDescriptor(obj, 'a')
let symbolPro = Object.getOwnPropertySymbols(obj)
let isExist = obj.hasOwnProperty(d)
console.log(descripter)
console.log(symbolPro)
console.log(isExist)
console.log(Object.values(obj))
console.log(Object.entries(obj))