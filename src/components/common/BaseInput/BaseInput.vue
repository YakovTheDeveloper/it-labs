<template>
    <div class="input-container">
        <input class="input" placeholder="Enter text..." v-bind="attrs" :value="props.modelValue"
            @input="handleChange" />
    </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
const attrs = useAttrs();

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void;
}>()

const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
};
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
    padding: var(--padding-input);
    flex-grow: 1;

    &::placeholder {
        color: var(--color-input-placeholder);
        font-size: 16px;
    }
}
</style>