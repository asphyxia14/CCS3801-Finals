<script setup lang="ts">
import AboutView from './views/AboutView.vue';
import NavBar from './components/NavBar.vue';
import ReviewsView from './views/ReviewsView.vue'

</script>

<template>
  <NavBar />
  <RouterView />
  <AboutView />
</template>

<style scoped></style>
