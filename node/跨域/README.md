## 跨域
浏览器安全策略
a.com 请求 b.com 的时候，不允许

## cors
cross origin resource share  跨域资源共享
规定了一些http 的首部字段，允许服务器申明哪些站点有资源的访问权限

## 简单请求 非简单请求
简单请求：html 原生 form 表单可以发出去的请求 
  (1. application/x-www-form-urlencoded 2. multipart/form-data 3.text/plain)
  1. 正式请求
非简单请求：else  
  1. 预检请求，试探一下是否支持跨域
  2. 正式请求