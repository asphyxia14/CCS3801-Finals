<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="Hero" class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Buns with a Bite, <br />Coffee with a Soul.</h1>
        <p class="hero-subtitle">
          Discover the perfect pairing of gourmet specialty buns and craft-roasted coffee in the heart of the city.
        </p>

        <div class="hero-actions">
          <RouterLink to="/menu" class="hero-btn primary-btn">
            Explore Menu
          </RouterLink>
          <RouterLink to="/contact" class="hero-btn secondary-btn">
            Visit Us
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 103vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #2b1810;
  /* Hero Image Background */
  background-image: url('../../assets/photos/heroimage.jpg');
  background-size: cover;
  background-position: center;
  /* margin-bottom: 5px; */
}

/* Translucent overlay for text readability, matching ReviewsView style */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(35, 21, 13, 0.4) 0%,
    rgba(35, 21, 13, 0.7) 100%
  );
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  text-align: center;
  margin-bottom: 48px; /* Space below the hero section */
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  color: #ffffff;
}

.hero-title {
  font-size: 50px;
  font-weight: 800; /* Bold as requested */
  line-height: 1.1;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.hero-subtitle {
  font-size: 24px;
  color: #f5ebe1;
  margin-bottom: 48px;
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.2;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Base Button Styles */
.hero-btn {
  padding: 16px 36px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

/* Primary: Cream/Light Theme */
.primary-btn {
  background-color: #f5ebe1;
  color: #2b1810;
}

/* Secondary: Transparent/Glass Theme */
.secondary-btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  backdrop-filter: blur(8px);
  border: 2px solid rgba(245, 235, 225, 0.3);
}

/* Edge Highlight Hover Effect */
.hero-btn:hover {
  transform: translateY(-3px);
  border-color: #ffffff; /* Highlights the edge */
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4), 0 10px 25px rgba(0, 0, 0, 0.3);
}

.primary-btn:hover {
  background-color: #ffffff;
  color: #2b1810;
}

.secondary-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .hero-section {
    min-height: 70vh;
  }
  
  .hero-actions {
    flex-direction: column;
    padding: 0 20px;
  }
  
  .hero-btn {
    width: 100%;
  }
}
</style>
