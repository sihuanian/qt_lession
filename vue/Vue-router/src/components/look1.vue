<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="go-tow" @click="goto">去look2</div>
  </div>
</template>

<script>
export default {
  name: 'Look1',
  data () {
    return {
      msg: '我是Look1'
    }
  },
  methods: {
      goto () {
        //this.$router.push({ path: '/look/look2'}) // 路由跳转的另一种方式(path)
          this.$router.push({ name: 'Look2', params: {id1: '666'}}) // 路由跳转的另一种方式(name)
      }
  },
  beforeRouteEnter (to, from, next) {
        console.log(from, to)
        next()
      },
    beforeRouteLeave () {
        console.log(from, to)
        next()
    }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
