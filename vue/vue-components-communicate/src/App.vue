<template>
  <div id="app">
    <!-- <p>child1-------------------</p>
    <Child1 :msg="msg" :msg2="msg2" :fn="appFn" v-bind="test" :count="count"
       @addCount="countAdd" :add="countAdd" /> -->
    <!-- <p>child2-------------------</p>
    <Child2 /> -->
    <!-- <p>child3-------------------</p>
    <Child3 @fromChild="fromChild" />
    <span>{{ message }}</span> -->
    <One />
    <First />
    <router-view/>
  </div>
</template>

<script>
import Child1 from './components/common/child1'
import Child2 from './components/common/child2'
import Child3 from './components/common/child3'
import One from './components/1'
import First from './components/first'
export default {
  name: 'App',
  components: {
    Child1,
    Child2,
    Child3,
    One,
    First
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
      count: 1,
      message: '父组件默认的数据'
    }
  },
  methods: {
    appFn () {
      console.log('我是App.vue 里面的方法')  
    },
    countAdd () {
      this.count++
    },
    fromChild (arg) {
      // console.log(arg)
      this.message = arg
    }
  },
  created() {
    this.$bus.$on('toApp', arg => {
      console.log(arg)
    })
  }
}
</script>

<style>
</style>
