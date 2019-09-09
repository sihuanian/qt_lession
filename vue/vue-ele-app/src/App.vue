<template>
  <div id="app">
    <!-- 父组件与子组件间通信 -->
    <v-header :seller="seller"/> 
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
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
    // this.$http.get('https://www.easy-mock.com/mock/5d2ed7f18a035669a02b4d3c/movie/vue-eleme-seller')
    this.$http.get('http://localhost:8080/static/seller.json')
      .then( res => {
        console.log(res.data.data)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data) // 如果有默认值，可以拼接对象
        }
      })
  }
}
</script>

<style scoped lang="stylus">
  @import './common/stylus/mixin.styl'
  .tab  
    display flex
    justify-content space-around
    padding 15px
    font-weight bold
    border-bottom 1px solid rgba(7, 17, 27, .1)
    border-1px(rgba(7, 17, 27, .1))
    & a
      display block
      font-size 14px
      color rgb(77, 85, 93)
      text-decoration none
      &.router-link-active
        color rgb(240, 20, 20)
</style>
