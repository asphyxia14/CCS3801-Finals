<script setup lang="ts">
// Static footer - no props needed
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Beans & Buns</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="footer-section">
        <h4>Hours & Location</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Beans & Buns. Lorem ipsum dolor sit amet.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #ccc;
  padding: 32px 16px 16px;
  margin-top: 40px;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-section h3,
.footer-section h4 {
  margin: 0 0 8px;
}

.footer-section p {
  margin: 0;
  color: #555;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #eee;
  padding-top: 16px;
  color: #777;
}
</style>
