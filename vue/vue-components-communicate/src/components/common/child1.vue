<template>
  <div id="child1">
    child1<br>
    msg: {{ msg }}<br>
    msg2: {{ msg2 }}<br>
    <button @click="fn">使用父组件中的方法</button><br>
    {{ a }}  {{ b }}  {{ c.d }}<br>
    <button @click="add">+</button>
    {{ count }}
  </div>
</template>

<script>
export default {
  props: ['msg', 'msg2', 'fn', 'a', 'b', 'c', 'count', 'add'],
  data() {
    return {
      
    }
  },
  methods: {
    // add () {
    //   // this.count++
    //   this.$emit('addCount')
    // }
  },
  created() {
    this.oCount = this.count
    // console.log(this.$attrs)
    console.log(this.$listeners)
  },
}
</script>

<style scoped>

</style>