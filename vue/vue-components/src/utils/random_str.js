export default function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $chars.length
  let str = ''
  for (let i = 0; i < len; i++) {
    let randomNum = Number.parseInt(Math.random() * maxPos)
    str += $chars[randomNum]
  }
  return str
}

// function random (len = 32) {
//   const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
//   const maxPos = $chars.length
//   let str = ''
//   for (let i = 0; i < len; i++) {
//     let randomNum = Number.parseInt(Math.random() * maxPos)
//     str += $chars[randomNum]
//   }
//   return str
// }

// console.log(random())