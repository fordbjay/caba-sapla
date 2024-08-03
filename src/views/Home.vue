<template>

    <mainHeader/>

    <info/>

    <units/>

    <neighborhood/>

    <exterior/>

    <drone/>



</template>

<script>
import mainHeader from '../components/main-header.vue'
import drone from '../components/drone.vue'
import info from '../components/info.vue'
import units from '../components/units.vue'
import neighborhood from '../components/neighborhood.vue'
import exterior from '../components/exterior.vue'

  export default {

    components: { mainHeader, drone, info, units, neighborhood, exterior }

  }
  
</script>

<style scoped>

</style>