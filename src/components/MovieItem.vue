<template>
  <div>
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.date }}</p>
    <p>{{ movie.director }}</p>
    <p>{{ movie.topic }}</p>
    <button v-on:click="deleteM">Delete</button>
    <button v-on:click="editM(id)" >Edit</button>
  </div>
</template>

<script>

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default {
  name: 'MovieItem',
  props: {
    movie: Object,
    id: Number
  },
  data: function() {
  return {
    shared_data: window.shared_data,
    };
  },
  methods: {
    deleteM: function(){
      this.$emit('delete')
    },
    editM: function(id){
      this.shared_data.router.push(`/edit/${id}`);
      this.$emit('edit')
    },
  }
}
</script>
