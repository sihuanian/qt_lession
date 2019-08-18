前端 后端 = 全栈
数据库？ 云开发提供了可视化的数据库和API
让前端具有完整项目开发的能力

- 组件化的概念
  页面由组件构成，组件可以来自第三方和自定义
  page.json 中声明一下
  ```json
    "useingComponents": {
      "van-button": "相对路径"
    }
  ```
  页面要使用小程序组件一定要先声明
  template + data = App