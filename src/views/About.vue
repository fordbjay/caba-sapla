<template>
      <div class="nav-bar">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'about'}">About</router-link>
    </div>
</template>

<script>

  export default {

    components: {

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

</style>

<!-- TODO -->

<!-- MOVE MODAL TO OWN COMPONENT WITH SRC PROPS -->
<!-- WHEN CERTAIN HEIGHT, MAKE MODAL NOT OPEN??? -->