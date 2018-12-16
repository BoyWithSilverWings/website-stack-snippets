import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import TemplateScreen from "./pages/TemplateScreen.vue";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/templates/create', component: TemplateScreen },
    { path: '/', name: 'home', component: Home },
  ]
});

export default router;