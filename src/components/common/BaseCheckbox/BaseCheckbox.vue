<template>
    <input type="checkbox" class="checkbox" :checked="props.modelValue" @change="handleChange" />
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: boolean;
}>();

const emit = defineEmits<{
    (event: 'update:modelValue', value: boolean): void;
}>();

const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.checked);
};
</script>

<style scoped>
.checkbox {
    border-radius: 2px;
    border: 2px solid var(--border-color-checkbox);
    width: 34px;
    aspect-ratio: 1;
    accent-color: var(--bg-color-button-primary);
}
</style>