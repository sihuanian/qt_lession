- canvas
- JS异步是核心问题
    事件，文件读写，定时器，fetch/ajax
    代码的编写顺序与执行顺序不一样，代码的可读性下降
    loadAssets() 1s
    hideWelcome() 在它之后
    js 先hideWelcome() loadAssets 执行完成
    js 单线程语言  java 多线程
    在一次执行中 会把立即执行的代码执行掉，再把异步任务放到事件轮询中
    怎么将异步操作依据代码编写顺序来执行？
    回调  

- img.onload
    window.onload  开始我们的表演  太慢了
    有没有比这个早发生的， 但html, css已经加载完成
    如果html css js 都没有基本结构的搭建完成，游戏脚本会有问题

- 函数式编程
    完成开发需求 复杂 <= 独立的多个子需求来完成 <= 单独封装成一个函数
    init()
    drawSnake()
    addEvent()
    refreshSnake()
    winOrLoose()
    showResut()