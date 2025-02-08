<template>
    <button :class="baseClasses">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonVariant } from './types';

const props = withDefaults(defineProps<{
    variant?: ButtonVariant
}>(), {
    variant: 'primary'
});

const baseClasses = computed(() => ([
    'button',
    props.variant,
]))
</script>

<style scoped>
.button {
    box-shadow: var(--box-shadow-button);
    border-top-right-radius: 11px 5px;
    border-top-left-radius: 11px 5px;
    border-bottom-right-radius: 11px 5px;
    border-bottom-left-radius: 11px 5px;
    min-width: 273px;
}

.primary {
    padding: 13px 19px;
    background-color: var(--bg-color-button-primary);
}

.secondary {
    background-color: var(--bg-color-button-secondary);
}

.ghost {
    background-color: transparent;
}
</style>