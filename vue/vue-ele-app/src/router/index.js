import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Goods',
      component: Goods,
      path: '/goods'
    },
    {
      path: '/',
      redirect: '/goods'
    }
  ]
})
