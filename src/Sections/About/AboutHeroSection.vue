<script setup lang="ts"></script>

<template>
  <section class="about-hero">
    <img class="logo" src="@/assets/photos/bnblogo.jpg" alt="Beans and Buns logo" />
    <h1>Beans &amp; Buns</h1>
    <p>Brewed with love, baked for happiness.</p>
    <img class="front" src="@/assets/photos/MAINFRONT.jpg" alt="FRONT" />
  </section>
</template>

<style scoped>
.about-hero {
  height: 65vh;
  background: #2b1810;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.about-hero p {
  position: relative;
  z-index: 1;
  margin: 0;
}

.front {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 0;
}

.logo {
  width: 100px;
  border-radius: 25%;
  z-index: 1;
}

.about-hero h1 {
  font-size: 48px;
  margin: 12px 0;
  z-index: 1;
}

@media (max-width: 600px) {
  .about-hero h1 {
    font-size: 32px;
  }
}
</style>
