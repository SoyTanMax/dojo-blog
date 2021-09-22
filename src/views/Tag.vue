<template>
    <div class="tag-list">
        <div class="error" v-if="error">{{ error }}</div>
        <div class="columns" v-if="posts.length">
            <div class="column is-10">
              <PostList :posts="filteredPosts"/>
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
import { computed } from 'vue'
import {useRoute} from 'vue-router'

export default {
  components: {PostList,Spinner,TagCloud},
  setup(){

    const route = useRoute()
    const { posts, error, load } = getPosts()
    load()

    const filteredPosts = computed(()=>{
        return posts.value.filter((p)=>p.tags.includes(route.params.tag))
    })

    return {posts, error,filteredPosts}
  }
}
</script>

<style scoped>
.tag-list{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>