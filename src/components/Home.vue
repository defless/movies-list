<template>
  <div class="d-flex flex-row justify-content-around flex-wrap">
    <div
      v-for="(movie,i) in shared_data.movies"
      :key="i"
      v-bind:title="movie.title"
      class="col-md-3 mb-5"
    >
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
          search: { title:'', date: '', director: ''},
          shared_data: window.shared_data,
        };
      },
      methods: {
        addMovie: function(movie){
          this.shared_data.movies.push(movie);
        },
        deleteMovie: function(index){
          this.shared_data.movies.splice(index, 1);
        },
        editMovie(i){
          if (this.editing !== '') {
            this.shared_data.movies[i].title = this.editedMovie.title || this.shared_data.movies[i].title;
            this.shared_data.movies[i].year = this.editedMovie.year || this.shared_data.movies[i].year;
            this.shared_data.movies[i].director = this.editedMovie.director || this.shared_data.movies[i].director;
            this.shared_data.movies[i].topic = this.editedMovie.topic || this.shared_data.movies[i].topic;
            this.editedMovie = '';
            this.editing = '';
          } else {
            this.editing = i;
          }
        },
      },
      computed: {

      }
  }
</script>
