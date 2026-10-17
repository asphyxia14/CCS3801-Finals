<script setup lang="ts">
defineProps<{
  author: string
  rating: number | string
  comment: string
}>()
</script>

<template>
  <div class="review-card">
    <h3 class="author">{{ author }}</h3>
    <p class="rating">Rating: {{ rating }}/5</p>
    <p class="comment">{{ comment }}</p>
  </div>
</template>

<style scoped>
.review-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

.author {
  margin: 0 0 8px;
}

.rating {
  margin: 0 0 8px;
  font-weight: bold;
}

.comment {
  margin: 0;
}
</style>
