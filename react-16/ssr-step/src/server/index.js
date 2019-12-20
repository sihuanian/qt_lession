import React from 'react';
import express from 'express';
import { matchRoutes } from 'react-router-config'
import routes from '../routers'
import Header from '../components/Header';
import render from './render';
import { getServerStore } from '../store/index'
/**
 * 构建在 虚拟 dom 之上的 服务端渲染
 * { name： ''， age: '' }
 * { tag: '', attribute: , children: [], class: '' }
 * 
 * MVVM / dom diff
 * react: react-native
 * vue:   weex
 */
const app = new express();
// publi 前端打包后访问的静态资源
app.use(express.static('public'))
app.get('*', (req, res) => {
  /**
   * 渲染 html 之前保证redux 有数据，渲染出来的数据就是带有数据的 html
   * 1. 拿到当前访问的url 命中的组件
   * 2. 拿到组件上面的loadData
   * 3. 一个个dispatch
   * 4. 渲染
   */
  const store = getServerStore()
  let promises = []

  const matchedRouters = matchRoutes(routes, req.path)
  // console.log('------>', matchedRouters.route)
  matchedRouters.forEach(mRouter => {
    // console.log('----->', mRouter.route.loadData)
    // store.dispatch
    mRouter.route.loadData && promises.push(mRouter.route.loadData(store))
  })
  Promise.all(promises)
    .then(resArr => {
      const html = render(req, store);
      res.send(html)
    })
    .catch(e => {
      console.log('服务端出错了', e)
    })
})
app.listen(3000, () => {
  console.log('server is running 3000');
})