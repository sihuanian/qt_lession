const obj = {
  name: 'sihuanian',
  age: 21
}

const buf = Buffer.from(JSON.stringify(obj))
// console.log(buf)
console.log(buf.toString('base64')) // 编码成base64
// 用a-zA-Z0-9..
const base64 = buf.toString('base64')
const buf1 = Buffer.from(base64, 'base64')
console.log(buf1.toString('utf8'))