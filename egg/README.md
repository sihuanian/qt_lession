- egg.js 是阿里的企业级node 开发框架
> npm init egg --type=simple
> npm i mysql2 sequelize sequelize-cli -S

- instagram 前后端分离
  前端 react antd
  后端 /api/v2
  /login/register  post
  用户模块的开发 

- egg.js app 代表整个应用
  context controller
  controller 目录下的所有文件，自动转化成中间件

- router 创建了controller
  post 发送表单，跨站访问有安全问题
  egg.js 配置项
  config.security = { csrf: {enable: false}}
  Controller require('egg').Controller

> .\node_modules\.bin\sequelize init // 数据库的初始化
> .\node_modules\.bin\sequelize db:create
> .\node_modules\.bin\sequelize migration:create --name create-user-table