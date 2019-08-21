## 小程序云开发

### 数据库的操作
1. const db = wx.cloud.database() // 获取数据库引用
2. const collectionName = db.collectionName('集合名') // 获取一个集合
3. collectionName.add({ data: 一条记录 }).then(res => { console.log(res) })  // 向集合中添加一条记录
4. collectionName.get().then() // 获取集合中一页的记录 <= 20 条
5. collectionName.skip(number).get().then() // skip() 跳过 number 条记录，获取这之后的一页记录

## 小程序的组件库 vant
- 在页面中的 json 文件中引入所需的组件
  ```json
    "useingComponents": {
      "van-button": "相对路径"
    }
  ```
- 写作是最好的学习方式
  深入思考，总结
  让看我文章的同学有收获，教别人学习的过程
- 教别人学习