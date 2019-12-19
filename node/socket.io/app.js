const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    res.writeHead(200, { "Content-Type": "text/html" })
    const myReadStream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')
    myReadStream.pipe(res)
  }
})

const io = require('socket.io')(server)
io.on('connection', socket => {
  console.info('一个socket连接成功了')
  socket.on('link_to_server', msg => {
    // console.log(msg)
    io.emit('link_to_client', msg)
  })
})

server.listen(3000, () => {
  console.log('running in http://localhost:3000')
})