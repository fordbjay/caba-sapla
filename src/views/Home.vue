<template>


<div class="main-container">

    <img id="logo" src="/cabasapla-logo-white.png" alt="logo">
    <a class="action-btn" href="https://google.com" target="_blank">Submit Application</a>

    <!-- <h1 class="tag-line-container">Your Next Home in the Riviera Maya</h1>   -->
    

    
</div>

<video class="loop-video" autoplay loop muted src="/cabasapla-drone-1000kbps.mp4"></video>

</template>

<script>
import navBar from '../components/nav-bar.vue';

  export default {

    components: {
        navBar

    },

    data() {
        return {

        }
    },

    methods: {

    },

    computed: {

    }

  }
  
</script>

<style scoped>

.main-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    height: max-content;
    background-image: url(/public/exterior.jpg);
    height: 750px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
}

#logo {
    width: 40%;
    max-width: 300px;
    margin-left: 45px;
}

.action-btn {
    cursor: pointer;
    text-decoration: none;
    margin: 60px;
    padding: 20px 40px;
    border-radius: 50px;
    border: none;
    background-color: green;
    color: white;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}

.loop-video {
    width: 100%;
    position: absolute;
    z-index: -1000;
}

/* .tag-line-container {
    color: white;
    font-size: 50px;
    font-family: cursive;
    position: absolute;
    bottom: 20px;
    left: 20px;
    border:1px solid;
} */

</style>