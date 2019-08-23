function sum(a, b, c) { // 一次性
  return a + b + c
}

function currySum(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}


let _sum = currySum(1)
let A = _sum(2)
let B = A(3)
console.log(currySum(1)(2)(3))
console.log(B)