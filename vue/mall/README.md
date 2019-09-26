## vue 电商项目的通用做法
  tabbar
- 路由，通用的路由，分类的路由
  /pages  网站地图创建完成
- 组件化开发
  common 是通用的，在多个页面会公用的组件
- transition 生成过程

- 路由懒加载
  > const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')