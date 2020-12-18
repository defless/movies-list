<template>
  <div>
    <h2> Search for a movie</h2>
    <input placeholder="Title, date, director" v-model="info" />
    <ul>
      <li v-for="movie in searchResults" :key="movie.title" v-bind:title="movie.title">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.date }}</p>
        <p>{{ movie.director }}</p>
        <p>{{ movie.topic }}</p>
      </li>
      </ul>
  </div>
</template>
<script>
  export default {
    name: 'SearchMovie',
    data: function() {
    return {
      info: '',
      shared_data: window.shared_data,
      };
    },
    computed: {
      searchResults(){
        console.log(this.shared_data.movies.filter(movie => movie.director===this.info ));
        if (this.info === '') {
          return {};
        } else {
          return this.shared_data.movies.filter(movie => movie.director===this.info || movie.title === this.info || movie.date === this.info);
        }
      }
    }

  }
</script>
