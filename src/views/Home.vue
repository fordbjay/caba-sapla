<template>
<div class="video-container">
    <video class="loop-video" autoplay loop muted src="/cabasapla-drone-1000kbps.mp4"></video>
</div>

<div class="main-container">
    <div class="logo-container">
        <img id="logo" src="/cabasapla-logo-white.png" alt="logo">
    </div>
    
</div>

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

#logo {
    width: 300px;
    margin-left: 45px;
    /* filter: invert(100%);  */
}

.logo-container {
    background-color: rgba(0, 0, 0, 0.75);
    width: max-content;
    padding-right: 20px;
    border-bottom-right-radius: 100px;
}

.loop-video {
    width: 100%;
}

.video-container {
    width: 100vw;
    overflow: hidden;
    height: 100%;
    position: absolute;
    z-index: -1000;
}

</style>