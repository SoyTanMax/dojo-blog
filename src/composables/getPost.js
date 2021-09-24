import { doc, getDoc } from "@firebase/firestore";
import { ref } from "vue";
import { db } from "../services/firebase";

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try{
            const res = await getDoc(doc(db, "posts", id));
            if(!res.exists){
                throw Error('That post does not exist')
            } else{
                post.value = {...res.data(), id: res.id}
            }
            
        }
        catch (err){
            error.value = err.message
            console.log(error.value)
        }
    }
    return {post, error, load}
}

export default getPost