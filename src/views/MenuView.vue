<script setup lang="ts">
import MenuHeroSection from '@/Sections/Menu/MenuHeroSection.vue'
import BunsSection from '@/Sections/Menu/BunsSection.vue'
import SidesSection from '@/Sections/Menu/SidesSection.vue'
import BeveragesSection from '@/Sections/Menu/BeveragesSection.vue'
</script>

<template>
  <main class="menu-view">
    <MenuHeroSection />
    <div class="menu-sections-wrapper">
      <BunsSection />
      <div class="section-divider"></div>
      <SidesSection />
      <div class="section-divider"></div>
      <BeveragesSection />
    </div>
  </main>
</template>

<style scoped>
.menu-view {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 16px 64px;
}

.menu-sections-wrapper {
  display: flex;
  flex-direction: column;
}

.section-divider {
  height: 1px;
  background: radial-gradient(circle, #ebdcd0 0%, transparent 100%);
  margin: 12px 16px;
}
</style>
