<script setup lang="ts"></script>

<template>
  <section class="story-container">
    <div class="story">
      <h2>Our story</h2>
      <p>
        Beans and Buns is a cozy coffee shop in Iloilo City where
        great coffee meets freshly baked goodness. Come by (infront CPU) to catch
        up with friends, take a study break, or enjoy a quiet moment.
      </p>
    </div>

    <div class="welcome">
      <h2>Your favorite little pause in the day.</h2>
      <p>Come in, settle down, and stay awhile.</p>
    </div>
  </section>
</template>

<style scoped>
.story-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.story,
.welcome {
  padding: 30px;
}

.story {
  background: #2b1810;
  color: white;
}

.welcome {
  background: #f5ebe1;
  color: #2b1810;
}

.story h2,
.welcome h2 {
  margin: 0 0 12px;
}

.story p,
.welcome p {
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .story-container {
    grid-template-columns: 1fr;
  }

  .story,
  .welcome {
    padding: 16px;
  }

  .story h2,
  .welcome h2 {
    font-size: 16px;
  }

  .story p,
  .welcome p {
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>
