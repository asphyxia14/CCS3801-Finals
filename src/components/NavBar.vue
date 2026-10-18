<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPage(path: string) {
  router.push(path)
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand" @click="goToPage('/home')">
      <img src="../assets/photos/b&b.jpg" alt="B&B Logo" class="store-logo" />
    </div>

    <ul class="nav-menu">
      <li class="nav-item">
        <button type="button" class="nav-link" @click="goToPage('/home')">
          Home
        </button>
      </li>
      <li class="nav-item">
        <button type="button" class="nav-link" @click="goToPage('/menu')">
          Menu
        </button>
      </li>
      <li class="nav-item">
        <button type="button" class="nav-link" @click="goToPage('/about')">
          About
        </button>
      </li>
      <li class="nav-item">
        <button type="button" class="nav-link" @click="goToPage('/reviews')">
          Reviews
        </button>
      </li>
      <li class="nav-item">
        <button type="button" class="nav-link" @click="goToPage('/contact')">
          Contact
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #5d4037;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.nav-brand {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.nav-brand img {
  height: 48px;
  width: auto;
  border-radius: 8px;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
}

.nav-link {
  background: none;
  border: none;
  color: #d7ccc8;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

@media (max-width: 640px) {
  .navbar {
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .nav-menu {
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 6px 10px;
  }
}
</style>
