<template>
  <div class="ratings-container" ref="ratingsContainer">
    <div class="score-container">
    <div class="ratings-left">
      <div class="ratings-left__top">{{ seller.score }}</div>
      <div class="ratings-left__middle">综合评分</div>
      <div class="ratings-left__bottom">高于周边商家{{ seller.rankRate }}%</div>
    </div>
    <div class="ratings-right">
      <div class="ratings-right__top">
        <span class="title">服务态度</span>
        <div class="star">
          <span v-for="(star, index) in stars.serviceScore" :key="index" class="star-item" :class="star">★</span>
        </div>
        <span class="score">{{ seller.serviceScore }}</span>
      </div>
      <div class="ratings-right__middle">
        <span class="title">商品评分</span>
        <div class="star">
          <span v-for="(star, index) in stars.foodScore" :key="index" class="star-item" :class="star">★</span>
        </div>
        <span class="score">{{ seller.foodScore }}</span>
      </div>
      <div class="ratings-right__bottom">送达时间<span>{{ seller.deliveryTime }}分钟</span></div>
    </div>
    </div>
    <div class="split"></div>
    <div class="ratingselect">
      <div class="rating-type border-1px">
        <span class="block positive active">全部
          <span class="count">24</span>
        </span>
        <span class="block positive">满意
          <span class="count">18</span>
        </span>
        <span class="block negative">不满意
          <span class="count">6</span>
        </span>
      </div>
      <div class="switch on" @click="handleShow">
        <span class="icon-check_circle"></span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
    <div class="ratings-wrapper">
      <ul>
        <li class="rating-item" v-for="(item, index) in ratings" :key="index" v-show="isShow">
          <div class="avatar">
            <img :src="item.avatar" width="28" height="28" alt="">
          </div>
          <div class="content">
            <h1 class="name">{{item.username}}</h1>
            <div class="star-wrapper">
              <div class="star star-24">
                <span class="star-item on" v-for="(star, i) in ratings[index].score" :key="i">★</span>
                <span class="star-item off" v-for="(s, k) in (5 - ratings[index].score)" :key="k">★</span>
              </div>
              <span class="delivery">{{item.deliveryTime}}</span>
            </div>
            <p class="text">{{item.text}}</p>
            <div class="recommend">
              <span class="icon-thumb_up"></span>
              <span class="item" v-for="(food, idx) in item.recommend" :key="idx">{{food}}</span>
            </div>
            <div class="time">
              {{format[index]}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      stars: {},
      ratings: [],
      isShow: true
    }
  },
  props: {
    seller: {
      type: Object,
    }
  },
  computed: {
    format () {
      let rateTime = this.ratings.map((item) => {
        let time = item.rateTime
        let formatTime = new Date(time).toLocaleString().replace(/\//g, '-')
        // 2016-7-21 下午5:06:04
        let timestr = formatTime.split(' ')
        if (timestr[1].slice(0,1) === '上') {
          formatTime = timestr[0] + ' ' + timestr[1].slice(2, 7)
          if (formatTime.endsWith(':')) {
            formatTime = formatTime.slice(0, -1)
          }
        } else {
          formatTime = timestr[0] + ' ' + (timestr[1].slice(2, 6).match(/\d+\.?/g)[0] * 1 + 12) + timestr[1].slice(3, 6)
        }
        return formatTime
      })
      return rateTime
    }
  },
  created () {
    this.$http.get('../../../static/rating.json')
      .then(res => {
        console.log(res.data.data)
        this.ratings = res.data.data
      })
    this.showStar(this.seller.serviceScore, 'serviceScore')
    this.showStar(this.seller.foodScore, 'foodScore')
    this.$nextTick(() => {
      this.initScorll()
    })
  },
  methods: {
    showStar (number, property) {
      let star = Math.round(number)
      let on = []
      for (let i = 0; i < star; i++) {
        on.push('on')
      }
      console.log(on)
      for (let i = 0; i < 5 - star; i++) {
        on.push('off')
      }
      console.log(on)
      this.stars[property] = on
    },
    initScorll () {
      console.log('betterscroll')
      this.ratings = new BScroll(this.$refs.ratingsContainer, {
        click: true // 保留点击事件
      })
    },
    handleShow () {

    }
  }
};
</script>

<style scoped lang="stylus">
.score-container
  display flex
  padding 18px 0
  .ratings-left
    flex 0 0 137px
    padding 6px 0
    width 137px
    border-right 1px solid rgba(7,17,27,.1)
    text-align center
    .ratings-left__top
      margin-bottom 6px
      line-height 28px
      font-size 24px
      color #f90
    .ratings-left__middle
      margin-bottom: 8px;
      line-height 12px
      font-size 12px
      color #07111b
    .ratings-left__bottom
      line-heigh 10px
      font-size 10px
      color #93999f
  .ratings-right
    flex 1
    padding 6px 0 6px 24px
    .ratings-right__top,
    .ratings-right__middle
      margin-bottom 8px
      font-size 0
    .ratings-right__bottom
      line-height 18px
      font-size 12px
      color #07111b
      span 
        color #93999f
        margin-left 12px
    .title
      display inline-block
      line-height 18px
      vertical-align top
      font-size 12px
      color #07111b
    .score
      display inline-block
      line-height 18px
      vertical-align top
      font-size 12px
      color #f90
    .star
      display inline-block
      margin 0 12px
      vertical-align top
      font-size 20px
      .on
        color #ff9900
      .off
        color #d4d6d9
.split
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7,17,27,.1);
  border-bottom: 1px solid rgba(7,17,27,.1);
  background: #f3f5f7;
.ratingselect
  .rating-type 
    padding 18px 0
    margin 0 18px
    position relative
    font-size 0
    &:after
      display block
      position absolute
      left 0
      bottom 0
      width 100%
      border-top  1px solid rgba(7,17,27,.1)
      content " "
    .block.positive.active 
      background #00a0dc
    .block.positive
        background rgba(0,160,220,.2)
    .block.active
      color #fff
    .block
      display inline-block
      padding 8px 12px
      margin-right 8px
      line-height 16px
      border-radius 1px
      font-size 12px
      color #4d555d
    .block.negative
      background rgba(77,85,93,.2)
  .switch 
    padding 12px 18px
    line-height 24px
    border-bottom 1px solid rgba(7,17,27,.1)
    color #93999f
    font-size 0
    .text
      display inline-block
      vertical-align top
      font-size 12px
    &.on .icon-check_circle 
      color #00c850
    .icon-check_circle
      display inline-block
      vertical-align top
      margin-right 4px
      font-size 24px
.ratings-wrapper 
  padding 0 18px
  .rating-item
    display -webkit-box
    display -ms-flexbox
    display flex
    padding 18px 0
    position relative
    .avatar
      -webkit-box-flex 0
      -ms-flex 0 0 28px
      flex 0 0 28px
      width 28px
      margin-right 12px
      img 
        border-radius 50%
    .content
      position relative
      -webkit-box-flex 1
      -ms-flex 1
      flex 1
      .name
        margin-bottom 4px
        line-height 12px
        font-size 10px
        color #07111b
      .star-wrapper 
        margin-bottom 6px
        font-size 0
        .star
          display inline-block
          margin-right 6px
          vertical-align top
          .star-item 
            width 10px
            height 10px
            margin-right 3px
            background-size 10px 10px
            font-size 10px
          .on
            color #f90
          .off 
            color #d4d6d9
        .delivery
          display inline-block
          vertical-align top
          line-height 12px
          font-size 10px
          color #93999f
      .text
        margin-bottom 8px
        line-height 18px
        color #07111b
        font-size 12px
      .recommend
        line-height 16px
        font-size 0
        .icon-thumb_up 
          color #00a0dc
          display inline-block
          margin 0 8px 4px 0
          font-size 9px
        .item
          display inline-block
          margin 0 8px 4px 0
          font-size 9px
          padding 0 6px
          border 1px solid rgba(7,17,27,.1)
          border-radius 1px
          color #93999f
          background #fff
      .time
        position absolute
        top 0
        right 0
        line-height 12px
        font-size 10px
        color #93999f

</style>