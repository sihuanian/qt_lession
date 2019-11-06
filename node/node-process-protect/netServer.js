const net = require('net')
const http = require('http')

const httpServer = http.createServer((req, res) => {
  res.end('I am from http')
  throw new Error('server error')
})
const server = net.createServer()
server.on('connection', socket => {
  // socket.on('data', data => {
  //   console.log('server rec: ', data)
  //   socket.write('hi')
  // })
  httpServer.emit('connection', socket)
})

server.listen(8181, '127.0.0.1', () => {
  console.log('server is running')
})