<template>
    <section id="Hours" class="store-hours-banner">
    <div class="banner-content">
      <img src="../../assets/photos/b&b.jpg" alt="B&B Logo" class="store-logo" />
      <h2>Store Hours</h2>
      <div class="hours-details">
        <p class="days">Monday - Sunday</p>
        <p class="time">8:00 AM - 8:00 PM</p>
      </div>
      <p class="footer-heading">Brews for
      <br />
      Every Heart</p>
      <p class="footer-text">Every heart deserves a warm coffee that feels like home.</p>
    </div>
  </section>
</template>

<style scoped>
/* Coffee-themed banner container */
.store-hours-banner {
  position: relative;
  background-color: #3e2723; /* fallback color */
  color: #efebe9;
  padding: 80px 20px;
  text-align: center;
  border-top: 8px solid #5d4037;
  border-bottom: 8px solid #5d4037;
  overflow: hidden; /* Ensures the background image doesn't bleed out */
}

/* Translucent background image using a pseudo-element */
.store-hours-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../../assets/photos/kopiiko.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.3; /* This makes the image translucent */
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2; /* Ensures text stays above the background image */
  max-width: 600px;
  margin: 0 auto;
  border: 2px solid #8d6e63;
  padding: 40px;
  border-radius: 15px;
  background-color: rgba(62, 39, 35, 0.7); /* Darker semi-transparent overlay for text readability */
}

.store-logo {
  width: 100px; /* Adjust size of your logo */
  height: auto;
  margin-bottom: 0.5px;
  border-radius: 25%; /* Optional: removes sharp corners if it's a square logo */
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #d7ccc8;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
}


.hours-details {
  background-color: #5d4037; /* Medium Brown background for the box */
  padding: 25px;
  border-radius: 8px;
  display: inline-block;
}

.days {
  font-size: 1.55rem;
  margin: 0;
  color: #d7ccc8;
}

.time {
  font-size: 2rem;
  font-weight: bold;
  margin: 10px 0 0 0;
  color: #ffffff;
}

.footer-heading {
  margin-top: 30px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #bcaaa4;
}

.footer-text {
  margin-top: 25px;
  font-size: 1.1rem;
  font-style: italic;
  color: #bcaaa4;
}

/* Simple hover effect to make it interactive */
.banner-content:hover {
  border-color: #d7ccc8;
  transition: 0.3s;
}
</style>

