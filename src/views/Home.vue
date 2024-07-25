<template>


<div class="main-container">

    <div class="header-wrapper">
        <img id="logo" src="/cabasapla-logo-white.png" alt="logo">
        <a class="action-btn" href="https://google.com" target="_blank">Submit Your Application</a>
    </div>

    <h1 class="tag-line-container">Your Next Home <br> in the Riviera Maya</h1>  
    
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
    background-image: url(/public/exterior.jpg);
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
}

.header-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid; */
}

#logo {
    width: 40%;
    max-width: 300px;
    /* margin-left: 45px; */
    /* border: 1px solid; */
}

.action-btn {
    cursor: pointer;
    text-decoration: none;
    padding: 20px 40px;
    border-radius: 50px;
    border: none;
    background-color: green;
    color: white;
    font-family: 'beach-party';
    font-size: 20px;
    font-weight: 100;
    letter-spacing: 1px;
}

.loop-video {
    width: 100%;
    position: absolute;
    z-index: -1000;
}

.tag-line-container {
    color: white;
    font-size: 60px;
    font-family: 'beach-party';
    text-shadow: 1px 1px 2px rgba(0,0,0,0.75);
    position: absolute;
    bottom: 50px;
    right: 100px;
    letter-spacing: 2px;
    font-weight: 100;
    text-align: right;
}

</style>