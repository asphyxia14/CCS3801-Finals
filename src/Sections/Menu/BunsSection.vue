<script setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'
</script>

<template>
  <section id="buns" class="menu-section">
    <div class="section-header">
      <h2 class="section-title">Specialty Buns</h2>
      <p class="section-description">
        Our signature gourmet hotdog buns, freshly assembled with hearty fillings and premium ingredients.
      </p>
    </div>

    <!-- Hardcoded item cards directly in template -->
    <div class="items-grid">
      <ItemCard
        title="Mexican Beef Bun"
        description="Fresh bun loaded with seasoned ground beef, melted cheddar cheese, sliced jalapeños, and smoky sauce."
        price="145"
        image-url="https://images.unsplash.com/photo-1627054234551-789a74a441b4?auto=format&fit=crop&w=600&q=80"
      />

      <ItemCard
        title="Cheesy Garlic Onion Bun"
        description="Caramelized sweet onions, melted mozzarella, garlic butter spread, and house-made herb mayo."
        price="130"
        image-url="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80"
      />

      <ItemCard
        title="Classic Chili Con Carne Bun"
        description="Slow-simmered smoky chili con carne topped with grated cheddar cheese and a tangy yellow mustard drizzle."
        price="135"
        image-url="https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80"
      />

      <ItemCard
        title="Bacon & Melted Cheddar Bun"
        description="Smoked bacon strips, melted sharp cheddar cheese, sweet relish, and warm toasted brioche bun."
        price="150"
        image-url="https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80"
      />
    </div>
  </section>
</template>

<style scoped>
.menu-section {
  padding: 40px 16px;
  scroll-margin-top: 80px;
}

.section-header {
  margin-bottom: 28px;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #2b1810;
  margin: 0 0 8px;
}

.section-description {
  font-size: 1rem;
  color: #6d5b51;
  margin: 0;
  line-height: 1.5;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}
</style>
