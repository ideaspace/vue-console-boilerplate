import Vue from 'vue';
import App from './App.vue';
import Bootstrap from './bootstrap';

Vue.config.productionTip = false;

// Bootstrap.router.addRoutes([
//   {
//     path: '*',
//     redirect: '/404',
//   },
// ]);

Vue.use(Bootstrap);

new Vue({
  router: Bootstrap.router,
  store: Bootstrap.stores,
  render: (h) => h(App),
}).$mount('#app');
