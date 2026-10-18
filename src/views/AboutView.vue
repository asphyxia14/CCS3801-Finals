<script setup lang="ts">
import AboutHeroSection from '@/Sections/About/AboutHeroSection.vue'
import StorySection from '@/Sections/About/StorySection.vue'
import VibeGallerySection from '@/Sections/About/VibeGallerySection.vue'
</script>

<template>
  <main class="about-view">
    <AboutHeroSection />
    <StorySection />
    <VibeGallerySection />
  </main>
</template>

<style scoped>
.about-view {
  color: #2b1810;
}
</style>
