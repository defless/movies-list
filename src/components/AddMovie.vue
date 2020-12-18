<template>
  <div id="newMovie">
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
  </div>
</template>
<script>
  export default {
    data: function() {
    return {
      newMovie:{},
      shared_data: window.shared_data,
      };
    },
    methods: {
      addMovie: function(){
        this.shared_data.movies.push(this.newMovie);
        this.shared_data.router.push('/');
      },
    }
  }
</script>
