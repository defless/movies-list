<template>
  <form class="col-md-4">
    <h2>Add a movie</h2>
    <div class="row mb-3 mt-5">
      <label class="col-md-3">Title</label>
      <input class="form-control col-md-9" v-model="newMovie.title" />
    </div>
    <div class="row mb-3">
      <label class="col-md-3">Release date</label>
      <input class="form-control col-md-9" v-model="newMovie.year" />
    </div>
    <!-- <label>Director
      <input v-model="newMovie.director" />
    </label> -->
    <div class="row mb-3">
      <label class="col-md-3">Synopsis</label>
      <textarea class="form-control col-md-9" v-model="newMovie.description"></textarea>
    </div>
    <div class="row mb-3">
      <label class="col-md-3">Score: {{newMovie.score}}</label>
      <input type="range" class="form-range col-md-9 slider" min="0" max="5" step="1" v-model="newMovie.score">
    </div>
    <div class="row mb-3">
      <label class="col-md-3">Picture</label>
      <input class="form-control col-md-9" v-model="newMovie.poster" />
    </div>
    <button class="btn btn-primary" v-on:click="addMovie()">Add</button>
  </form>
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
