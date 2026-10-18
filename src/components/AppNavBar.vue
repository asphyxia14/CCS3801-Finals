<!-- <template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/image/atelier-logo.png" alt="" />
    </div>
    <div class="menu">
      <a @click="scrollToSection('home')">Home</a>
      <div class="dropdown">
        <RouterLink to="/about">About</RouterLink>
        <div class="submenu">
          <a @click="scrollToSection('program')">Program</a>
          <a @click="scrollToSection('products')">Products</a>
        </div>
      </div>
      <RouterLink to="/store">Store</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
    </div>
  </div>
</template>

<script setup>
// define Emits(['navigate'])

import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToSection = async (id) => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/')
  }

  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  })
}
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  .logo {
    display: flex;
    align-items: center;
    padding: 20px;

    img {
      width: 120px;
    }
  }

  .menu {
    display: flex;
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 20px;
    gap: 20px;
    cursor: pointer;
    color: darkblue;

    a {
      text-decoration: none;
      color: darkblue;
    }
  }
}

.dropdown {
  position: relative;

  .submenu {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 50%;
    width: 180px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 5px;
  }

  a {
    padding: 10px;
    color: darkblue;
  }
}

.dropdown:hover .submenu,
.dropdown:focus-within .submenu {
  display: flex;
}

@media (max-width: 768px) {
  .navbar {
    height: 150px;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
    gap: 10px;
  }

  .logo {
    justify-content: center;
    padding: 0;
  }

  .menu {
    font-size: 1em;
    padding: 0;
    gap: 16px;
  }

  .dropdown .submenu {
    width: 160px;
  }

  .dropdown .submenu a {
    padding: 12px 10px;
  }
}
</style> -->
