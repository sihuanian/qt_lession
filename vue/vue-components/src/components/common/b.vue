<template>
  <div class="components-B">
    组件B -- {{ send }} -- {{ name }} -- {{ age }}
    <span @click="check" style="color: red;">点击一下</span>
  </div>
</template>

<script>
export default {
  props: ['send'],
  inject: ['name', 'age', 'app'],
  methods: {
    check () {
      console.log(app)
      this.app.userInfo()
    }
  },
}
</script>

<style scoped>

</style>