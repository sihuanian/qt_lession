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

app.use((ctx, next) => {
  // console.log(ctx.req.url)
  // console.log('url', ctx.request.req.url)
  // console.log('url', ctx.response.req.url)
  // console.log('url', ctx.request.url)
  // console.log('path', ctx.request.path)
  // console.log('url', ctx.url)
  // console.log('path', ctx.path)
  // res.end('hello world')
  ctx.body = 'hello world'
  console.log('body', ctx.body)
  next()
})

// ----------
app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})
app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})
app.use((ctx, next) => {
  console.log(5)
  next()
  console.log(6)
})
// ----------

app.listen(3000, () => {
  console.log('running in http://localhost:3000') 
})
