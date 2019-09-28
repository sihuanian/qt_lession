<template>
  <div>
    <h2 :style="{
      color: theme
    }">provide inject<br>theme: {{theme}}</h2>
  </div>
</template>

<script>
export default {
  inject: {
    theme: {
      default: "green"
    }
  }
};
</script>

<style scoped>
</style>