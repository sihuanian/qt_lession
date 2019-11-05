## 帧
刷新率 60Hz
60次 / 1000ms  16.666ms  一次

## 浏览器的进程
1. 主进程
2. 插件
3. GPU
4. 渲染

## 渲染
1. js
2. http请求
3. 定时器
4. 事件
5. 页面绘制布局

js 和页面绘制布局是互斥的
JS 可以改变 DOM

## event loop

micro task： Promise.then  .nextTick
macro task: 定时器 同步代码 

宏任务 -> 微任务 -> 渲染  宏任务 -> 微任务 -> 渲染  宏任务 -> 微任务 -> 渲染