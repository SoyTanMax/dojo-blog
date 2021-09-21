<template>
    <nav class="navbar">
        <div class="navbar-item">
            <router-link :to="{name: 'Home'}">The dojo blog</router-link>
        </div>
        <router-link :to="{name: 'Create'}">
            <button class="button">
                Create post
            </button>
        </router-link>
    </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'Navbar',
  setup(){
    const showNav = ref(false)

    return {showNav}
  }
}
</script>

<style scoped>
.navbar{
    display: flex;
    margin: 24px auto;
    justify-content: space-between;
    max-width: 90%;
}
.navbar-item{
    display: inline-block;
}
.button{
    color: white;
    border: none;
    background: rgb(151, 64, 233);
}
</style>