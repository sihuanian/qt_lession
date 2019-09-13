<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="4" class="nav-logo-wrap">
        <img src="./assets/logo.png" alt="" class="logo">
      </el-col>
      <el-col :span="20">
        <HeadNavBar />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <SideNavBar />
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template> 

<script>
import HeadNavBar from '@/components/HeadNavBar'
import SideNavBar from '@/components/SideNavBar'
export default {
  name: "App",
  components: {
    HeadNavBar,
    SideNavBar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.logo {
  height: 60px;
}
.nav-logo-wrap {
  text-align: center;
}
</style>
