<template>
    <div class="details">
        <div v-if="error">{{ error }}</div>
        <div v-if="post" class="post">
            <h3 class="is-size-3 has-text-weight-bold">{{ post.title }}</h3>
            <p class="pre block">{{ post.body }}</p>
            <div class="tags">
                <div class="tag is-size-6" v-for="tag in post.tags" :key="tag">
                    #{{ tag }}
                </div>
            </div>
            <div class="buttons is-right">
                <button class="button is-danger" @click="deletePost">delete</button>
            </div>
            
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import {useRouter} from 'vue-router'
import { deleteDoc, doc } from '@firebase/firestore'
import { db } from '../services/firebase'

export default {
    props: ['id'],
    components: { Spinner },
    setup (props) {
        const router = useRouter()

        const {post, error, load} = getPost(props.id)
        load()

        const deletePost = async () => {
            await deleteDoc(doc(db, "posts", props.id))
            router.push({name: 'Home'})
        }

        

        return {post, error, deletePost}
    }
}
</script>

<style scoped>
.details {
    max-width: 80%;
    margin: 0 auto;
    text-align: left;
}
h3{
   color: rgb(132, 41, 218);
}
.post p{
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre{
    white-space: pre-wrap;
}
</style>