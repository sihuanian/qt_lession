- 链接带来了页面的互联
  一切皆资源 链接 URL
  传统页面 重新刷新 坏事 用户体验较差
  响应一个 html 回来

  SPA   Single Page Application

  ## 路由的做法 vue-router 会用不算什么 框架的实现(如何实现vue-router)

  - 单页应用的结构
    不再是 n 个页面了, 1个页面,分为不动的部分和动的部分
    不动的部分: 导航 nav a href="#/page1"  
                #/page1  path 页面切换的  锚链接  大型页面，方便跳转
                锚链接让点击链接，不跳转页面成为可能  #/ #开头
                URL 改变了的事件，container 中动态 DOM

    路由接管一切  new HashRouter()
    constructor  订阅了 hashChange事件

- 新的前端世界在打开 要有新的秩序
  管住所有路由  #/page  hashRouter
  hash => cb()  // container 显示
  class HashRuter
  this.routers = {}
  向外提供一个 register(hash, callback= function () {}) 方法
  load 
  window.addEventListener('hashchange', this.load.bind(this))
  bind this 一样，返回一个新的函数，适合事件监听时使用

  ## HashRouter 实现步骤

  1. url 中的 hash 改变了之后会出发hashchange 事件，为整个window 绑定hashchange 的事件监听
  2. 注册不同的处理方式 this.routers {'path': function}
    1. 404 this.routers 中不存在对应的 hash属性
    2. error  执行出错
    3. hash存在 正常的hash 处理
  3. 使用 location 对象得到hash 的地址location.hash.slice(1) '#/login' => '/login'
  4. 根据不同的hash 执行不同的处理函数