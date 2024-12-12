<script setup lang="ts">
import { RouterView } from 'vue-router';
import Menu from './components/Menu.vue';
</script>

<template>
  <div class="container">
    <Menu />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
