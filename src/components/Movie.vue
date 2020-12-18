<template>
  <div>
    
    <h1>{{shared_data.movies[$route.params.id].title}}</h1>
    <p>{{ shared_data.movies[$route.params.id].date }}</p>
    <p>{{ shared_data.movies[$route.params.id].director }}</p>
    <p>{{ shared_data.movies[$route.params.id].topic }}</p>

    <b-button variant="info" v-on:click="editM(id)" >Edit</b-button>
    <b-button variant="danger" v-on:click="deleteM">Delete</b-button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  data: function() {
  return {
    shared_data: window.shared_data,
    };
  },
  methods: {
  }
}
</script>
