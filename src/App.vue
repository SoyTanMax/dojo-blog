<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  setup () {
    

    return {}
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 90px auto;
}
</style>
