<template>
    <div>
        <div v-if="error">{{ error }}</div>
        <div v-if="post" class="post">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <div v-for="tag in post.tags" :key="tag">
                #{{ tag }}
            </div>
        </div>
    </div>
</template>

<script>
import getPost from '../composables/getPost'

export default {
    props: ['id'],
    setup (props) {
        const {post, error, load} = getPost(props.id)
        load()
        return {post, error}
    }
}
</script>

<style scoped>

</style>