const http = require('http')

const app = http.createServer((req, res) => {
  if (req.url === '/api/books') {
    let list = [
      {book: 'book1'},
      {book: 'book2'}
    ]
    res.end(`getBook(${JSON.stringify(list)})`) // 这是调用getBook函数
  }
})

app.listen(3000, () => {
  console.log('running in port 3000')
})