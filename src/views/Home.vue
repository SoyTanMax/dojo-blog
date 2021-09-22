<template>
  <div class="home">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="columns" v-if="posts.length">
      <div class="column is-10">
        <PostList :posts="posts"/>
      </div>
      <div class="column">
        <TagCloud :posts="posts"/>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
    
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'Home',
  components: {
    PostList,
    Spinner,
    TagCloud
  },
  setup(){
    const { posts, error, load } = getPosts()
    load()

    return {posts, error}
  }
}
</script>

<style scoped>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.caja{
  width: 200px;
  height: 200px;
  background: blue;
}
</style>