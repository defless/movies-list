<template>
  <div id="app">
    <div>
      <div>
        <h2> Search for a movie</h2>
        <input placeholder="Movie title" v-model="search.title" />
        <input placeholder="Movie date" v-model="search.date" />
        <input placeholder="Movie director" v-model="search.director" />
        <ul>
          <li v-for="movie in searchResults" :key="movie.title" v-bind:title="movie.title">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.date }}</p>
            <p>{{ movie.director }}</p>
            <p>{{ movie.topic }}</p>
          </li>
          </ul>
      </div>
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
    <!-- <div id="newMovie">
      <h2>Add a movie</h2>
      <label>Title
        <input v-model="newMovie.title" />
      </label>
      <label>Date
        <input v-model="newMovie.date" />
      </label>
      <label>Director
        <input v-model="newMovie.director" />
      </label>
      <label>Synopsis
        <textarea v-model="newMovie.topic"></textarea>
      </label>
      <button v-on:click="addMovie(newMovie)">Add</button>
      <p>First letter: {{ firstLetter }}</p>
    </div> -->
  </div>
</template>

<script>

  import MovieItem from './MovieItem.vue'
  //import Edit from './components/Edit.vue'

  export default {
    components: {
      MovieItem,
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
        firstLetter(){
          return this.newMovie.title.charAt(0);
        },
        getResultsByTitle(){
          if (this.search.title) {
            return this.shared_data.movies.filter(movie => movie.title===this.search.title);
          } else {
            return this.shared_data.movies;
          }

        },
        getResultsByDate(){
          if (this.search.date) {
            return this.getResultsByTitle.filter(movie => movie.date=== this.search.date);
          } else {
            return this.getResultsByTitle;
          }
        },
        getResultsByDirector(){
          if (this.search.director) {
            return this.getResultsByDate.filter(movie => movie.director===this.search.director );
          } else {
            return this.getResultsByDate;
          }
        },
        searchResults(){
          if (this.search.title === '' && this.search.date === '' && this.search.director === '') {
            return {};
          } else {
            return this.getResultsByDirector;
          }
        }
      }
  }
</script>
