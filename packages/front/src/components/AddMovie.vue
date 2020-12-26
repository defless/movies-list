<template>
  <form class="col-md-4">
    <h2>Add a movie</h2>
    <div class="row mb-3 mt-5">
      <label class="col-md-3">Title</label>
      <b-form-input v-model="newMovie.title" :state="validateTitle" class="form-control col-md-9"></b-form-input>
      <b-form-invalid-feedback class="offset-md-3" :state="validateTitle">
        Title required
      </b-form-invalid-feedback>
    </div>
    <div class="row mb-3">
      <label class="col-md-3">Release year</label>
      <b-form-input v-model="newMovie.year" :state="validateYear" class="form-control col-md-9"></b-form-input>
      <b-form-invalid-feedback class="offset-md-3" :state="validateYear">
        Year must be a 4 digits value (ex: 1997)
      </b-form-invalid-feedback>
    </div>
    <!-- <label>Director
      <input v-model="newMovie.director" />
    </label> -->
    <div class="row mb-3">
      <label class="col-md-3">Storyline</label>
      <b-form-textarea v-model="newMovie.description" :state="validateTitle" rows="8" class="form-control col-md-9"></b-form-textarea>
      <b-form-invalid-feedback class="offset-md-3" :state="validateTitle">
        Storyline required
      </b-form-invalid-feedback>
    </div>
    <div class="row mb-3">
      <label class="col-md-3">Score: {{newMovie.score}}</label>
      <b-form-rating class="col-md-9" color="indigo" id="rating-lg-no-border" v-model="newMovie.score" no-border size="lg"></b-form-rating>
    </div>
    <div class="row mb-3">
      <label class="col-md-4">Picture from OMDb</label>
      <b-form-checkbox class="col-md-8" v-model="OMDb" name="check-button" switch />
    </div>
    <div v-if="!OMDb" class="row mb-3">
      <label class="col-md-3">Poster Url</label>
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
      OMDb: true,
      shared_data: window.shared_data,
      };
    },
    computed: {
      validateTitle(){
        return !!this.newMovie.title;
      },
      validateYear(){
        return !!this.newMovie.year && (1900 < this.newMovie.year)
      }

    },
    methods: {
      addMovie: async function(){
        const post = await _addMovie(this.newMovie, this.OMDb);
        if (post.status === 201) {
          this.shared_data.router.push('/').catch(()=>{});
        }
      },
    }
  }
</script>
