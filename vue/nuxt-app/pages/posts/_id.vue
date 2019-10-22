<template>
  <div class="container">
    <h1 class="display-1">
      Post {{$route.params.id}}
    </h1>
  </div>
</template>
<script>
export default {
  // 验证参数
  validate ({ params }) {
    return /^\d+/.test(params.id)
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>