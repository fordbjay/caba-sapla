<template>

    <opening/>

    <info/>

    <units/>

    <googleMap/>

    <exterior/>

    <drone/>

</template>

<script>
import opening from '../components/opening.vue'
import info from '../components/info.vue'
import units from '../components/units.vue'
import googleMap from '../components/google-map.vue'
import exterior from '../components/exterior.vue'
import drone from '../components/drone.vue'

  export default {

    components: { opening, info, units, googleMap, exterior, drone }

  }
  
</script>

<style scoped>

</style>