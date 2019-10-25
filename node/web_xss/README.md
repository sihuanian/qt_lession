## XSS
cross site script 跨站脚本攻击
用不合法的方式向web 页面里插入可执行的代码

## 攻击类型
  1. 反射型： xss 代码存在url 中，服务器解析请求，把xss 代码一并返回，web 页面得到响应，执行xss 代码，过程像一次反射一样。
  2. 存储型： 唯一的区别 xss 的代码永久保留在服务器（数据库，文件...）中

## 防护
  编码 html entity 编码 <  ->  &lt; ' ' -> &nbsp;
  过滤 onerror onclick属性 去掉可能造成xss 攻击的属性和标签中间的内容
  校正 与编码相反