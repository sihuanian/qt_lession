const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const readDir = util.promisify(fs.readdir)
// readFile('./index.js', 'utf8')
//   .then(data => {
//     console.log('util.promiseify() 可以将回调风格的API转变成promise 风格的API')
//     console.log(data)
//   })
// fs.readFile('./index.js', 'utf8', (err, data) => {
//   console.log(data)
// })
fs.readdir('./static/', (err, files) => {
  console.log(files)
})
readDir('./static/').then(res => {
  console.log(res)
}) 

// fs.readFile().then() 