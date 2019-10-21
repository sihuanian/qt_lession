## window.postMessage()
  作用：实现网站的跨源通信 http://localhost:3000 -> http://localhost:3000
  语法： otherWindow.postMessage(message, origin, [transfer])

- 接收消息方可以通过绑定 message 事件来获取其它源的消息
```js
window.addEventListener('message', receiveMessage, false)
function receiveMessage (e) {}
// e.origin(发送消息的uri http://localhost:3000) e.data(发送的消息) e.source(发送消息的window对象的引用)
```

## 代理
  线上环境解决跨域：代理（中介）
  1. 工具代理 live-server webpack / nginx
    > live-server --proxy=/api:http://localhost:3000/api
  2. 代码
    fe -> /api/post[node server] -> /api/server[java server]
  
  以上都是反向代理： 代理客户端
  10  1中介 1房东     客户端有多个 服务端只有一个
  正向代理：　代理服务器
  1  中介  10房东     客户端有一个 服务端只有多个

  一个域下面 ajax 请求有并发限制
  提交数据给服务器的时候 ajax 一般用来处理的业务
  日志提交  考虑到 ajax 并发限制属于非核心业务采用 img 方式提交数据
  status code 204 No Content