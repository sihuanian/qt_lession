module.exports = {
  db: {
    dialect: 'mysql',
    host: 'localhost',
    database: 'lm',
    username: 'root',
    password: '123456'
  },
  middleware: [
    'logger'
  ]
}