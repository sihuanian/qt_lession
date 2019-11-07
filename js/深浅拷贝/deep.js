/* let obj = {
  name: 'sihuanian',
  book: {
    title: 'You do not know js',
    price: '45'
  }
}

let cloneObj = JSON.parse(JSON.stringify(obj))
cloneObj.book = null
console.log(cloneObj)
console.log(obj) */

let arr = [1, 2, 3, [4, 5]]
let cloneArr = JSON.parse(JSON.stringify(arr))
arr[3][0] = 666
console.log(arr)
console.log(cloneArr)

// undefined Symbol RegExp Date ...