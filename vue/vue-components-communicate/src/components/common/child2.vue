<template>
  <div>
    <p @click="emit">{{ msg }}</p>
    <p @click="emitOther">{{ msg2 }}</p>
    <button @click="send">传值给child3</button>
    <button @click="sendApp">传值给App</button>
  </div>
</template>

<script>
// import Bus from '../../bus/index'
export default {
  name: 'demo',
  data() {
    return {
      msg: '女主人派发的事件',
      msg2: '女主人又派发了事件',
      toChild3: 'child2给child3的值',
      toApp: 'child2给App的值'
    }
  },
  created() {
    this.$on(['wash_clothes', 'wash_floor'], (arg) => {
      console.log(arg)
    })
    // this.$on('wash_clothes', (arr) => {
    //   console.log(`男主人洗完${arr[0]}、${arr[1]}的衣服`)
    // })
    // this.$on('wash_floor', () => {
    //   console.log('男主人拖地')
    // })
  },
  beforeDestroy() {
    this.$off(['wash_clothes', 'wash_floor'])
  },
  methods: {
    emit () {
      this.$emit('wash_clothes', ['baby', 'man'])
    },
    emitOther () {
      this.$emit('wash_floor', 'good')
    },
    send () {
      // Bus.$emit('toChild3', this.toChild3)
      this.$bus.$emit('toChild3', this.toChild3)
    },
    sendApp () {
      this.$bus.$emit('toApp', this.toApp)
    }
  }
}
</script>

<style scoped>

</style>