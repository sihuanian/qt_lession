## 组件，既可以在客户端，也可以在服务端运行
同构
首屏直出
SPA: 
1. <div id="app"></div>
2. js
3. js => html

SSR
1. <div id="app">内容</div>
2. js addEvent

DCL: DOMComtentLoaded dom 解析完成时
L: load 这个页面所有资源加载完成
FP: first-paint 有像素落点的时候
FCP: first-contentful-paint 有内容渲染的时候
FMP: first-meaningful-paint 有意义的内容
TTI: time-to-interaction 可交互

虚拟
服务端：生成 html
客户端：负责事件绑定

SPA：html 事件 在客户端

## JEE ejs
服务端渲染

## node
1. 服务端渲染
2. webpack babel 工具
3. 中间层（BFF）
   client  /buy  server
   问题：
   /num    1
   /login  2
   /buy    3
   解决：
   node: backend for front
   get('/nodeBuy', async () => {
     // 内网请求
     // 速度理论上限
     // rpc
     get('/num') login buy
   })
   // 非必要
   rpc：romote process call

## 上线
server: /build/bundle.js // node localhost:3000
//localhost:3000/login node 渲染 login 组件 html

public: /public/index.js
//作为node 服务器返回的html 需要加载的资源