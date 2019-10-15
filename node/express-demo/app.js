// const http = require('http')

// const server = http.createServer()

// server.on('request', (req, res) => {
//   res.end('hello world!')
// })

// server.listen(3000, () => {
//   console.log('runnng in port 3000')
// })

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(3000, () => {
  console.log('running in 3000')
})