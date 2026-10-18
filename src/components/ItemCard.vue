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
    <div v-if="imageUrl" class="item-image-wrapper">
      <img :src="imageUrl" :alt="title" class="item-image" />
    </div>
    <div class="item-body">
      <div class="item-header">
        <h3 class="item-title">{{ title }}</h3>
        <span class="item-price">₱{{ price }}</span>
      </div>
      <p class="item-description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  background: #ffffff;
  border: 1px solid #ebdcd0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(43, 24, 16, 0.05);
  display: flex;
  flex-direction: column;
}

.item-image-wrapper {
  width: 100%;
  height: 180px;
  background-color: #f7f1ea;
  overflow: hidden;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.item-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #2b1810;
}

.item-price {
  font-weight: 700;
  font-size: 1.05rem;
  color: #c86d27;
  white-space: nowrap;
}

.item-description {
  margin: 0;
  color: #6d5b51;
  font-size: 0.9rem;
  line-height: 1.45;
}
</style>
