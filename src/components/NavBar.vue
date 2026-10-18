<template>
    <div class="menu">
        <div>
            <div class="menu-items">
                <a @click="emit"('navigate', 'home')">Home</a>
                <a @click="emit"('navigate', 'about')">About</a>
                <a @click="emit"('navigate', 'menu')">Menu</a>
                <a @click="emit"('navigate', 'contact')">Contact</a>
                <a @click="emit"('navigate', 'reviews')">Reviews</a>
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(['navigate']);
</script>
<style scoped>
    
    .menu {
        position: fixed;
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: 30px;
      padding: 0 20px;
    }
</style>