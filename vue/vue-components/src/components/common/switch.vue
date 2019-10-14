<template>
  <div>
    <button @click="open">开关</button>    
    <button @click="todo">点击</button>
    <child />
  </div>
</template>

<script>
import child from './child'
export default {
  components: {
    child
  },
  mounted() {
    this.$on('test', text => {
      console.log(text)
    })
  },
  methods: {
    data() {
      return {
        switch: false
      }
    },
    open () {
      // this.switch = true
      // this.$emit('test', '666')
    },
    todo() {
      // if (this.switch === true) {
      //   console.log(666)
      // }
      // this.$on('test', (text) => {
      //   console.log(text)
      // })
    }
  },
}
</script>

<style scoped>

</style>