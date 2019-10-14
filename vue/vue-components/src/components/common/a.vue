<template>
  <div>
    <div class="components-A">组件A -- {{ age }} -- {{ app.user }}</div>
    <comB :send="test" />
  </div>
</template>

<script>
import comB from './b'
export default {
  data() {
    return {
      test: '我是aaa'
    }
  },
  provide: {
    name: 'sihuanian'
  },
  inject: ['age', 'app'],
  components: {
    comB
  }
}
</script>

<style scoped>

</style>