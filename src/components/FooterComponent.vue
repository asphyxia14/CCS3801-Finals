<script setup lang="ts"></script>

<template>
  <footer class="footer-component">
    <div class="footer-container">
      <div class="footer-col brand-col">
        <h3 class="footer-brand">Beans & Buns</h3>
        <p class="brand-text">
          Fresh gourmet hotdog buns & specialty handcrafted coffee. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

      <div class="footer-col">
        <h4 class="col-title">Hours & Location</h4>
        <p>Mon - Sun: 8:00 AM - 10:00 PM</p>
        <p>Lorem ipsum street, City, Country</p>
      </div>

      <div class="footer-col">
        <h4 class="col-title">Contact</h4>
        <p>Email: hello@beansandbuns.com</p>
        <p>Phone: +1 (234) 567-890</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Beans & Buns. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-component {
  background-color: #23150d;
  color: #d6c8bd;
  border-top: 4px solid #c86d27;
  padding: 48px 24px 24px;
  margin-top: 56px;
}

.footer-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 32px;
}

.footer-col {
  flex: 1;
  min-width: 220px;
}

.footer-brand {
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.brand-text {
  color: #bfaea2;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

.col-title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 12px;
  position: relative;
}

.footer-col p {
  margin: 0 0 8px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #bfaea2;
}

.footer-bottom {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  font-size: 0.85rem;
  color: #8c786d;
}
</style>
