const Koa = require('koa')
const student = new Koa()
// const manage = new Koa()

// 中间件 => use() 中的函数
// 用户 request -> middleware1 middleware2 -> response
student.use(async (ctx, next) => {
  // next表示下一个中间件
  // http://localhost:3000/a?a=1&b=2
  console.log(ctx.path, ctx.query)
  ctx.body = 'hello koa!'
  await next()
  console.log('middleware1')
})
student.use(async (ctx, next) => {
  await next()
  console.log('middleware2')
})
student.use(async (ctx, next) => {
  console.log('middleware3')
})

student.listen(3000, () => {
  console.log('running in port 3000')
})
