<template>
  <section class="featured-container">
    <h2 class="featured-heading">Today's Specials</h2>
    <div class="specials-wrapper">
      <div class="special-card">
        <div class="image-wrapper">
          <img src="../../assets/photos/afogatto.jpg" alt="Affogato" class="special-image" />
        </div>
        <div class="text-box">
          <h3 class="food-name">Specialty Affogato</h3>
          <p class="food-description">
            Rich espresso poured over creamy vanilla gelato for the perfect Italian dessert experience.
          </p>
        </div>
      </div>

      <div class="special-card">
        <div class="image-wrapper">
          <img src="../../assets/photos/quesa.jpg" alt="Quesadilla" class="special-image" />
        </div>
        <div class="text-box">
          <h3 class="food-name">Classic Quesadilla</h3>
          <p class="food-description">
            Toasted tortilla filled with melted cheese and savory ingredients, served with a side of joy.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-container {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.featured-heading {
  text-align: center;
  color: #2b1810;
  margin-bottom: 30px;
  font-size: 2rem;
}

.specials-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-content: center;
}

.special-card {
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(43, 24, 16, 0.05);
  display: flex;
  flex-direction: column;
}

.image-wrapper {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.special-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-box {
  padding: 20px;
  background-color: #fdfaf8;
  border-top: 1px solid #ebdcd0;
  flex: 1;
}

.food-name {
  margin: 0 0 10px 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #2b1810;
}

.food-description {
  margin: 0;
  color: #6d5b51;
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .specials-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
