<script setup lang="ts">
defineProps<{
  title: string
  description: string
  price: number | string
  imageUrl?: string
}>()
</script>

<template>
  <div class="item-card">
    <img v-if="imageUrl" :src="imageUrl" :alt="title" class="item-image" />
    <h3 class="item-title">{{ title }}</h3>
    <p class="item-description">{{ description }}</p>
    <p class="item-price">₱{{ price }}</p>
  </div>
</template>

<style scoped>
.item-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

.item-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
}

.item-title {
  margin: 0 0 8px;
}

.item-description {
  margin: 0 0 8px;
  color: #555;
}

.item-price {
  margin: 0;
  font-weight: bold;
}
</style>
