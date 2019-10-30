const http = require('http')
const EventEmitter = require('events')

const context = require('./context')
const request = require('./request')
const response = require('./response')

class myKoa extends EventEmitter{
  constructor () {
    super()
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }

  // 创建ctx
  createContext (req, res) {
    // 通过Object.create 创建对象是为了继承 this.context，但是在增加属性时不影响原对象
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)

    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res

    request.ctx = response.ctx = ctx
    request.response = response
    response.request = request
    return ctx
  }

  // 处理请求
  handleRequest (req, res) {
    const ctx = this.createContext(req, res)
    this.fn(ctx) // 调用用户给的回调，把ctx 还给用户使用
    res.end(ctx.body) // ctx.body 用来输出到页面
  }

  use (fn) {
    this.fn = fn
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this)) // 确保handleRequest 中的this指向myKoa
    server.listen(...args)
  }
}

module.exports = myKoa