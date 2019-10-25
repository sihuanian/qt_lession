const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const serve = require('koa-static')

const app = new Koa()

app.use(bodyParser())
// 设置公开目录
app.use(serve(path.join(__dirname, './static/')))
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
router.get('/', async (ctx) => {
  const query = ctx.query
  const { xss } = query
  ctx.set('X-XSS-Protection', 0) // 关闭浏览器xss防护
  await ctx.render('xss', { // koa-views渲染页面
    xss
  })
})

router.get('/commentall', async ctx => {
  await ctx.render('comment')
})

const cache = {}

router.get('/comment', async ctx => {
  const query = ctx.query
  const { comment } = query
  function html_encode(s) {
    s = s.replace(/</g, '&lt;')
    s = s.replace(/>/g, '&gt;')
    return s
  }
  cache.v = html_encode(comment) // 将评论内容保存
  ctx.body = {
    code: 123
  }
})

router.get('/getcomment', async ctx => {
  ctx.body = {
    comment: cache.v // 获取评论内容
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log('server is running 8080')
})
