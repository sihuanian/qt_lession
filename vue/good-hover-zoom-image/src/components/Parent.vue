<template>
  <div>
    <my-child />
  </div>
</template>

<script>
import MyChild from './Child'
export default {
  components: {
    MyChild
  },
  provide: {
    theme: 'red'
  }
}
</script>

<style scoped>

</style>