<template>
<div class="main-container">
    <img id="logo" src="/cabasapla-logo-white.png" alt="logo">
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

.main-container {
}

#logo {
    width: 300px;
    margin-left: 45px;
    filter: invert(100%); 
}

</style>