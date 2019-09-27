<script>
export default {
  props: {
    span: {
      type: Number
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: {
      type: Number
    }
  },
  render(h) {
    let parent = this.$parent // 获取到父组件
    let gap = parent.gap
    console.log(gap)
    return h(
      this.tag,
      {
        class: ['el-col', `el-col-span-${this.span}`, `el-col-offset-${this.offset}`]
      },
      this.$slots.default
    )
  }
}
</script>

<style scoped lang="scss">
.el-col {
  background-color: #ccc;
}
@for $i from 0 through 24 {
  .el-col-span-#{$i} {
    flex: 0 0 (1 / 24 * $i *100) * 1%;
  }
}
@for $i from 0 through 24 {
  .el-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }
}
</style>