<template>
    <div class="post-list">
        <div class="posts-container">
            <div v-for="post in posts" :key="post.id" class="block">
                <SinglePost :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: {SinglePost},
    setup (props) {
    }
}
</script>

<style scoped>
.posts-container{
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr) );
}
</style>