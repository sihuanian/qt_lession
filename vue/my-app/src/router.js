import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import Login from './pages/login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
})