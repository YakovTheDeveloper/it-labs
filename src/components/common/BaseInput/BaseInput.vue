<template>
    <div class="input-container">
        <input class="input" placeholder="Enter text..." v-bind="attrs" />
    </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
const attrs = useAttrs();
</script>

<style scoped>
.input-container {
    display: flex;
    box-shadow: var(--box-shadow-input);
    border-top-right-radius: 3px 4px;
    border-top-left-radius: 3px 4px;
    border-bottom-right-radius: 3px 4px;
    border-bottom-left-radius: 3px 4px;
}

.input {
    padding: 17px 19px;
    flex-grow: 1;

    &::placeholder {
        color: var(--color-input-placeholder);
    }
}
</style>