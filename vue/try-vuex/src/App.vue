<template>
  <div id="app">
    {{ count }} 
    <!-- <button @click="add">+</button>
    <button @click="minus">-</button> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  created() {
    // this.$store.state = {
    //   count: 2  
    // }
    console.log('打印出this.$store.getters.getStatePlusOne的结果', this.$store.getters.getStatePlusOne)
  },
}
</script>

<style>
</style>
