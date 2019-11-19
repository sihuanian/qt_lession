<template>
  <div id="id">
    <img src="./assets/img.jpg" alt="picture loading error">
    <router-link to="/login">登录</router-link>
    <router-link to="/" exact>首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  width: 500px;
  background-color: red;
}
</style>