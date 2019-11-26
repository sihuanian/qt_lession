<template>
  <div class="blogpost" :class="{highlight: post.highlight}">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <p class="meta">written by {{ post.author }} on {{ date }}</p>
    <p v-if="post.highlight">This post is highlight!</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
export interface Post {
  title: string;
  body: string;
  author: string;
  datePosted: Date;
  highlight?: boolean;
}
@Component
export default class BlogPost extends Vue {
  @Prop() private post!: Post // ! 必需有的属性一定有post,不会为null undefined

  get date() {
    return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`
  }
}
</script>
<style lang="stylus" scoped>
.blogpost
  &.highlight
    border 1px solid #f4d942
    background #fff3b2
  h2
    text-decoration underline
  .meta
    font-style italic
</style>