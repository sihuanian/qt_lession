const Koa = require('koa')
const { initRouter, initController, initServices, loadConfig, initSchedule } = require('./Im-loader')

module.exports = class IM {
  constructor(conf) {
    this.$app = new Koa(conf)
    initSchedule()
    loadConfig(this) // 加载配置项
    this.$service = initServices()
    this.$ctrl = initController(this)
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
  }
  start(port) {
    this.$app.listen(port, () => {
      console.log('服务启动成功，运行在http://localhost:' + port)
    })
  }
}
