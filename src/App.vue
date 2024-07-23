<template>

  
  <!-- <navBar/> -->

  <router-view />

</template>

<script>
import {RouterView, RouterLink} from 'vue-router'
import navBar from "./components/nav-bar.vue"



export default {
  components: {
    navBar
  }

}
</script>

<style>
* {
  margin: 0;
  padding:0;
}

</style>
