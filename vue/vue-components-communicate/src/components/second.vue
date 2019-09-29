<template>
  <!-- 当这个input 中的 value 改变时会触发这个input 事件，会改变这个父组件的 msg -->
  <input @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  props: ['value'] // msg
}
</script>

<style scoped>

</style>