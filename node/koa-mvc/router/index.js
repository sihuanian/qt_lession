// 处理请求

const KoaRouter = require('koa-router')
const registerController = require('../controller/register') // 请求的处理函数分离到controller 层
const loginController = require('../controller/login')

const router = new KoaRouter()
router.prefix('/api/v1') // 请求路径的前辍

router.get('/any', async (ctx) => {
  ctx.body = '123456'
})
router.post('/login', loginController)
router.get('/register', registerController)

module.exports = router