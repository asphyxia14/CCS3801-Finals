```vue
<template>
  <section class="about" id="about">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-text">
        <h1>Beans &amp; Buns</h1>
        <p>Brewed with love, baked for happiness.</p>
      </div>
    </div>

    <!-- Story and Welcome -->
    <div class="story">
      <h2>Our story</h2>
      <p>
        Beans and Buns is a cozy coffee shop in Iloilo City where great coffee meets freshly baked
        goodness. Come by to catch up with friends, take a study break, or enjoy a quiet moment.
      </p>
    </div>

    <div class="welcome">
      <h2>Your favorite little pause in the day.</h2>
      <p>Come in, settle down, and stay awhile.</p>
    </div>

    <!-- 2x2 Feature Grid -->
    <div class="feature coffee">
      <h2>Coffee worth slowing down for</h2>
      <p>Find your new favorite brew, made for moments big and small.</p>
    </div>

    <div class="feature bakes">
      <h2>Freshly baked happiness</h2>
      <p>Pair your coffee with something delicious from our bakery.</p>
    </div>

    <div class="feature welcome-iloilo">
      <h2>A warm welcome in Iloilo</h2>
      <p>A friendly space for friends, study breaks, and quiet moments.</p>
    </div>

    <div class="feature everyday">
      <h2>Made for your everyday</h2>
      <p>Drop by for a quick treat or make yourself at home for a while.</p>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  width: 100%;
  color: #2b1810;
}

/* Hero */
.hero {
  grid-column: 1 / -1;
  min-height: 400px;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #23150d;
  color: white;
  text-align: center;
}

.hero-text {
  padding: 20px;
}

.hero h1 {
  margin: 0 0 12px;
  font-size: 48px;
}

.hero p {
  margin: 0;
}

/* Story and Welcome */
.story,
.welcome {
  min-width: 0;
  min-height: 250px;
  padding: 30px;
  box-sizing: border-box;
}

.story {
  background: #2b1810;
  color: white;
}

.welcome {
  background: #f5ebe1;
}

/* 2x2 Feature Grid */
.feature {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 4 / 3;
  min-width: 0;
  padding: 30px;
  box-sizing: border-box;
}

.coffee,
.everyday {
  background: #78964f;
  color: white;
}

.bakes,
.welcome-iloilo {
  background: #b4d77b;
  color: #2b1810;
}

/* Tablet */
@media (max-width: 900px) {
  .hero {
    height: 50vh;
    min-height: 350px;
  }

  .story,
  .welcome,
  .feature {
    padding: 24px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .hero {
    height: 45vh;
    min-height: 280px;
  }

  .hero h1 {
    font-size: 32px;
  }

  .hero p {
    font-size: 14px;
  }

  .story,
  .welcome {
    min-height: 200px;
    padding: 16px;
  }

  .story h2,
  .welcome h2,
  .feature h2 {
    font-size: 16px;
  }

  .story p,
  .welcome p,
  .feature p {
    font-size: 12px;
    line-height: 1.6;
  }

  .feature {
    aspect-ratio: 4 / 3;
    padding: 12px;
  }
}
</style>
```
