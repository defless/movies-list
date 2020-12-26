<template>
  <div>
    <b-form-input class="searchBar" placeholder="Title, date, director" v-model="info" />
    <div v-if="info !== ''" class="researchBody">
      <h4 class="mb-4">Search results:</h4>
      <ul>
        <li class="mb-2" v-for="(movie, i) in searchResults" :key="i" v-bind:title="movie.title" v-on:click="resultClick(i)">
          <p>{{ movie.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchMovie',
    data: function() {
    return {
      info: '',
      shared_data: window.shared_data,
      };
    },
    computed: {
      searchResults(){
        if (this.info === '') {
          return {};
        } else {
          return this.shared_data.movies.filter(
            movie => movie.director === this.info ||
            movie.title.toLowerCase().substring(0,this.info.length) === this.info.toLowerCase() ||
            movie.year === parseInt(this.info, 10));
        }
      }
    },
    methods: {
      resultClick: function(i){
        this.info = '';
        this.shared_data.router.push(`/movie/${i}`).catch(()=>{});
      }
    }

  }
</script>
