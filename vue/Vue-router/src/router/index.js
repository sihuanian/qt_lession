import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Look from '@/components/look'
import Look1 from '@/components/look1'
import Look2 from '@/components/look2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/look',
      name: 'Look',
      component: Look,
      children: [
        {
          name: 'Look1',
          path: '/look/look1',
          component: Look1 
        },
        {
          name: 'Look2',
          path: '/look/look2',
          component: Look2 
        }
      ]
    },
    {
      path: '/go-back',
      redirect: '/'
    }
  ]
})
