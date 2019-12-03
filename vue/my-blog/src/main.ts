import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import service from './utils/https';
import urls from './utils/urls';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$https = service;
Vue.prototype.$urls = urls;

interface Route {
  path: string;
}

// router.beforeEach(to: Route, from: Route, next: any) {
//   console.log(to.path);
//   // if (to.path === '/') {
//   // } else {
//   // }
//   next();
// }

// beforeRouteUpdate(to: Route, from: Route, next: Route) {
//   console.log(to.path)
//   if (to.path === '/') {
//     this.isShowNav = false
//   } else {
//     this.isShowNav = true
//   }
// }

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
