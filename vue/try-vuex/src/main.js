// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MyVuex from './myvuex/index'

Vue.config.productionTip = false

// 单一状态树
let store = new MyVuex.Store({
  state: {
    count: 0
  },
  getters: {
    getStatePlusOne (state) {
      return ++state.count
    }
  }
}, Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  template: '<App/>'
})
