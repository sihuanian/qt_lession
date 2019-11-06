const http = require('http')
const { fork } = require('child_process')
const httpServer = http.createServer((req, res) => {
  if (req.url === '/computer') {
    const childComputer = fork('./forkComputer.js')
    childComputer.send('open')
    childComputer.on('message', sum => {
      console.log(sum)
      res.end(sum.toString())
    })
    console.log(1)
    console.log(2)
  } else {
     res.end('ok')
  }
})
httpServer.listen(3333, () => {
   console.log('server is running 3333')
})
