let dog1 = { name: 'Snickers' }
let dog2 = { name: 'Sunny' }

const strong = new Map() // 强映射
const weak = new WeakMap() // 弱映射

// key 可以是 Object
strong.set(dog1, 'Snickers is thie best!')
weak.set(dog2, 'Sunny is the 2nd best!')

for (const [key, val] of strong) {
  console.log('释放前')
  console.log(key, val)
}

console.log(weak.get(dog2))
dog1 = null // 垃圾回收 对象
dog2 = null

for (const [key, val] of strong) {
  console.log('释放后')
  console.log(key, val)
}
console.log(weak.get(dog2))

/*
strong 使用了dog1 作为键值，这个键值相当于是深拷贝过来的，dog1被释放后依然可以遍历这个map
weak 使用了dog2 作为键值，这个dog2 被内存释放后，不可以遍历weak
*/