<style lang="scss">
@import './assets/css/main.css';
</style>
<template>
  <div>
    <b-nav class="mb-5 d-flex flex-row justify-content-between p-2">
      <div class="d-flex flex-row">
        <b-nav-item v-on:click="shared_data.router.push('/')">List</b-nav-item>
        <b-nav-item v-on:click="shared_data.router.push('/new')">Add a movie</b-nav-item>
        <b-nav-item v-on:click="shared_data.router.push('/random')">Random Movie</b-nav-item>
      </div>
      <b-nav-form>
        <SearchMovie v-on:search="searchResults(info)"/>
      </b-nav-form>
    </b-nav>
    <router-view  class="container"></router-view>
  </div>
</template>

<script>
import SearchMovie from './components/SearchMovie.vue';

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
  computed: {
  },
  }
</script>
