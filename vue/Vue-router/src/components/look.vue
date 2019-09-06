<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{$route.params.id}} <!-- 获取路由传来的参数 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      msg: '看一看页面'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
