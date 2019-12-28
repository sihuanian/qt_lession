const Koa = require('koa')
const { initRouter } = require('./Im-loader')

module.exports = class IM {
  constructor(conf) {
    this.$app = new Koa(conf)
    this.$router = initRouter()
    this.$app.use(this.$router.routes())
  }
  start(port) {
    this.$app.listen(port, () => {
      console.log('服务启动成功，运行在http://localhost:' + port)
    })
  }
}
