<template>
  <div id="app">
    <Child1 :msg="msg" :msg2="msg2" :fn="appFn" v-bind="test" :count="count"
       @addCount="countAdd" :add="countAdd" />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Child1 from './components/common/child1'
export default {
  name: 'App',
  components: {
    Child1
  },
  data() {
    return {
      msg: '给child1的礼物',
      msg2: '再次给child1的礼物',
      test: {
        a: 1,
        b: 2,
        c: {
          d: 4
        }
      },
      count: 1
    }
  },
  methods: {
    appFn () {
      console.log('我是App.vue 里面的方法')  
    },
    countAdd () {
      this.count++
    }
  },
}
</script>

<style>
</style>
