// Create Phone Number  (123)456-7890
// 编写一个函数，接受一个由10个整数组成的数组，格式如上

/* const createPhoneNumber = arr =>
  '(' + arr.slice(0, 3).join('') + ')' + arr.slice(3, 6).join('') + '-' + arr.slice(6).join('')

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) */

const createPhoneNumber = numbers => {
  let format = '(xxx) xxx-xxxx'

  // let num = numbers.join('')

  // format.replace(format.slice(0, 3), num.slice(0, 3)).replace(format.slice(3, 6), num.slice(3, 6)).replace(format.slice(6), num.slice(6))

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }

  return format
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))