<template>
    <div class="post box">
        <router-link :to="{name: 'Details', params: {id: post.id}}">
            <h3 class="is-size-4 has-text-weight-bold is-capitalized">{{ post.title }}</h3>
        </router-link>
        <p class="is-size-7 snippet">{{ snippet }}</p>
        <div class="tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
        </div>
        
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'SinglePost',
    props: ['post'],
    setup (props) {
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '...'
        })

        return { snippet }
    }
}
</script>

<style scoped>
.post{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(151, 64, 233);
    border-radius: 12px;
    padding: 24px;
    min-height: 230px;
}
a{
    color: white;
}
a:hover{
    color: rgb(90, 20, 148);
}
.tag{
    margin-right: 8px;
    background: white;
}
.snippet{
    margin-top: 12px;
    margin-bottom: 12px;
    color: white
}
</style>