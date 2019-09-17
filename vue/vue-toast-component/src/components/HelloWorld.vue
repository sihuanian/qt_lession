<template>
  <div>
    <button @click="handleShow">购买</button>
    <!-- <Toast msg="测试弹窗1" :visiable="visiable" /> -->
  </div>
</template>

<script>
// import Toast from './Toast/index'
import showMessage from './Toast/index.js'
export default {
  name: 'HelloWorld',
  components: {
    // Toast
  },
  data () {
    return {
      visiable: false
    }
  },
  methods: {
    handleShow () {
      // this.visiable = true
      // setTimeout(() => {
      //   this.visiable = false
      // }, 3000)
      showMessage('没到开售时间', 10000)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
