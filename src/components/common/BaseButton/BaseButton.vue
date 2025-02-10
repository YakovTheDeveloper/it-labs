<template>
    <button :class="baseClasses" type="button" @click="handleClick" @focus="isFocused = true" @blur="isFocused = false">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ButtonVariant } from './types';

const props = withDefaults(defineProps<{
    variant?: ButtonVariant
}>(), {
    variant: 'primary'
});

const isFocused = ref(false);

const emit = defineEmits(['click']);

const baseClasses = computed(() => ([
    'button',
    props.variant,
]));

const handleClick = () => emit('click');

</script>

<style scoped>
.button {
    box-shadow: var(--box-shadow-button);
    border-top-right-radius: 11px 5px;
    border-top-left-radius: 11px 5px;
    border-bottom-right-radius: 11px 5px;
    border-bottom-left-radius: 11px 5px;
    padding: 13px 19px;
    min-width: 273px;

    transition: var(--transition-box-shadow);

    &:hover {
        box-shadow: none;
    }

    &:focus,
    &:active {
        outline: 2px solid var(--outline-color);
        outline-offset: 2px;
    }
}

.primary {
    background-color: var(--bg-color-button-primary);
}

.secondary {
    background-color: var(--bg-color-button-secondary);
}

.ghost {
    background-color: transparent;
}
</style>