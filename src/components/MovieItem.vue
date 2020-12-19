<template>
  <b-card
    v-on:click="shared_data.router.push(`/movie/${id}`)"
    class="d-flex flex-row align-items-end movieCard"
    v-bind:style="{ backgroundImage: 'url(' + movie.poster + ')' }"
  >
    <div class="d-flex">
      <h3>{{ movie.title }}</h3>
    </div>
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
    shared_data: window.shared_data,
    };
  },
}
</script>
