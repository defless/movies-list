import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Edit from './components/Edit'
import AddMovie from './components/AddMovie'

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/edit/:id', component: Edit },
  { path: '/new', component: AddMovie }
]

const router = new VueRouter({
  routes
})

window.shared_data = {
  router,
  movies: [
    {title: 'Interstellar', date: '2014', director: 'Christopher Nolan', topic: 'Movie about space'},
    {title: 'Nemo', date: '2003', director: 'Andrew Stanton', topic: 'Movie about fishs'},
    {title: 'Cars', date: '2006', director: 'John Lasseter', topic: 'Movie about cars'},
  ],
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
