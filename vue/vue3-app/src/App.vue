<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <button @click="toggle">Show/Hide highlight post</button>
    <BlogPost :post="blogPost" v-for="blogPost in visibleBlogPosts" :key="blogPost.title" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';
import BlogPost, { Post } from './components/blog.vue';
import axios from 'axios'
import { AxiosResponse } from 'axios' // 

@Component({
  components: {
    // HelloWorld,
    BlogPost
  },
})
export default class App extends Vue {
  private blogPosts: Post[] = [
    {
			title: 'My first blogpost ever!',
			body: 'Lorem ipsum dolor sit amet.',
			author: 'Elke',
			datePosted: new Date(2019, 1, 18),
		},
		{
			title: 'Look I am blogging!',
			body: 'Hurray for me, this is my second post!',
			author: 'Elke',
			datePosted: new Date(2019, 1, 19),
		},
		{
			title: 'Another one?!',
			body: 'Another one!',
			author: 'Elke',
      datePosted: new Date(2019, 1, 20),
      highlight: true
		}
  ]

  public showHighLight: boolean = true

  public get visibleBlogPosts () {
    return this.blogPosts.filter((item: Post) => {
      return item.highlight === undefined || item.highlight === this.showHighLight
    })
  }

  public toggle () {
    this.showHighLight = !this.showHighLight
  }

  public created() {
    axios.get('/request.json').then((res: AxiosResponse) => {
      console.log(res)
      this.blogPosts = res.data.blogposts.map((val: Post) => {
        title: val.title
        body: val.body
        author: val.author
        datePosted: val.datePosted
        highlight: val.highlight
      })
    })
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
