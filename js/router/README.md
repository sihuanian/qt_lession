VUE REACT SPA Single Page Applicate  应用体验更好，页面会白一下
传统网页 链接组织起来的从 一个链接会重新加载一个新的页面，新的http 请求
/about req, res 过程
req  /about
时间  网络传输时间，二进制，电频的信号，
光速 + node/java/python 后端代码，查数据库的执行时间， + 把html 返回回去 = 白屏时间
白屏时间超过1.5s 用户会离开。 
res  /about  about.html


路由是独立的
- 网站MVC    应用(VUE APP)的体验诞生了路由  白屏问题  100 - 200
VueRouter 就来了
- hashRouter
  #/shop  #/
  优点是IE8 以上都支持
  缺点： 路由不纯粹 希望地址依旧是 /shop

- HistoryRouter history 历史的 /shop 访问的历史，纪录
  VUERouter 两种实现方式 HashRouter(兼容性好)  HistoryRouter(形式好，移动端兼容性还是没有问题)


## HistoryRouter 的实现步骤

1. 阻止a 标签的默认行为
2. 注册路由，向 this.routers 中保存外界传入的函数{'path': function}
3. 使用 history.pushState() 添加状态
4. 执行this.routers['path'] 的函数