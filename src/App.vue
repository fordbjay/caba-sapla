<template>

  <router-view />

</template>

<script>
import {RouterView, RouterLink} from 'vue-router'

</script>

<style>

* {
  margin: 0;
  padding:0;
}

*::before,
*::after {
    box-sizing: border-box;
}

@font-face {
    font-family: beach-party;
    src: url('/beach-party.otf');
}


</style>
