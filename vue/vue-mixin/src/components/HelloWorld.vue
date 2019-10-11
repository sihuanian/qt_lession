<template>
  <div>
    <my-dialog />
    <my-loading />
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import MyLoading from './MyLoading'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    MyDialog,
    MyLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
