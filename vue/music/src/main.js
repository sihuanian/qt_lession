// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import def_lazy_img from '../static/img/loading.gif'

Vue.use(VueLazyLoad, {
  loading: def_lazy_img // 默认加载不出来的图片显示 def_lazy_img
})
Vue.config.productionTip = false

fastclick.attach(document.body) // 使body上去掉 300ms 的点击延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
