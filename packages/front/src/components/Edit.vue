<template>
  <div id="editMovie">
    <label>Title:
      <input v-model="shared_data.movies[$route.params.id].title"/>
    </label>
    <label>Date:
      <input v-model="shared_data.movies[$route.params.id].date"/>
    </label>
    <label>Director:
      <input v-model="shared_data.movies[$route.params.id].director"/>
    </label>
    <label>Synopsis:
     <textarea v-model="shared_data.movies[$route.params.id].topic"></textarea>
    </label>
    <button v-on:click="editM">Edit</button>
  </div>
</template>

<script>

export default {
  name: 'EditMovie',
  data: function() {
  return {
    movie:{},
    shared_data: window.shared_data,
    };
  },
  methods: {
    editM: function(){
      this.shared_data.router.push('/')
      this.$emit('edit')
    },
  }
}
</script>
