<template>
  <div class="row">
    <div class="col-md-4">
      <img class="poster" v-bind:src="shared_data.movies[$route.params.id].poster">
    </div>
    <div class="col-md-8">
      <div class="row d-flex">
        <h1>{{shared_data.movies[$route.params.id].title}}</h1>
        <div v-bind:class="[getBackground, 'score ml-4 align-self-center']">
          <p>{{shared_data.movies[$route.params.id].score}}</p>
        </div>
      </div>
      <div class="movieParameters mt-2 mb-5">
        <p>{{ shared_data.movies[$route.params.id].year }}</p>
        <p>Directed by: coming soon...</p>
        <p>Genre(s): coming soon...</p>
      </div>
      <div>
        <h3>Storyline</h3>
        <p>{{ shared_data.movies[$route.params.id].description }}</p>
        <p>{{ shared_data.movies[$route.params.id].topic }}</p>
      </div>
      <div>
        <h3>Cast</h3>
        <p>Coming Soon ...</p>
      </div>
      <div class="mt-5">
        <b-button class="mr-3" variant="info" v-on:click="editM($route.params.id)" >Edit</b-button>
        <b-button variant="danger" v-on:click="deleteMovie">Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { _deleteMovie } from '../services/api';

  export default {
    name: 'Movie',
    data: function() {
    return {
      shared_data: window.shared_data,
      };
    },
    methods: {
      deleteMovie: async function(){
        const result = await _deleteMovie(this.shared_data.movies[this.$route.params.id]._id);
        if (result.status === 200) {
          this.shared_data.router.push('/').catch(()=>{});
        }
      },
      editM: function(id){
        this.shared_data.router.push(`/movie/${id}/edit`);
        this.$emit('edit')
      },
    },
    computed: {
      getBackground() {
        switch (this.shared_data.movies[this.$route.params.id].score) {
          case 1:
            return 'bg-dark';
          case 2:
            return 'bg-danger';
          case 3:
            return 'bg-warning';
          case 4:
            return 'bg-info';
          default:
            return 'bg-success';

        }
      }
    }
  }
</script>
