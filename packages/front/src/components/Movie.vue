<template>
  <div>
    <h1>{{shared_data.movies[$route.params.id].title}}</h1>
    <p>{{ shared_data.movies[$route.params.id].date }}</p>
    <p>{{ shared_data.movies[$route.params.id].director }}</p>
    <p>{{ shared_data.movies[$route.params.id].topic }}</p>

    <b-button variant="info" v-on:click="editM($route.params.id)" >Edit</b-button>
    <b-button variant="danger" v-on:click="deleteMovie">Delete</b-button>
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
    }
  }
</script>
