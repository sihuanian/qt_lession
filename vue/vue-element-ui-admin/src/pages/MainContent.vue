<template>
  <div class="maincontent">
    <el-breadcrumb separator="/" class="breadcrumb">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item> -->
      <el-breadcrumb-item v-for="(route, index) in $route.matched" :key="index">{{route.meta.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view />
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route.matched)
  }
};
</script>

<style scoped>
.breadcrumb {
  margin-top: 20px;
}
.maincontent {
  margin-left: 20px;
}
</style>