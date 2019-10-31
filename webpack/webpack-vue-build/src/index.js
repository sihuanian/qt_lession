import Vue from 'vue'
import App from './App.vue'
import { add, sub } from './util'

console.log(add(1, 2))

new Vue({
  render: h => h(App),
  commponents: {
    App
  }
}).$mount('#app')