<script setup lang="ts"></script>

<template>
  <section class="features">
    <div class="feature">
      <img src="@/assets/photos/insidebnb.JPG" alt="Cafe interior" />
      <div class="feature-text">
        <h2>Take a look inside</h2>
        <p>Find your new favorite brew.</p>
      </div>
    </div>

    <div class="feature">
      <img src="@/assets/photos/sidetable.JPG" alt="Cafe table" />
      <div class="feature-text">
        <h2>Freshly baked happiness</h2>
        <p>Pair your coffee with something delicious.</p>
      </div>
    </div>

    <div class="feature">
      <img src="@/assets/photos/store.JPG" alt="Cafe storefront" />
      <div class="feature-text">
        <h2>Enter our cozy space</h2>
        <p>A friendly space for friends and study breaks.</p>
      </div>
    </div>

    <div class="feature">
      <img src="@/assets/photos/picturewall.JPG" alt="Cafe picture wall" />
      <div class="feature-text">
        <h2>Wall of Memories</h2>
        <p>A place to make memories inside the cafe.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.feature {
  position: relative;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  overflow: hidden;
  background: #2b1810;
}

.feature img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-text {
  position: relative;
  padding: 20px;
  background: rgba(35, 21, 13, 0.6);
}

.feature-text h2 {
  margin: 0 0 8px;
}

.feature-text p {
  margin: 0;
}

@media (max-width: 600px) {
  .features {
    grid-template-columns: 1fr 1fr;
  }

  .feature {
    height: 200px;
  }

  .feature-text {
    padding: 10px;
  }

  .feature-text h2 {
    font-size: 15px;
  }

  .feature-text p {
    font-size: 12px;
  }
}
</style>
