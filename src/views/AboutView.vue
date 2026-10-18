
<template>
  <section class="about" id="about">

    <!-- Hero Section -->
    <div class="hero">
      <img class="logo" src="@/assets/photos/bnblogo.jpg" alt="Beans and Buns logo" />

      <h1>Beans &amp; Buns</h1>
      <p>Brewed with love, baked for happiness.</p>
      <img class="front" src="@/assets/photos/MAINFRONT.jpg" alt="FRONT" />
    </div>

    <!-- Our Story -->
    <div class="story">
      <h2>Our story</h2>
      <p>
        Beans and Buns is a cozy coffee shop in Iloilo City where
        great coffee meets freshly baked goodness. Come by (infront CPU) to catch
        up with friends, take a study break, or enjoy a quiet moment.
      </p>
    </div>

    <!-- Welcome Section -->
    <div class="welcome">
      <h2>Your favorite little pause in the day.</h2>
      <p>Come in, settle down, and stay awhile.</p>
    </div>

    <!-- 2x2 Picture Grid -->
    <div class="features">

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

    </div>

  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #2b1810;
}

/* Hero Section */
.hero {
  grid-column: 1 / 3;
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

.hero p {
  position: relative;
  z-index: 1;
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

.hero .logo {
  width: 100px;
  border-radius: 25%;
  z-index: 1;
}

.hero h1 {
  font-size: 48px;
  margin: 12px 0;
  z-index: 1;
}

/* Story and Welcome */
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
}

/* Picture Grid */
.features {
  grid-column: 1 / 3;
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

/* Text on Picture */
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

/* Mobile Layout */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 32px;
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
