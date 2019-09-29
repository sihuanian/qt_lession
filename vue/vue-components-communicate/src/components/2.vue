<template>
  <div>
    <!-- v-bind="$attrs" 可以将本文件的$attrs 传到下层 vue文件 -->
    <Three v-bind="$attrs" twoToThree="twoToThree" />
  </div>
</template>

<script>
import Three from './3'
export default {
  props: {
    oneToTwo1: {
      type: String
    }
  },
  inheritAttrs: false,
  data() {
    return {
      twoToThree: '2 to 3'
    }
  },
  created() {
    console.log(this.$attrs)
  },
  components: {
    Three
  }
}
</script>

<style scoped>

</style>