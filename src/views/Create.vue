<template>
    <div class="create">
        <form @submit.prevent="submit">
            <div class="block">
                <label class="label">Title:</label>
                <input class="input" v-model="title" type="text" required/>
            </div>
            <div class="block">
                <label class="label">Content:</label>
                <textarea class="textarea" v-model="body" type="text" required/>
            </div>
            <div class="block">
                <label class="label">Tags( hit enter to add tags)</label>
                <input 
                    class="input"
                    v-model="tag" 
                    type="text" 
                    @keydown.enter.prevent="handleKeydown"
                />
            </div>
            <div class="block tags">
                <div v-for="tag in tags" :key="tag" class="tag">
                    #{{ tag }}
                </div>
            </div>
            <button class="button">Add Post</button>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { addDoc, collection, Timestamp } from '@firebase/firestore'
import { db } from '../services/firebase'

export default {
    setup () {
        const title = ref("")
        const body = ref("")
        const tag = ref("")
        const tags = ref([])

        const router = useRouter()
        

        const handleKeydown = () => {
            if(!tags.value.includes(tag.value)){
                tag.value = tag.value.replace(/\s/, "")
                tags.value.push(tag.value)
            }
            tag.value = ""
        }
        
        const submit = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value,
                createdAt: Timestamp.now()
            }
            await addDoc(collection(db, "posts"), post)
            
            router.push({name: 'Home'})
        }

        return {title, body, tag, handleKeydown, tags, submit}
    }
}
</script>

<style scoped>
form {
    max-width: 480px;
    margin: 0 auto; 
    text-align: left;
}
.button{
    background: rgb(132, 41, 218);
    color: white;
    border: 0;
    transition: 450ms;
}
.button:hover{
    background: white;
    color: rgb(132, 41, 218);
    border: 1px solid rgb(132, 41, 218);
    transition: 450ms;
}
input:focus, textarea:focus{
    border: 1px solid rgb(132, 41, 218);
}
</style>