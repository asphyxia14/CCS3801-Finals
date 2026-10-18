<script setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'

const sides = [
  {
    id: 1,
    title: 'Crispy Chicken Pops',
    description: 'Golden bite-sized tender chicken pieces tossed in special paprika seasoning, served with garlic dip.',
    price: 110,
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Seasoned Crinkle Fries',
    description: 'Crispy crinkle-cut fries seasoned with sea salt, rosemary, and smoked herbs.',
    price: 85,
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Street Beef Tacos (2 pcs)',
    description: 'Warm soft tortillas stuffed with seasoned shredded beef, fresh pico de gallo, and zesty lime crema.',
    price: 125,
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Loaded Cheesy Nachos',
    description: 'Crispy corn tortilla chips blanketed in warm queso, sliced jalapeños, and fresh salsa.',
    price: 115,
    imageUrl: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80',
  },
]
</script>

<template>
  <section id="sides" class="menu-section">
    <div class="section-header">
      <h2 class="section-title">Snacks & Sides</h2>
      <p class="section-description">
        Crispy, savory favorites made to share or enjoy as the perfect companion to your meal.
      </p>
    </div>

    <div class="items-grid">
      <ItemCard
        v-for="item in sides"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :image-url="item.imageUrl"
      />
    </div>
  </section>
</template>

<style scoped>
.menu-section {
  padding: 40px 16px;
  scroll-margin-top: 40px;
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
