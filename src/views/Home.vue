<template>
  <div class="home">
    <h1>Home component</h1>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="" v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>loading...</div>
    
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
export default {
  name: 'Home',
  components: {
    PostList
  },
  setup(){
    const { posts, error, load } = getPosts()
    load()

    return {posts, error}
  }
}
</script>
