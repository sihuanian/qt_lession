<template>
  <div id="app">
    <HoverZoom :smallSrc="smallImage" :bigSrc="bigImge"/>
    <Parent />
  </div>
</template>

<script>
import HoverZoom from './components/HoverZoom'
import Parent from './components/Parent'

export default {
  name: 'App',
  components: {
    HoverZoom,
    Parent
  },
  data() {
    return {
      smallImage: '../static/small.jpg',
      bigImge: '../static/big.jpg'
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
