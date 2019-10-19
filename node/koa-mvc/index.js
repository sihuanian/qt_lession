const Koa = require('koa')
const KoaBodyParser = require('koa-bodyparser')
const router = require('./router/index') // 与请求相关分离出router

const app = new Koa()

// ctx.request.body
app.use(KoaBodyParser())
// 解决跨域问题
app.use(async (ctx, next) => {
  // cors
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type')
  // 允许 是否发送 cookie ...凭证
  ctx.set('Access-Control-Allow-Credentials', true)
  // ctx.body = '123456'
  await next()
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('running in port http://localhost:3000')
})