<template>
  <div>
    <Two :oneToTwo="oneToTwo" :oneToTwo1="oneToTwo1" />
  </div>
</template>

<script>
import Two from './2'
export default {
  data() {
    return {
      oneToTwo: '1 to 2', // props不接收，默认会出现在标签属性中（inheritAttrs = true默认）
      oneToTwo1: 'one to two'
    }
  },
  components: {
    Two
  },
  provide: {
    oneToThree: 'provide/inject'
  },
  created() {
    console.log(this.$children) 
  }
}
</script>

<style scoped>

</style>