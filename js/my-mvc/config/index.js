module.exports = {
  db: {
    dialect: 'mysql',
    host: 'localhost',
    database: 'test1',
    username: 'root',
    password: '123456'
  },
  middleware: [
    'logger'
  ]
}