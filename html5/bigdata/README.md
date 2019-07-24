- 网页显示大量的 html 也是负担
    http 请求 3000 伺服状态 server
    / index.html 传输给浏览器 client
    127.0.0.1  localhost  本地开发
    192.168.43.36  局域网 远程
    浏览器 访问代理Client  ip:8080  页面下载下来(用户等待不能太长，影响用户体验)
    远程  服务器 （IP, domain） 伺服状态（http）  live-server  8080
    
    分页  ?limit=20&page=1
    html5  来实现