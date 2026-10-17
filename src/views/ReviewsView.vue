<script setup lang="ts">
import ReviewCard from '@/components/ReviewCard.vue'

// Sample reviews data
const reviews = [
  {
    id: 1,
    author: 'Maria Santos',
    rating: 5,
    comment: 'The Mexican Beef Bun is a must-try! Perfectly seasoned and fresh.',
  },
  {
    id: 2,
    author: 'Juan Dela Cruz',
    rating: 5,
    comment: 'Best cold brew in town. Cozy atmosphere and friendly staff.',
  },
  {
    id: 3,
    author: 'Alyssa Tan',
    rating: 4,
    comment: 'Love the chicken pops and fries combo. Great place to study.',
  },
  {
    id: 4,
    author: 'Carlo Mendoza',
    rating: 5,
    comment: 'Affogato is amazing. The balance of espresso and sweetness is spot on!',
  },
]
</script>

<template>
  <main class="reviews-view">
    <!-- Wide Top Banner Picture -->
    <div class="banner-container">
      <img src="" alt="Beans & Buns Cafe Interior" class="banner-image" />
    </div>

    <div class="reviews-content">
      <!-- Header / Rating Summary -->
      <header class="reviews-header">
        <h1>Customer Reviews</h1>
        <div class="summary-box">
          <p class="summary-score">4.8 / 5</p>
          <p class="summary-text">Based on 120+ customer reviews</p>
        </div>
      </header>

      <!-- Reviews Grid -->
      <section class="reviews-list">
        <ReviewCard
          v-for="item in reviews"
          :key="item.id"
          :author="item.author"
          :rating="item.rating"
          :comment="item.comment"
        />
      </section>
    </div>
  </main>
</template>

<style scoped>
.reviews-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px 40px;
}

.banner-container {
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 12px;
  margin-top: 16px;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.reviews-content {
  margin-top: 24px;
}

.reviews-header {
  text-align: center;
  margin-bottom: 32px;
}

.reviews-header h1 {
  margin: 0 0 12px;
}

.summary-box {
  display: inline-block;
  border: 1px solid #ccc;
  padding: 12px 24px;
  border-radius: 8px;
}

.summary-score {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.summary-text {
  margin: 4px 0 0;
  color: #666;
  font-size: 0.9rem;
}

.reviews-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
</style>
