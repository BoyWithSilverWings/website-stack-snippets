import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router';
import App from "./App.vue";


Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app')
