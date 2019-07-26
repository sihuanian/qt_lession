- 网页显示大量的 html 也是负担
    http 请求 3000 伺服状态 server
    / index.html 传输给浏览器 client
    127.0.0.1  localhost  本地开发
    192.168.43.36  局域网 远程
    浏览器 访问代理Client  ip:8080  页面下载下来(用户等待不能太长，影响用户体验)
    远程  服务器 （IP, domain） 伺服状态（http）  live-server  8080
    
    分页  ?limit=20&page=1
    html5  来实现

    git 

    git log  q退出 n下一页 j k
    git log --oneline

    304  上次访问过，文件没有被修改，直接用上次浏览器的缓存文件

    http 超文本传输协议
    文件太大，分多冷，等待时间长，对大数据做分页
    http 状态码 304 文件没有修改，使用浏览器缓存

    - 利益于 ES6 Array.from({length: n}, (v, k) => `新闻${k}`)  前端模拟大数据
    - 将大数据按分割  分割好，Array.from({length: Math.ceil(arr.length / size)}, (v, k) => Array.from({length: size}, (v, k) => ))