<script setup lang="ts">
const categories = [
  { name: 'Specialty Buns', href: '#buns' },
  { name: 'Snacks & Sides', href: '#sides' },
  { name: 'Coffee & Drinks', href: '#beverages' },
]
</script>

<template>
  <section class="menu-hero">
    <div class="menu-hero-content">
      <span class="hero-tag">Beans & Buns Kitchen</span>
      <h1 class="hero-title">Our Handcrafted Menu</h1>
      <p class="hero-subtitle">
        Explore our gourmet hotdog buns baked fresh daily, perfectly paired with artisanal espresso and savory sides.
      </p>

      <!-- Category Navigation Pills -->
      <nav class="category-nav">
        <a
          v-for="cat in categories"
          :key="cat.name"
          :href="cat.href"
          class="category-pill"
        >
          {{ cat.name }}
        </a>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.menu-hero {
  padding: 48px 16px 36px;
  text-align: center;
}

.menu-hero-content {
  max-width: 680px;
  margin: 0 auto;
}

.hero-tag {
  display: inline-block;
  background-color: #f5ebe1;
  color: #c86d27;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 4px 14px;
  border-radius: 9999px;
  margin-bottom: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-title {
  font-size: 2.4rem;
  font-weight: 800;
  color: #2b1810;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.05rem;
  color: #6d5b51;
  line-height: 1.6;
  margin: 0 0 28px;
}

.category-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.category-pill {
  text-decoration: none;
  background-color: #ffffff;
  color: #2b1810;
  border: 1.5px solid #ebdcd0;
  padding: 8px 18px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(43, 24, 16, 0.04);
}

.category-pill:hover {
  background-color: #c86d27;
  color: #ffffff;
  border-color: #c86d27;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(200, 109, 39, 0.25);
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.8rem;
  }
}
</style>
