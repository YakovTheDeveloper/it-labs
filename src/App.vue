<script setup lang="ts">
import BaseButton from './components/common/BaseButton/BaseButton.vue';
import BaseTypography from './components/common/BaseTypography/BaseTypography.vue';
import BaseInput from './components/common/BaseInput/BaseInput.vue';
</script>

<template>
  <main>
    <base-button variant="primary">
      <base-typography>Hello</base-typography>
    </base-button>
    <base-input />
  </main>
</template>

<style scoped></style>
