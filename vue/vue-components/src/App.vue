<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 可以直接使用子组件的方法 -->
    <!-- <i-button size="large" @click.native="handleClick">hello world!</i-button> -->
    <router-view/>
  </div>
</template>

<script>
import IButton from './components/common/button'
export default {
  name: 'App',
  components: {
    IButton
  },
  methods: {
   handleClick (e) {
     console.log('000')
   },
   userInfo () {
     console.log('lakers')
   }
  },
  data() {
    return {
      user: 'sihuanian',
      age: 21,
      gender: 'F'
    }
  },
  provide () {
    // age: 18,
    return {
      app: this
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
