<template>
  <div>
    <!-- props 中的 value 会接受这个msg -->
    <second v-model="msg" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import second from './second'
export default {
  data() {
    return {
      msg: 'hello'
    }
  },
  components: {
    second
  }
}
</script>

<style scoped>

</style>