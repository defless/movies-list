<template>
  <form class="col-md-4">
    <h2>Edit {{movie.title}}</h2>
    <div class="row mb-3 mt-5">
      <label class="col-md-3">Title</label>
      <input class="form-control col-md-9" v-model="movie.title" />
    </div>
    <div class="row mb-3">
      <label class="col-md-3">Release date</label>
      <input class="form-control col-md-9" v-model="movie.year" />
    </div>
    <!-- <label>Director
      <input v-model="movie.director" />
    </label> -->
    <div class="row mb-3">
      <label class="col-md-3">Synopsis</label>
      <textarea class="form-control col-md-9" v-model="movie.description"></textarea>
    </div>
    <div class="row mb-3">
      <label class="col-md-3">Score: {{movie.score}}</label>
      <input type="range" class="form-range col-md-9 slider" min="0" max="5" step="1" v-model="movie.score">
    </div>
    <div class="row mb-3">
      <label class="col-md-3">Picture</label>
      <input class="form-control col-md-9" v-model="movie.poster" />
    </div>
    <button class="btn btn-primary" v-on:click="editM">Edit</button>
  </form>
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
