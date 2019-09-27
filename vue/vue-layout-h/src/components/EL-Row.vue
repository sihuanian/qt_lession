<script>
export default {
// <div class="el-row">
//   <slot></slot>
// </div>
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gap: {
      type: Number
    }
  },
  render(h) {
    // h === createElement
    return h (
      this.tag,
      {
        class: ['el-row']
      },
      this.$slots.default
    )
  }
}
</script>
<style scoped>
  .el-row {
    width: 100%;
    display: flex;
  }
</style>