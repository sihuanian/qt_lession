<template>
  <div class="switch-img-box" id="ec-slide-box" :style="{width: swidth + 'px'}">
    幻灯片
  </div>
</template>

<script>
export default {
  name: 'EcSlide', // 自定义组件必须加入
  // 组件内部数据
  data () {
    return {
      timer: null, // 定时器 组件自己打理
    }
  },
  // 外界的传参
  // ['time', 'autoplay']
  props: {
    time: {
      type: Number,
      default: 4000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    swidth: {
      type: Number
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<style lang="stylus" scoped>
// stylus stylus-loader
.switch-img-box
  width 100%
  height 100%
  position relative
</style>