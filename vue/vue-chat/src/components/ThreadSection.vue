<template>
  <div class="thread-section">
    <div class="thread-count"></div>
    <ul class="thread-list">
      <thread v-for="thread in threads" :key="thread.id" :thread="thread"
       :action="thread.id === currentThread.id" @switch-thread="switchThread"></thread>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Thread from './Thread'

export default {
  components: {
    Thread
  },
  computed: mapGetters(['threads', 'currentThread']),
  methods: mapActions(['switchThread'])
}
</script>

<style scoped>

</style>
