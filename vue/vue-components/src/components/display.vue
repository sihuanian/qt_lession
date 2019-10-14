<template>
  <div ref="display">
    
  </div>
</template>

<script>
import Vue from 'vue'
import randomStr from '../../utils/random_str.js'
export default {
  data() {
    return {
      html: '',
      css: '',
      js: ''
    }
  },
  props: {
    code: {
      type: string,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>