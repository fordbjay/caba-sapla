<template>
  <router-view />
  <router-link :to="{name: 'home'}">Home</router-link>
  <router-link :to="{name: 'about'}">About</router-link>
</template>

<script setup>
import {RouterView, RouterLink} from 'vue-router'

</script>

<style>
* {
  margin: 0;
  padding:0;
}

</style>
