// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'  // 使用rem自适应的amfe-flexible第三方
import axios from'axios'
import { Swipe, SwipeItem, Icon, Field, ActionSheet, Toast, Panel, Uploader } from 'vant' // 手动按需引入vant
import 'vant/lib/index.css'

Vue.use(Swipe).use(SwipeItem).use(Icon).use(Field).use(ActionSheet).use(Toast).use(Panel).use(Uploader)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => { // 路由守卫
  document.title = to.meta.title
  next()
})

Vue.prototype.$http = axios // 将axios挂载到Vue原型链上为$http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
