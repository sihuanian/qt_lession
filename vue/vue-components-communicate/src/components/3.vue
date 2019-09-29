<template>
  <div>
    this is three.vue <span style="color: red;">{{ oneToThree }}</span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  inject: {
    oneToThree: {
      default: 'default'
    }
  },
  created() {
    console.log(this.$attrs)
    console.log(this.$parent)
  },
}
</script>

<style scoped>

</style>