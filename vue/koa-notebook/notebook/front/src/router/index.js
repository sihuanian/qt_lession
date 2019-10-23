import Vue from 'vue'
import Router from 'vue-router'
// import StarNotes from '../components/StarNote.vue'
// import StarBanner from '../components/StarBanner/starBanner.vue'
const _import_ = file => () => import('@/components/' + file + '.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: _import_('StarNote'),
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: _import_('StarBanner/starBanner'),
      meta: {
        title: '欢迎'
      }
    }
  ]
})
