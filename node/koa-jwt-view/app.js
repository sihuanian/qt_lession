// nuxt.js vue ssr    next: react ssr    nest: node 基于 express的开发框架
const path = require('path')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaView = require('koa-views')
const bodyParser = require('koa-bodyparser')
const jwt = require('jsonwebtoken')


const app = new Koa()

const router = KoaRouter()

app.use(bodyParser())
// views 模版引擎
// 视图的目录
app.use(KoaView(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
router.get('/', async ctx => {
  // ctx.body = 'html'
  const userInfo ={ userName: 123, sex: 0, hobbies: ['唱', '跳', 'rap'] }
  // ctx.render() 第一个参数是加载的模版， 第二个参数是一个用来替换的数据对象
  // 服务端渲染
  // spa + 服务端渲染 同构
  await ctx.render('index.ejs', userInfo) // koa-view 丰富的render方法
})

router.get('/login', async ctx => {
  await ctx.render('login')
})

router.post('/login', async ctx => {
  const data = ctx.request.body
  console.log('data', data)
  if (data.name === '123' && data.pwd === '456') {
    // 生成token
    // 保持用户登录状态 每次请求我都把 uid 传{ uid: 000}
    // JWT 解决了传递的数据加密的功能
    // 加密算法  payload(数据，时间) 签名
    const token = jwt.sign({ uid: 000 }, 'secret', {
      expiresIn: 60
    })
    ctx.body = {
      code: 200,
      token
    }
    // return {
    //   code: 200,
    //   token
    // }
  } else {
    ctx.body = '用户名或密码错误'
  }
})

router.get('/401', async (ctx) => {
  await ctx.render('401')
})

router.get('/userInfo', async (ctx, next) => {
  // 同步验证
  const auth = ctx.request.headers['authorization']
  console.log('dsfjsldfj', ctx.request.headers)
  const token = auth.split(' ')[1]
  try {
		//解码取出之前存在payload的user_id 和 name
    const payload = jwt.verify(token, 'secret')
    console.log('payload———', payload)
		ctx.user_id = payload.id
		await next()
	} catch (err) {
    ctx.body = {
      code: 300
    }
	}
}, async (ctx) => {
  ctx.body = {
    code: 200,
    name: 123,
    id: 1
  }
})

router.get('/userCenter', async ctx => {
  await ctx.render('userInfo.ejs')
})

app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log('running in port 3000')
})
