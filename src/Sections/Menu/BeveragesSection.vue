<script setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'

const beverages = [
  {
    id: 1,
    title: 'Signature Iced Cold Brew',
    description: 'Slow-steeped for 18 hours using premium Arabica beans, yielding a bold, smooth, and naturally sweet brew.',
    price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Spanish Latte (Hot / Iced)',
    description: 'Double espresso pulled over condensed milk and creamy whole milk for a rich, silky indulgence.',
    price: 135,
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Classic Americano',
    description: 'Freshly pulled rich espresso balanced with purified water. Crisp, fragrant, and energizing.',
    price: 95,
    imageUrl: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Peach Citrus Fruit Tea',
    description: 'Handcrafted black tea infused with sweet peach purée, fresh calamansi citrus, and mint sprigs.',
    price: 115,
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
  },
]
</script>

<template>
  <section id="beverages" class="menu-section">
    <div class="section-header">
      <h2 class="section-title">Coffee & Drinks</h2>
      <p class="section-description">
        Specialty roasted coffees, slow-steeped cold brews, and thirst-quenching artisan teas.
      </p>
    </div>

    <div class="items-grid">
      <ItemCard
        v-for="item in beverages"
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
