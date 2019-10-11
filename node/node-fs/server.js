const http = require('http')
const fs = require('fs')

http.createServer().on('request', (req, res) => {
  let url = req.url
  if (url === '/') {
    fs.readFile('./resource/index.html', (err, data) => {
      if (err) {
        res.setHeader('Conten-Type','text/plain;charset=utf-8')
        res.end('你要的资源不存在，请稍后再试!')
      } else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(data)
      }
    })
  } else if (url === '/img') {
    fs.readFile('./resource/hy.jpg', (err, data) => {
      if (err) {
        res.setHeader('Conten-Type','text/plain;charset=utf-8')
        res.end('你要的资源不存在，请稍后再试!')
      } else {
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  }
}).listen(3000, () => {
  console.log('running in port 3000')
})