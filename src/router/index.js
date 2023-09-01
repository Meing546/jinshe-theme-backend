import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/browse',
    name: 'browse',
    component: () => import('../views/Browse.vue'),
  },
  // {
    // path: '/test',
    // name: 'test',
    // component: () => import('../components/test.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
