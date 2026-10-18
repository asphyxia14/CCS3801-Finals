<template>
  <nav class="navbar">
    <div class="nav-brand">
      <h1>Kopiiko</h1>
    </div>
    <ul class="nav-menu">
      <li class="nav-item">
        <a href="/home" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="/menu" class="nav-link">Menu</a>
      </li>
      <li class="nav-item">
        <a href="/about" class="nav-link">About</a>
      </li>
      <li class="nav-item">
        <a href="/contact" class="nav-link">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navbar {
  background-color: #5d4037;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h1 {
  color: #d7ccc8;
  margin: 0;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #d7ccc8;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  color: #bcaaa4;
}
</style>