// 处理登录请求

const md5 = require('md5')
const userModel = require('../model/user-info')

module.exports = async (ctx) => {
  const { name, password } = ctx.request.body // koa-bodyparser 获取post 请求体
  const userInfo = await userModel.queryByName(name) // [{}]
  // 查询到数据
  if (userInfo.length > 0) {
    // 数据库中的密码与输入密码匹配
    if (md5(password) === userInfo[0]['password']) {
      ctx.body = {
        code: 0,
        id: userInfo[0]['id'],
        name: userInfo[0]['name']
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '密码错误'
      }
    }
  } else {
    ctx.body = {
      code: 500,
      msg: '不存在该用户'
    }
  }
}