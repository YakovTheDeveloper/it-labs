<template>
    <div class="input-container">
        <input class="input" placeholder="Enter text..." />
    </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
.input-container {
    box-shadow: var(--box-shadow-input);
    padding: 15px 19px;
    border-top-right-radius: 3px 4px;
    border-top-left-radius: 3px 4px;
    border-bottom-right-radius: 3px 4px;
    border-bottom-left-radius: 3px 4px;
}

.input {


    &::placeholder {
        color: var(--color-input-placeholder);
    }
}
</style>