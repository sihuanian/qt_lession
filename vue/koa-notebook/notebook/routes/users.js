const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async (ctx, next) => {
  await userService.getAllUsers().then(res => {
    console.log('打印结果： ' + JSON.stringify(res))
    ctx.body = res
  })
})

// 用户注册请求
router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname  = ctx.request.body.nickname
  // 验证输入是否合法
  if (!_username && !_userpwd && !_nickname) {
    ctx.body = {
      code: 800001,
      mess: '用户名、密码、昵称不能为空'
    }
    return
  }
  let user = {
    username: _username,
    userpwd: _userpwd,
    nickname: _nickname
  }
  // 查询是否已经存在用户
  await userService.findUser(user.username).then(async res => {
    if (res.length) {
      try {
        throw new Error('用户名已存在')
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: 80003,
        data: 'error',
        mess: '用户名已经存在'
      }
    } else {
      // 插入用户数据到数据库中
      await userService.insertUser([user.username, user.userpwd, user.nickname])
        .then(res => {
          let r = ''
          if (res.affectedRows !== 0) {
            r = 'OK'
            ctx.body = {
              code: 80000,
              data: r,
              mess: '注册成功'
            }
          } else {
            r = 'error'
            ctx.body = {
              code: 80004,
              data: r,
              mess: '注册失败'
            }
          }
        })
    }
  })
})

module.exports = router
