<template>
    <button :class="baseClasses">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    isActive: boolean
}>(), {
    isActive: false
})

const baseClasses = computed(() => ([
    'tab',
    props.isActive && 'active'
]))
</script>

<style scoped>
.tab {
    color: var(--color-text-secondary);
    padding: 12px 20px;
    font-size: 25px;

    &:not(.active):hover {
        opacity: 0.8;
    }
}

.active {
    color: var(--color-text-inversed);
    background-color: var(--bg-color-tab-active);
    border-radius: 20px;
    cursor: auto;
}
</style>