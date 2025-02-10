<template>
    <p :class="baseClasses">
        <slot></slot>
    </p>
</template>

<script setup lang="ts">
import type { TypographyProps } from './types';
import { computed } from 'vue';

const props = withDefaults(defineProps<TypographyProps>(), {
    color: 'primary',
    variant: 'body1',
    fontFamily: 'primary'
})

const baseClasses = computed(() => ([
    `color-${props.color}`,
    `font-family-${props.fontFamily}`,
    props.variant,
]))
</script>

<style scoped>
.body1 {
    font-size: 16px;
}

.body2 {
    font-size: 24px;
}

.table-heading {
    font-size: 20px;
    font-weight: 600;
}

.table-content {
    font-size: 30px;
}

.label1 {
    font-size: 30px;
    font-weight: 700;
}

.label2 {
    font-size: 32px;
    font-weight: 600;
}

.color-primary {
    color: var(--color-text);
}

.color-secondary {
    color: var(--color-text-secondary);
}

.color-inversed {
    color: var(--color-text-inversed);
}

.color-success {
    color: var(--color-success);
}

.color-danger {
    color: var(--color-danger);
}

.font-family-primary {
    font-family: 'Open Sans', sans-serif;
}

.font-family-secondary {
    font-family: 'Roboto', sans-serif;
}
</style>