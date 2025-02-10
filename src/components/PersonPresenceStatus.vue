<template>
    <div :class="baseClasses" />
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = withDefaults(defineProps<{
    isActive: boolean
}>(), {
    isActive: false
})
const baseClasses = computed(() => ([
    'indicator',
    props.isActive && 'active'
]))
</script>

<style scoped>
.indicator {
    background-color: var(--color-danger);
    width: 59px;
    aspect-ratio: 1;
    border-radius: 50%;
}

.active {
    background-color: var(--color-success);
}
</style>