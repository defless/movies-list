import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home';
import Edit from './components/Edit';
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: Movie },
  { path: '/movie/:id/edit', component: Edit },
  { path: '/new', component: AddMovie }
]

const router = new VueRouter({
  routes
})

window.shared_data = {
  router,
  movies: [
    {title: 'Interstellar', date: '2014', director: 'Christopher Nolan', topic: 'Movie about space', poster: 'https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg'},
    {title: 'Nemo', date: '2003', director: 'Andrew Stanton', topic: 'Movie about fishs', poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikhGYrAIHEwUyX6HgOGr5n8XOPZylIhMRLxbaG3RiY62c4huF'},
    {title: 'Cars', date: '2006', director: 'John Lasseter', topic: 'Movie about cars', poster: 'https://i.pinimg.com/originals/e5/1a/57/e51a576e5458491dbed739fb717dafd5.jpg'},
    {title: 'Cars', date: '2006', director: 'John Lasseter', topic: 'Movie about cars', poster: 'https://i.pinimg.com/originals/e5/1a/57/e51a576e5458491dbed739fb717dafd5.jpg'},
  ],
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
