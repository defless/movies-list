<template>
  <form class="col-md-4">
      <h2>Edit {{movie.title}}</h2>
      <div class="row mb-3 mt-5">
        <label class="col-md-3">Title</label>
        <b-form-input v-model="movie.title" :state="validateTitle" class="form-control col-md-9"></b-form-input>
        <b-form-invalid-feedback class="offset-md-3" :state="validateTitle">
          Title required
        </b-form-invalid-feedback>
      </div>
      <div class="row mb-3">
        <label class="col-md-3">Release year</label>
        <b-form-input v-model="movie.year" :state="validateYear" class="form-control col-md-9"></b-form-input>
        <b-form-invalid-feedback class="offset-md-3" :state="validateYear">
          Year must be a 4 digits value (ex: 1997)
        </b-form-invalid-feedback>
      </div>
      <!-- <label>Director
        <input v-model="movie.director" />
      </label> -->
      <div class="row mb-3">
        <label class="col-md-3">Storyline</label>
        <b-form-textarea v-model="movie.description" :state="validateTitle" rows="8" class="form-control col-md-9"></b-form-textarea>
        <b-form-invalid-feedback class="offset-md-3" :state="validateTitle">
          Storyline required
        </b-form-invalid-feedback>
      </div>
      <div class="row mb-3">
        <label class="col-md-3">Score: {{movie.score}}</label>
        <b-form-rating class="col-md-9" color="indigo" id="rating-lg-no-border" v-model="movie.score" no-border size="lg"></b-form-rating>
      </div>
      <div class="row mb-3">
        <label class="col-md-4">Picture from IMDb</label>
        <b-form-checkbox class="col-md-8" v-model="IMDb" name="check-button" switch />
      </div>
      <div v-if="!IMDb" class="row mb-3">
        <label class="col-md-3">Poster Url</label>
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
