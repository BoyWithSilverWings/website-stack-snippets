import Vue from 'vue';
import VueRouter from 'vue-router';
import VModal from "vue-js-modal";

import router from './router';
import App from "./App.vue";


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VModal);

new Vue({
  router,
  render: createEle => createEle(App)
}).$mount('#app')
