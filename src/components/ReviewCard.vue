<script setup lang="ts">
defineProps<{
  author: string
  rating: number | string
  comment: string
}>()
</script>

<template>
  <div class="review-card">
    <div class="review-header">
      <div class="author-avatar">
        {{ author ? author.charAt(0).toUpperCase() : '?' }}
      </div>
      <div class="author-info">
        <h3 class="author-name">{{ author }}</h3>
        <div class="rating-stars" :aria-label="`Rating ${rating} out of 5`">
          <span
            v-for="star in 5"
            :key="star"
            class="star"
            :class="{ 'star-filled': star <= Number(rating) }"
          >
            ★
          </span>
        </div>
      </div>
    </div>
    <p class="review-comment">"{{ comment }}"</p>
  </div>
</template>

<style scoped>
.review-card {
  background: #ffffff;
  border: 1px solid #ebdcd0;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 4px 14px rgba(43, 24, 16, 0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 42px;
  height: 42px;
  background-color: #f5ebe1;
  color: #c86d27;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.author-name {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #2b1810;
}

.rating-stars {
  display: flex;
  gap: 2px;
  font-size: 1rem;
  line-height: 1;
}

.star {
  color: #e3d7cd;
}

.star-filled {
  color: #f59e0b;
}

.review-comment {
  margin: 0;
  color: #4a3b32;
  font-size: 0.95rem;
  line-height: 1.5;
  font-style: italic;
}
</style>
