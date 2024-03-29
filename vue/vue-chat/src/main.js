// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill' // 解决浏览器兼容性问题
import store from './store'

Vue.config.productionTip = false

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
