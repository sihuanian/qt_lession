// 使用hash
class HashRouter {
  constructor () {
    // Key(/page) => val (func 由外界传进来)
    this.routers = {}
    window.addEventListener('hashchange', this.load.bind(this))
  }

  load () {
    // console.log(this)
    let hash = location.hash.slice(1),
      handler // 处理函数
      // container 显示相应的page　的内容
      // 由外界决定
      handler = this.routers[hash]
      // handler() 
      if (!this.routers.hasOwnProperty(hash)) {
        handler = this.routers['404']
      } else {
        handler = this.routers[hash]
      }
      try {
        handler.apply(this)
      } catch (e) {
        console.error(e);
        ;(this.routers['error'] || function () {}).call(this, e)
      }
  }

  register (hash, callback = function () {}) {
    this.routers[hash] = callback
  }

  registerNotFound (callback = function () {}) {
    this.routers['404'] = callback
  }

  registerError (callback = function () {}) {
    this.routers['error'] = callback
  }
}