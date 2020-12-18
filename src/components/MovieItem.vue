<template>
  <b-card
    v-on:click="shared_data.router.push(`/${id}`)"
    v-bind:style="card"
    class="d-flex flex-column"
  >
    <h3>{{ movie.title }}</h3>
  </b-card>
</template>

<script>

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default {
  name: 'MovieItem',
  props: {
    movie: Object,
    id: Number,
  },
  data: function() {
  return {
    card: {
      height: '300px',
    },
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
