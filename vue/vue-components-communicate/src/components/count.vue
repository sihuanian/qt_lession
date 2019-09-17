<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr />
    <h3>{{ $store.state.count }}</h3>
    <!-- 调用mutation 中的方法 -->
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
import store from '@/store/index'
export default {
  data() {
    return {
      msg: 'Hello Vuex'
    }
  },
  store
}
</script>

<style scoped>

</style>