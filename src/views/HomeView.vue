<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import StoreHoursBannerSection from '@/Sections/Home/StoreHoursBannerSection.vue';


const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>



<template>
  <div class="home">
    <NavBar @navigate="scrollToSection" />
    <StoreHoursBannerSection />
  </div>
</template>

