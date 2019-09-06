## 静态资源

- 静态： 不会随着服务器运行改变的资源
  资源放到服务器上面
  常见的静态资源： html, css, js, jpg


## 浏览器
file:///E:/github/qt_lession/node/static-resource-server/index1.html
http://localhost:3000/

http://localhost:3000/static/%E5%9D%A4%E5%9D%A4.jpg
支持了两个不同的协议

1. 浏览器知道这是一个html
2. src href 属性 浏览器会请求对应的 src得到结果
3. 服务器返回对应的内容 js/css/img

http://127.0.0.1:8080/static/demo.jpg

和磁盘路径一一对应
req.url === c:/static/x.jpg
作用： 统一处理了 静态资源的请求

静态资源的请求都会地有某些特点
static.u51.com
u51.com/static/a.jpg

异步
1. 回调
2. Promise