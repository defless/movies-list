<template>
  <div class="d-flex flex-row justify-content-around flex-wrap">
    <div
      v-for="(movie,i) in shared_data.movies"
      :key="i"
      v-bind:title="movie.title"
      class="col-md-2 mb-5 movieCard"
      v-on:click="shared_data.router.push(`/movie/${i}`).catch(()=>{})"
    >
      <div class="gradient"></div>
      <MovieItem v-bind:movie="movie" v-bind:id="i" ></MovieItem>
    </div>
  </div>
</template>

<script>

  import MovieItem from './MovieItem.vue';

  export default {
    components: {
      MovieItem,
    },

    data: function() {
      return {
          newMovie: {title:'', year: null, director: '', topic: ''},
          shared_data: window.shared_data,
        };
      },
  }
</script>
