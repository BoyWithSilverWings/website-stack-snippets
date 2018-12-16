import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import Template from "./pages/Template.vue";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/templates/create', component: Template },
    { path: '/', name: 'home', component: Home },
  ]
});

export default router;