// 处理注册请求

const userModel = require('../model/user-info')

const register = async (ctx) => {
  // register?user=123&password=123
  console.log('注册')
  const user = ctx.query // get请求的参数对象{ name: '', password: ''}
  console.log(user)
  // 插入数据库,密码通过md5加密
  let insertRes = await userModel.insertData(user) // 与数据库的交互是异步的
  console.log('插入数据库的结果', insertRes)
  ctx.body = insertRes
}

module.exports = register