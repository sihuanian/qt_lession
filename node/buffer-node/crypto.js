const cropto = require('crypto') // 加密模块
 
// sha256  md5
let abc = 'helloworld'
const sign = cropto.createHmac('sha256', 'abc').update(abc).digest('base64')
console.log(sign)