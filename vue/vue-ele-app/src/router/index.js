import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'

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
    },
    {
      name: 'Ratings',
      component: Ratings,
      path: '/ratings'
    },
    {
      name: 'Seller',
      component: Seller,
      path: '/seller'
    }
  ]
})
