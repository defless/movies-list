<template>
  <h1>{{getRandomMovie.title}}</h1>
</template>
<script>
export default {
  name: 'randomMovie',
  data: function() {
  return {
    shared_data: window.shared_data,
    };
  },
  computed: {
    getRandomMovie(){
      return(this.shared_data.movies[Math.floor(Math.random() * Math.floor(this.shared_data.movies.length))])
    }
  }
}
</script>
