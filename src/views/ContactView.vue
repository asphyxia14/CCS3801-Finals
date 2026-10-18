<template>
  <section class="contact">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you!</p>

    <div class="cards">
      <div class="card">
        <h2>Email</h2>
        <a href="mailto:hello@beansandbuns.com">hello@beansandbuns.com</a>
      </div>

      <div class="card">
        <h2>Phone</h2>
        <p>0968 381 8247</p>
      </div>

      <div class="card">
        <h2>Store Location</h2>
        <p>I402-C Lopez Jaena St, Jaro, Iloilo City, 5000 Iloilo</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  min-height: 30vh;
  padding: 20px;
  background-image: url('@/assets/photos/IMG_9954.JPG');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  height: 50%;
  margin: 10px auto;
  max-width: 1000px;
}

.card {
  background: white;
  color: #2b1810;
  padding: 5px;
}

.card a {
  color: #2b1810;
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
