// live-server
// index.html http 访问支持 web server
const http = require('http')
const fs = require('fs')

const index = fs.createReadStream('./index.html')

// web server 一直伺服的 3000
// 向request 返回 response 资源
const server = http.createServer((req, res) => {
   // res.end('hello world!')
   // req 浏览器 访问网站的代理
    if (req.url == '/') {
        // res.end('index page')
        index.pipe(res)
    } else if (req.url =='/userinfo') {
        const info = {
            "name": "kobe",
            "gender": "男"
        }
        res.writeHead(200, {'Content-Type' : 'text/plain;charset=utf8'})
        res.end(JSON.stringify(info))
    }
    else {
        res.end('hello world!')
    }
})

server.listen(3000,function() {
    console.log('running in 3000')
})