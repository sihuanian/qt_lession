- 参数 js比较松散 arguments
    event 在第一位置 事件注册与处理函数的分离
    event.target  event.target.tagName
    this 指向事件发生的元素 但是箭头函数 this丢失，指向它的上一级

- ajax fetch 让我们可以主动发起请求， 动态网页
    fetch 返回的是可读流

- event.target
    返回的不是绑定事件的元素，而是触发事件的元素