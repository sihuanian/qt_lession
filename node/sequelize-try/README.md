> npm i sequelize sequelize-cli mysql2
> .\node_modules\.bin\sequelize init // 初始化,会新增一些目录结构 config, migrations,models,seeders
> .\node_modules\.bin\sequelize db:create // 创建数据库
> .\node_modules\.bin\sequelize migration:create --name create-shops-table // 创建表,migrations文件夹会新增一个js文件
> .\node_modules\.bin\sequelize db:migrate // 执行migrations中的文件，向表插入字段...
> .\node_modules\.bin\sequelize db:migrate undo // 回退
> .\node_modules\.bin\sequelize seed:create --name init-shops // 创建测试数据
> .\node_modules\.bin\sequelize db:seed:all // 向表中插入记录 

- config
- migrations 数据库迁移目录
  会将mysql 表，字段，创建，修改，迁移 留下记录
- models 业务模型层
  表映射为对象
  Article
  sql语句
  new Article({ title: '' })
- seeders 
  测试数据

- 离开sql 来到工具