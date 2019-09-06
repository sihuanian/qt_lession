const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  const url = req.url
  if (/^\/static\//.test(url)) {
    staticServer(req, res) 
    return false
  }
  /* if (req.url === '/static/demo.jpg') {
    fs.readFile('./static/demo.jpg', 'binary', (err, file) => {
      res.write(file, 'binary')
      res.end()
    })
    return false
  }
  if (req.url === '/static/angel.jpg') {
    fs.readFile('./static/angel.jpg', 'binary', (err, file) => {
      res.write(file, 'binary')
      res.end()
    })
    return false
  } */
  fs.readFile('./index1.html', 'binary', (err, file) => {
    res.write(file, 'binary')
    res.end()
  })
})
  .listen(3000, () => {
    console.log('server is running 3000')
  })

function staticServer(req, res) {
  const url = req.url
  const filePath = path.join(__dirname, url)
  // /static/demo.jpg
  // /static/angel.jpg
  fs.exists(filePath, exists => {
    if (!exists) {
      res.writeHead(404)
      res.end()
      return false
    }
    fs.readFile(filePath, 'binary', (err, file) => {
      res.write(file, 'binary')
      res.end()
    })
  })
}