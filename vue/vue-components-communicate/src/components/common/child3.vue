<template>
  <div>
    <p @click="change">{{ msg }}</p>
  </div>
</template>

<script>
// import Bus from '@/bus/index'
export default {
  data() {
    return {
      msg: '点击改变数据'
    }
  },
  methods: {
    change () {
      this.$emit('fromChild', this.msg)
    }
  },
  created() {
    // Bus.$on('toChild3', (param) => {
    //   console.log(param)
    // })
    this.$bus.$on('toChild3', param => {
      console.log(param)
    })
  },
  beforeDestroy() {
    // 使用了$on 最好销毁掉事件监听
    this.$bus.$off('toChild3')
  }
}
</script>

<style scoped>

</style>