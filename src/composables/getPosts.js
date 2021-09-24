import { collection, getDocs, orderBy, query } from '@firebase/firestore'
import {ref} from 'vue'
import { db } from '../services/firebase'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        const q = query(collection(db, 'posts'), orderBy("createdAt", "desc"))
        const res = await getDocs(q);
        posts.value = res.docs.map(doc => {
          return {...doc.data(), id: doc.id}
        });
      }
      catch (error) {
        error.value = error.message
      }
    }
    return {posts, error, load}
}

export default getPosts