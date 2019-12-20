tsconfig.json

include 自动编译路径下的文件

> npm i @types/koa
> npm install koa-controllers --save
> npm install reflect-metadata --save

## 初始化
sequelize init (.\node_modules\.bin\sequelize init)

初始化完成之后生成的目录
config: 配置目录
migrations：迁移文件（数据库表结构）
seeders： 种子文件（生成测试数据）
models： 模型文件

## 创建数据库
> sequelize:db create (.\node_modules\.bin\sequelize db:create)

## 构建数据库的迁移结构
> .\node_modules\.bin\sequelize migration:create --name user

## 数据库结构

- user: 用户表
用来存放用户的基本信息

- user-profile: 用户的扩展信息
用来存放用户的扩展信息（性别，生日，个人简介等不常用的数据）

- login-log: 用户的登录日志
存放用户的登录日志（用户每一次登录时间，ip信息存放在这里）

- categoty: 美食分类表
用来存放美食分类信息（热菜，凉菜……）

- cookbook: 美食信息
用来存放美食信息（标题，图片……）

- setp: 美食烹饪步骤
用来存放美食烹饪步骤，在每一个步骤中有一个字段与cookbook表中的id进行关联

- comment: 评论表
用来存放用户对某个具体的cookbook的评论

- favorite: 收藏表
用来存放用户收藏的美食

## 生成表
> .\node_modules\.bin\sequelize db:migrate

## 创建种子
- seeders 文件夹下创建假数据
> .\node_modules\.bin\sequelize seed:generate --name user

## 导入种子文件到数据库中
> .\node_modules\.bin\sequelize db:seed:all
> .\node_modules\.bin\sequelize db:seed:undo:all(删除所有导入的数据)

## 开始项目开发
- tsc --init