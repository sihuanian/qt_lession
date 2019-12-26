const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  })
  res.end(fs.readFileSync(__dirname + '/index.html', 'utf8'))
}).listen(3000, () => {
  console.log('running in http://localhost:3000')
})
