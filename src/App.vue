<template>
  <div>
    <b-nav class="mb-5">
      <b-nav-item>List</b-nav-item>
      <b-nav-item>Add a movie</b-nav-item>
      <b-nav-item>Random Movie</b-nav-item>
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
  computed: {
  },
  }
</script>
