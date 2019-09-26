import Vue from 'vue'
import Router from 'vue-router'
// import home from '../pages/home/home.vue'
// 路由的懒加载
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const category = r => require.ensure([], () => r(require('@/pages/category/category')), 'category')
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
Vue.use(Router)

export default new Router({
  // 默认使用 hash router
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      meta: {
        index: 1
      },
      component: home
    },
    // {
    //   path: 'search',
    //   component: search
    // },
    {
      path: '/category',
      meta: {
        index: 2
      },
      component: category
    },
    // {
    //   path: '/shopcart',
    //   component: shopcart
    // },
    // {
    //   path: '/order',
    //   component: order
    // },
    // {
    //   path: '/user',
    //   component: user
    // },
    // {
    //   path: '/register',
    //   component: register
    // },
    // {
    //   path: '/login',
    //   component: login
    // },
    // {
    //   path: '/shipping',
    //   component: shipping
    // },
    // {
    //   path: '/payment',
    //   component: payment
    // },
    // {
    //   path: '/product/:id',
    //   component: productDetail
    // },
    // {
    //   path: '/profile',
    //   component: profile
    // },
    // {
    //   path: '/forget-password',
    //   component: forgetPassword
    // },
    // {
    //   path: '/update-info',
    //   component: updateInfo
    // }
  ]
})
