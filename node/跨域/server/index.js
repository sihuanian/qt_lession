const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()
app.use(KoaStatic(path.join(__dirname, 'static'))) // 将static文件夹公开


const router = new KoaRouter()

// 中间件，处理预检请求
app.use(async (ctx, next) => {
  // 允许跨域
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  ctx.set('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS')
  ctx.set('Access-Control-Allow-Headers', 'X-custome, Content-Type')
  // 允许是否发送 cookie 凭证
  ctx.set('Access-Control-Allow-Credentials', true) // origin 必须是具体的域名不能是127.0.0.1
  await next()
})
 
router.post('/api/books', (ctx, next) => {
  // ctx.router available
  console.log(ctx.cookies.get('hello'))
  ctx.body = [
    { bookName: 'php 入门到精通' },
    { bookName: 'node 入门到精通' }
  ]
})
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('running in port 3000')
})