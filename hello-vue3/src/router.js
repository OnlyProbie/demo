import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('./views/Learn'),
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('./views/Student'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About'),
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('./views/Activity'),
  }
];

export default new VueRouter({
  mode: 'history',
  routes,
});