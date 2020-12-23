import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home';
import Edit from './components/Edit';
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';
import RandomMovie from './components/RandomMovie';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: Movie },
  { path: '/movie/:id/edit', component: Edit },
  { path: '/new', component: AddMovie },
  { path: '/random', component: RandomMovie }
]

const router = new VueRouter({
  routes
})

window.shared_data = {
  router,
  movies: [],
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
