<template>
  <div>
    <button @click="handleDispatch">派发事件</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleDispatch () {
      this.$dispatch('text', 'Hello,Vue.js')
    }
  },
}
</script>

<style scoped>

</style>