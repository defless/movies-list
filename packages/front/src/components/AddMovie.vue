<template>
  <div id="newMovie">
    <h2>Add a movie</h2>
    <label>Title
      <input v-model="newMovie.title" />
    </label>
    <label>Date
      <input v-model="newMovie.year" />
    </label>
    <!-- <label>Director
      <input v-model="newMovie.director" />
    </label> -->
    <label>Synopsis
      <textarea v-model="newMovie.description"></textarea>
    </label>
    <label>Score
      <input v-model="newMovie.score" />
    </label>
    <label>Picture
      <input v-model="newMovie.poster" />
    </label>
    <button v-on:click="addMovie()">Add</button>
  </div>
</template>
<script>

  import { _addMovie } from '../services/api';
  export default {
    name: 'AddMovie',
    data: function() {
    return {
      newMovie:{},
      shared_data: window.shared_data,
      };
    },
    methods: {
      addMovie: async function(){
        const post = await _addMovie(this.newMovie);
        if (post.status === 201) {
          this.shared_data.router.push('/').catch(()=>{});
        }
      },
    }
  }
</script>
