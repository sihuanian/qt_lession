<template>
  <div class="subMenu">
    <span @click="change">
      <i v-show="!isShow">+</i>
      <i v-show="isShow">-</i>
      <!-- slot -->
      <slot name="title"></slot>
    </span>
    <li v-show="isShow">
      <slot></slot>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    change () {
      this.isShow = !this.isShow
    }
  }
};
</script>

<style scoped lang="stylus">
  .subMenu 
    span 
      display block
      padding 5px
      background #4cb4e7
      color #fff
      border-bottom 1px solid #fff
      position relative
      i
        position absolute
        right 10px
        bottom 5px
        font-style normal
        font-weight bold

  li
    background #e2dbb2
</style>