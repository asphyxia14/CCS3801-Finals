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
  <main class="reviews-page">
    <!-- Top Hero Banner with Image -->
    <div class="banner-wrapper">
      <img
        src="/src/assets/photos/IMG_9952.JPG"
        alt="Beans & Buns Cafe Interior"
        class="banner-image"
      />
      <div class="banner-overlay">
        <h1 class="banner-title">Community Love</h1>
        <p class="banner-subtitle">Real experiences from our Beans & Buns regulars</p>
      </div>
    </div>

    <!-- Rating Summary Badge -->
    <section class="summary-section">
      <div class="summary-card">
        <div class="summary-score-group">
          <span class="summary-number">4.8</span>
          <span class="summary-star">★</span>
        </div>
        <div class="summary-details">
          <p class="summary-title">Customer Rating</p>
          <p class="summary-meta">Based on actual people,</p>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="reviews-section">
      <div class="reviews-grid">
        <ReviewCard
          v-for="item in reviews"
          :key="item.id"
          :author="item.author"
          :rating="item.rating"
          :comment="item.comment"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.reviews-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

/* BANNER */
.banner-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(43, 24, 16, 0.12);
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(35, 21, 13, 0.85) 0%,
    rgba(35, 21, 13, 0.3) 60%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  color: #ffffff;
}

.banner-title {
  margin: 0 0 6px;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.banner-subtitle {
  margin: 0;
  font-size: 1.05rem;
  color: #f5ebe1;
}

/* SUMMARY BADGE */
.summary-section {
  display: flex;
  justify-content: center;
  margin: -36px 0 36px;
  position: relative;
  z-index: 2;
  padding: 0 16px;
}

.summary-card {
  background: #ffffff;
  border: 1px solid #ebdcd0;
  border-radius: 14px;
  padding: 16px 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 6px 20px rgba(43, 24, 16, 0.08);
}

.summary-score-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

.summary-number {
  font-size: 2.2rem;
  font-weight: 800;
  color: #2b1810;
  line-height: 1;
}

.summary-star {
  font-size: 1.8rem;
  color: #f59e0b;
  line-height: 1;
}

.summary-details {
  border-left: 2px solid #ebdcd0;
  padding-left: 18px;
}

.summary-title {
  margin: 0 0 4px;
  font-weight: 700;
  color: #2b1810;
  font-size: 1rem;
}

.summary-meta {
  margin: 0;
  color: #7d6b60;
  font-size: 0.85rem;
}

/* REVIEWS GRID */
.reviews-section {
  margin-top: 16px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

/* RESPONSIVE */
@media (max-width: 600px) {
  .banner-wrapper {
    height: 220px;
  }

  .banner-title {
    font-size: 1.6rem;
  }

  .summary-card {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }

  .summary-details {
    border-left: none;
    border-top: 1px solid #ebdcd0;
    padding-left: 0;
    padding-top: 8px;
  }
}
</style>
