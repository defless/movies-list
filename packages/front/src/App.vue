<style lang="scss">
@import './assets/css/main.css';
</style>
<template>
  <div class="midnight">
    <b-nav class="mb-5 d-flex flex-row justify-content-between p-2 navbar">
      <div class="d-flex flex-row">
        <b-nav-item v-on:click="shared_data.router.push('/').catch(()=>{})">List</b-nav-item>
        <b-nav-item v-on:click="shared_data.router.push('/new').catch(()=>{})">Add a movie</b-nav-item>
        <b-nav-item v-on:click="shared_data.router.push(`/movie/${Math.floor(Math.random() * Math.floor(shared_data.movies.length))}`).catch(()=>{})">Random Movie</b-nav-item>
      </div>
      <b-nav-form>
        <SearchMovie v-on:search="searchResults(info)"/>
      </b-nav-form>
    </b-nav>
    <router-view :key="$route.path" class="container-fluid"></router-view>
  </div>
</template>

<script>

  import SearchMovie from './components/SearchMovie.vue';
  import { _getMovies}  from './services/api';

  export default {
    name: 'App',
    components: {
      SearchMovie,
    },
    data: function() {
    return {
      shared_data: window.shared_data,
      };
    },
    methods: {
      init: async function(){
        const movies = await _getMovies();
        console.log(movies);
        movies.forEach(movie => movie.title = movie.title.charAt(0).toUpperCase() + movie.title.slice(1));
        window.shared_data.movies = movies;

      },
    },
    mounted(){
      this.init();
      console.log(window.shared_data.movies);
    },
    updated(){
      this.init();
    }
  }
</script>
