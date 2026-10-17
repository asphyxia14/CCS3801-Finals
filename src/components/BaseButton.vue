<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  text: string
  to?: string
}>()
</script>

<template>
  <RouterLink v-if="to" :to="to" class="base-button">
    {{ text }}
  </RouterLink>
  <button v-else class="base-button">
    {{ text }}
  </button>
</template>

<style scoped>
.base-button {
  display: inline-block;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
