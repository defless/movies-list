<template>
  <div id="editMovie">
    <label>Title:
      <input v-model="movie.title"/>
    </label>
    <label>Date:
      <input v-model="movie.year"/>
    </label>
    <label>Synopsis:
     <textarea v-model="movie.description"></textarea>
    </label>
    <label>Score:
      <input v-model="movie.score"/>
    </label>
    <label>Poster:
      <input v-model="movie.score"/>
    </label>
    <button v-on:click="editM">Edit</button>
  </div>
</template>

<script>

  import { _editMovie } from '../services/api';
  export default {
    name: 'EditMovie',
    data: function() {
    return {
      shared_data: window.shared_data,
      };
    },
    computed: {
      movie(){
        return this.shared_data.movies[this.$route.params.id]
      }
    },
    methods: {
      editM: function(){
        _editMovie(this.movie);
        this.shared_data.router.push('/').catch(()=>{});
      },
    }
  }
</script>
