import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/pages/MainContent'
import Home from '@/pages/Home'
import EventCreate from '@/pages/Event/Create'
import EventList from '@/pages/Event/List'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      meta: {
        name: '首页'
      },
      component: MainContent,
      children: [{
        path: '',
        component: Home
      }]
    },
    {
      path: '/event',
      component: MainContent,
      meta: {
        name: '活动'
      },
      children: [{
          path: '',
          redirect: 'create',
          meta: {
            hidden: true
          }
        },
        {
          path: 'create',
          component: EventCreate,
          meta: {
            name: '创建'
          }
        },
        {
          path: 'list',
          component: EventList,
          meta: {
            name: '管理'
          }
        }
      ]
    }
  ]
})
