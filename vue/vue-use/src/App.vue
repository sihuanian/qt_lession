<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <el-button type="success">确定</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AVue from './AVue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    this.$message('请确定支付，有风险')
    // const av = new AVue({
    //   methods: {
    //     say () {
    //       this.$alert()
    //     }
    //   }
    // })
    // av.say()
    this.$alert('alert')
  },
  created() {
    class SingleDog {
      show () {
        console.log('我是一个单例对象')
      }
      static getInstance () {
        if (!SingleDog.instance) {
          SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
      }
    }
    const s1 = SingleDog.getInstance()
    const s2 = SingleDog.getInstance()
    console.log(s1 === s2)
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
