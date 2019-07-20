// console.log('鸭子模型')
// 服务器 一直给用户提供服务

const http = require('http') // http协议

const server = http.createServer((req, res) => {
    res.end('hello nodejs!')
})

server.listen(3000, function() {
    console.log('3000 running....')
})

