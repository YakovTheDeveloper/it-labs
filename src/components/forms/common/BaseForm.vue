<template>
    <form class="form">
        <slot></slot>
    </form>
</template>

<script setup lang="ts">

</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 771px;
    gap: 48px;
}
</style>