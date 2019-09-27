import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      component: Search,
      name: 'Search'
    }
  ]
})
