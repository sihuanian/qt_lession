<template>
  <div id="app">
    <slide-search :showSearchPage="showSearchPage"/>
    <ul class="main">
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
      <li>123456</li>
    </ul>
  </div>
</template>

<script>
import SlideSearch from './components/SlideSearch/index'

export default {
  name: 'App',
  components: {
    SlideSearch
  },
  data() {
    return {
      showSearchPage: false
    }
  },
  // 已经转化为真实的 DOM
  mounted() {
    const ul = document.querySelector('.main')
    ul.addEventListener('scroll', (e) => {
      if (ul.scrollTop === 0  ) {
        this.showSearchPage = false
      }
      if (ul.scrollTop > 10) {
        this.showSearchPage = true
      }
    })

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  height: calc(100vh - 94px);
  overflow: scroll;
}
li {
  list-style: none;
  margin-top: 20px;
}
</style>
