/* let a = 'sihuanian'
let b = a
console.log(b)

a = '思华年'
console.log(a)
console.log(b) */

/* let a = {
  name: 'sihuanian',
  book: {
    title: 'You don not know js',
    price: '45'
  }
}

let b = a
// console.log(b)

a.name = '思华年'
a.book.price = '55'
console.log(a)
console.log(b) */

/* let a = {
  name: 'sihuanian',
  book: {
    title: 'You don not know js',
    price: '45'
  }
}

// let b = Object.assign({}, a) // Object.assign 中基础数据数据是深拷贝，引用类型是浅拷贝
let b = {...a} // 与Object.assign 相似
// console.log(b)
a.name = '思华年'
a.book.price = '55'
console.log(a)
console.log(b)
// console.log(a.book === b.book) */

let a = [0, '1', [2, 3]]
let b = a.slice(1)
a[1] = '22'
a[2][0] = 4
console.log(a)
console.log(b)