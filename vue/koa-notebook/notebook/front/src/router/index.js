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
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: _import_('Login/StarLogin'),
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/StarRegister',
      name: 'StarRegister',
      component: _import_('Register/StarRegister'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/NoteClass',
      name: 'NoteClass',
      component: _import_('NoteClass/NoteClass'),
      meta: {
        title: '笔记分类'
      }
    },
    {
      path: '/NoteList',
      name: 'NoteList',
      component: _import_('NoteList/NoteList'),
      meta: {
        title: '笔记列表'
      }
    },
    {
      path: '/NoteDetail',
      name: 'NoteDetail',
      component: _import_('NoteDetail/NoteDetail'),
      meta: {
        title: '笔记详情'
      }
    },
    {
      path: '/person',
      name: 'Person',
      component: _import_('Person/Person'),
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/publishNote',
      name: 'PublishNote',
      component: _import_('PublishNote/PublishNote'),
      meta: {
        title: '创建笔记'
      }
    }
  ]
})
