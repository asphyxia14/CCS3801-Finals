<script setup lang="ts">
import ReviewCard from '@/components/ReviewCard.vue'
</script>

<template>
  <main class="reviews-page">
    <div class="banner-wrapper">
      <img
        src="@/assets/photos/IMG_9952.JPG"
        alt="Beans & Buns Cafe Interior"
        class="banner-image"
      />
      <div class="banner-overlay">
        <h1 class="banner-title">Community Love</h1>
        <p class="banner-subtitle">Real experiences from our Beans & Buns regulars</p>
      </div>
    </div>

    <section class="summary-section">
      <div class="summary-card">
        <div class="summary-score-group">
          <span class="summary-number">4.8</span>
          <span class="summary-star">★</span>
        </div>
        <div class="summary-details">
          <p class="summary-title">Customer Rating</p>
          <p class="summary-meta">Based on reviews from local coffee lovers</p>
        </div>
      </div>
    </section>

    <section class="reviews-section">
      <div class="reviews-grid">
        <ReviewCard author="Francyn Pe" rating="5" comment="Perfect." />

        <ReviewCard author="Matthew Sto Tomas" rating="5" comment="Good coffee." />

        <ReviewCard author="Alyssa Tan" rating="4" comment="Nice place to study." />

        <ReviewCard author="Deejay Israel" rating="5" comment="Namit ah" />
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

.reviews-section {
  margin-top: 16px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

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
