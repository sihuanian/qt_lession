// const app = new (require('koa'))()
// const { initRouter } = require('./Im-loader')

// app.use(initRouter().routes())
// app.listen(3000)

const IM = require('./Im')

const app = new IM()
app.start(3000)