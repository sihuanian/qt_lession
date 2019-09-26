// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AVue from './AVue.js'

Vue.config.productionTip = false

Vue.use(ElementUI)

const plugin = {
  install () {
    document.writeln('我是插件的install方法')
  }
}

Vue.use(plugin) // 会去执行plugin 的install 方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
