<template>
  <div id="app">
    <!-- 父组件与子组件间通信 -->
    <v-header :seller="seller"/> 
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header'
export default {
  components: {
    'v-header': header // 与html5 标签重名另取一个名字
  },
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5d2ed7f18a035669a02b4d3c/movie/vue-eleme-seller')
      .then( res => {
        console.log(res.data.data)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data) // 如果有默认值，可以拼接对象
        }
      })
  }
}
</script>

<style>
</style>
