// 与数据库的相关操作

const md5 = require('md5')
const query = require('../util/index.js')

// 注册用户
const insertData = function(val) {
  console.log(val)
  // 数据库 mysql
  let sql = 'insert into user_info(name, password) values (?, ?)'
  // md5 哈希 输出长度固定的，不可逆的，同样的输入，输出相同
  return query(sql, [val.name, md5(val.password)])
}

// 用户登录
const queryByName = async function (name) {
  let sql = 'select * from user_info where name = ?'
  return query(sql, [name])
}


module.exports = { insertData, queryByName }