<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{$route.params.id1}}
  </div>
</template>

<script>
export default {
  name: 'Look2',
  data () {
    return {
      msg: '我是Look2'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
