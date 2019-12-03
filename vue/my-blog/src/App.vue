<template>
  <div id="app">
    <Nav v-if="isShowNav" />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Nav from '@/components/nav.vue';
// import Component from 'vue-class-component';

@Component({
  components: {
    Nav,
  },
})

interface Route {
  path: string;
}

export default class App extends Vue {
  private isShowNav: boolean = false;

  beforeRouteUpdate(to: Route, from: Route, next: any) {
    console.log(to.path);
    if (to.path === '/') {
      this.isShowNav = false
    } else {
      this.isShowNav = true
    }
  }

  // @Watch('$route')
  // routeChange(val, oldVal) {

  // }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
