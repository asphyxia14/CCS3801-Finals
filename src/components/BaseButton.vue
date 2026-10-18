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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  background-color: #c86d27;
  color: #ffffff;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  line-height: 1.2;
}
</style>
