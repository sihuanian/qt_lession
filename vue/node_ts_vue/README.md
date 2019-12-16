tsconfig.json

include 自动编译路径下的文件

npm i @types/koa
npm install koa-controllers --save
npm install reflect-metadata --save

## 初始化
sequelize init (.\node_modules\.bin\sequelize init)

初始化完成之后生成的目录
config: 配置目录
migrations：迁移文件（数据库表结构）
seeders： 种子文件（生成测试数据）
models： 模型文件

## 创建数据库
sequelize:db create (.\node_modules\.bin\sequelize db:create)

## 构建数据库的迁移结构
.\node_modules\.bin\sequelize migration:create --name user

## 数据库结构