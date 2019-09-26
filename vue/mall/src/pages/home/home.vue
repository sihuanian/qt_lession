<template>
  <div>
    <!-- tag属性 i标签具有a标签的跳转链接的作用 -->
    <header class="home-header wrap" :class="{'active' : headerActive}">
      <router-link tag="i" to="./category" class="iconfont icon-caidan"></router-link>
      <div class="header-search">
        <span class="app-name">M</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./search">家电返场同价11.11</router-link>
      </div>
      <router-link tag="span" to="./login" v-if="!isLogin">登录</router-link>
      <router-link tag="span" to="./user" v-else>
        <i class="iconfont icon-iconyonghu"></i>
      </router-link>
    </header>
    <nav-bar />
    <slider />
  </div>
</template>

<script>
import NavBar from '@/components/navBar'
import Slider from '@/components/common/slider'
export default {
  components: {
    NavBar,
    Slider
  },
  data() {
    return {
      headList: [],
      categoryList: [],
      isLogin: false  
    }
  },
  beforeCreate() {
    if (!this.isLogin) {
      this.$route.redirect('/login')
    }
  },
  created() {
    // load data
  },
  mounted() {
    window.addEventListener('scroll', () => {})
  },
};
</script>

<style scoped>
</style>