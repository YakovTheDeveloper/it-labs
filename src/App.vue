<script setup lang="ts">
import ModalRoot from '@/components/Modal/ModalRoot.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
</script>

<template>
  <main>
    <home-view />
    <modal-root />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-grow: 1;
  padding: 24px 50px 40px;
}
</style>
