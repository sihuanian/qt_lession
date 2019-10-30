// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('hello world!')
// })

// server.listen(3000, () => {
//   console.log('running in http://localhost:3000')
// })


// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello world'
// })

// app.listen(3000, () => {
//   console.log('running in http://localhost:3000')
// })

const Koa = require('./lib/application')

const app = new Koa()

app.use((ctx) => {
  console.log(ctx.req.url)
  console.log('url', ctx.request.req.url)
  console.log('url', ctx.response.req.url)
  console.log('url', ctx.request.url)
  console.log('path', ctx.request.path)
  console.log('url', ctx.url)
  console.log('path', ctx.path)
  // res.end('hello world')
})

app.listen(3000, () => {
  console.log('running in http://localhost:3000') 
})