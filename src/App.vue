<script setup lang="ts">
import PersonModal from '@/components/Modal/PersonModal/PersonModal.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
</script>

<template>
  <main>
    <home-view />
    <PersonModal />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-grow: 1;
  padding: 24px 50px 50px;
}
</style>
