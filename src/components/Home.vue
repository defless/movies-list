<template>
  <div id="app">
    <SearchMovie v-on:search="searchResults(info)"/>
    <div>
      <h1>{{title}}</h1>
      <ul>
        <li v-for="(movie,i) in shared_data.movies" :key="movie.title" v-bind:title="movie.title">
          <div>
            <MovieItem v-bind:movie="movie" v-bind:id="i" v-on:delete="deleteMovie(i)" ></MovieItem>
          </div>
        </li>
      </ul>
      <h4>Number of movies: {{ shared_data.movies.length }}</h4>
    </div>
  </div>
</template>

<script>

  import MovieItem from './MovieItem.vue';
  import SearchMovie from './SearchMovie.vue';

  export default {
    components: {
      MovieItem,
      SearchMovie,
    },

    data: function() {
      return {
          title: 'Movies list',
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
