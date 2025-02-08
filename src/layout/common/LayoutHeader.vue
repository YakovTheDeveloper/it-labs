<template>
    <header class="header">
        <img :src="Logo" alt="Logo" class="logo" />
        <slot></slot>
    </header>
</template>

<script setup lang="ts">
import Logo from '@/assets/logo.svg'
</script>

<style scoped>
.header {
    display: flex;
}

.logo {
    margin-right: 32px;
}
</style>