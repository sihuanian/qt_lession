<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search-box ref="searchBox" @query="onQueryChange"></v-search-box>
    </div>
    <div ref="shortcutWrapper" class="shortcut-wrapper" v-show="!query">
      <!-- 热门搜索 -->
      <v-scroll>
        <ul>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
        </ul>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
export default {
  data() {
    return {
      query: false // 临时使用的值
    }
  },
  components: {
    'v-search-box': searchBox,
    'v-scroll': scroll
  },
  methods: {
    onQueryChange () {

    }
  },
}
</script>

<style lang="stylus" scoped>

</style>