// 连接数据库与数据库的相关操作的方法

const mysql = require('mysql')

// 创建连接池
const pool = mysql.createPool({
  user: 'root',
  password: '123456',
  host: '127.0.0.1',
  port: 3306,
  database: 'chat'
})

// 执行sql 语句
const query = function (sql, val) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connect) => {
      if (err) {
        reject(err)
      }
      connect.query(sql, val, (err, rows) => { // mysql 包的sql 操作的方法
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
        connect.release() // 释放connect
      })
    })
  })
}


module.exports = query