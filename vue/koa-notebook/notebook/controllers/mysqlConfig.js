const mysql = require('mysql')
const config = require('./defalutConfig')

// 创建连接池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 统一连接数据库的方法
let allServies = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release() // 释放连接
          })
        }
      })
    })
  }
}

// 读取所有user 表中的数据，测试数据连接
let getAllUsers = function () {
  let _sql = 'select * from users'
  return allServies.query(_sql)
}

module.exports = {
  getAllUsers
}