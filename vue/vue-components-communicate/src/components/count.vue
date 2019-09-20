<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr />
    <h3>{{ count }}</h3>
    <!-- 调用mutation 中的方法 -->
    <button @click="add(3)">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <hr>
    <p>日期：{{ date }}</p>
    <hr>
    <p>money: {{ money }}</p>
    <button @click="makeMoneyAction">挣钱</button>
  </div>
</template>

<script>
import store from '@/store/index'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      msg: 'Hello Vuex'
    }
  },
  // computed: {
    // 获取state中的数据方法一
    // date () {
    //   return this.$store.state.date
    // }
  // },
  computed: {
    ...mapState(['date', 'money']),
    ...mapGetters(['count']), // 获取getters 中的方法二
    // count () {
    //   return this.$store.getters.count // 获取getters 中的方法一
    // }
  }, // 方法二
  // computed: mapState({ // 方法三
  //   date: state => {
  //     state.date
  //   }
  // }),
  methods: {
    ...mapMutations([ // 获取mutations 中的方法
      'add', // 方法名
      'makeMoney'
    ]),
    ...mapActions(['makeMoneyAction'])
  }, // 中间一定是数组
  store
}
</script>

<style scoped>

</style>