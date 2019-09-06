<template>
  <div class="header">
    <div class="content-wrap">
      <!-- 头像 -->
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <!-- 右侧描述 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="support">
          <span class="icon"></span>
          <!-- 当表达式有三级时需要判断二级是否存在，README.md -->
          <span class="text" v-if="seller.supports">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <!-- 优惠总数 -->
      <div class="support-count">
        <span class="count" v-if="seller.supports">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      classMap: []
    }
  },
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/mixin'
  .header 
    position relative
    overflow hidden
    color #fff
    background rgba(7, 17, 27, .5)
    .content-wrap
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        vertical-align top
        img 
          border-radius 2px
      .content
        display inline-block
        margin-left 16px
        .title
          margin 2px 0 8px 0
          .brand
            display inline-block
            vertical-align top
            width 30px
            height 18px
            bg-image('./header/brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 16px
            font-size 6px
            line-height 18px
            font-weight bold
        .description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .support
          font-size 12px
      .support-count
        font-size 12px
</style>