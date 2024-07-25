<template>

    <mainHeader/>

    <info/>

    <drone/>

</template>

<script>
import mainHeader from '../components/main-header.vue'
import drone from '../components/drone.vue'
import info from '../components/info.vue'

  export default {

    components: {
        mainHeader, drone, info

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