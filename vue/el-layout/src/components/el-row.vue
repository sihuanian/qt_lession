<script>
export default {
// <template>
//   <div class="el-row">
//     <slot />
//   </div>
// </template>
  render(h) {
    let obj = h(
      'div', // 标签名
      { // 配置

      },
      ['render 函数'] // 子节点
    )
    console.log(obj)
    return obj
  },
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
</style>