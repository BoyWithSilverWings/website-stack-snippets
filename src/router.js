import VueRouter from "vue-router";
import Home from "./components/Home.vue";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
  ]
});

export default router;