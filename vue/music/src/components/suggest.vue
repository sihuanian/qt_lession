<template>
  <v-scroll ref="suggest" class="suggest" :data="result" :pullup="pullup" 
    :beforeScroll="beforeScroll" @scrollToEnd="searchMore" @beforeScroll="listScroll">
    <ul class="suggest-list">
      <li class="suggest-item" v-for="(item, index) in result" :key="index" @click="selectItem(item)">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length || !hasMore">
      <span>抱歉，暂无搜索结果</span>
    </div>
  </v-scroll>
</template>


<script>
import scroll from '@/components/scroll'
import api from '@/api/index'
const limit = 20 // 返回数据数
export default {
  name: 'suggest',
  data() {
    return {
      pullup: true,
      result: [],
      hasMore: true,
      beforeScroll: true,
      page: 1
    }
  },
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  components: {
    'v-scroll': scroll
  },
  methods: {
    refresh () {
      this.$refs.suggest.refresh() // 调用子组件中的方法
    },
    selectItem (item) {},
    getDisplayName (item) {},
    searchMore () {},
    listScroll () {},
    fetchResult (page) {
      const params = {
        limit,
        offset: page - 1,
        keywords: this.query
      }
      api.MushSearch(params).then(res => {
        if (res.code === 200) {
          this.result = [...this.result, ...res.result.songs] // 下拉加载更多歌曲保留上次的歌曲
        }
      })
    }
  }
}
</script>

<style scoped>

</style>