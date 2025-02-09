<template>
    <div class="select-container" ref="containerRef">
        <div @click="toggleOpen">
            {{ heading }}
        </div>
        <!-- <BaseInput placeholder="" :value="heading" class='heading-input' /> -->
        <ul v-if="isOpen" class="dropdown">
            <li v-for="({ label, value }) in props.options" :key="value" class="dropdown-option"
                @click.stop="onSelectHandler(value)">
                {{ label }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/common/BaseInput/BaseInput.vue';
import type { SelectOption } from '@/components/common/BaseSelect/types';
import { useOutsideClick } from '@/composables/useOutsideClick';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
    options: SelectOption[]
    value: string
    onSelect: (value: string) => void
}>()

const containerRef = ref<HTMLElement | null>(null);
const isOpen = ref(false)

const toggleOpen = () => {
    isOpen.value = !isOpen.value
}
const close = () => {
    isOpen.value = false
}

const test = () => alert('wtof')


const onSelectHandler = (value: string) => {
    props.onSelect(value)
    close()
}

const getOptionLabelByValue = (value: string) => {
    return props.options.find((option) => option.value === value)?.label || ''
}

const heading = computed(() => props.value ? getOptionLabelByValue(props.value) : 'Выбрать')

watch(isOpen, (value) => console.log(value))

useOutsideClick(containerRef, close)

</script>

<style scoped>
.heading-input {
    /* user-select: none; */
    /* pointer-events: none; */

    &:disabled {
        color: var(--color-text);
    }
}

.select-container {
    position: relative;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #ccc;
    background: #fff;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
}

.dropdown-option {
    padding: 17px 19px;
    border-bottom: 1px solid var(--border-color-select-option);
    cursor: pointer;

    &:hover {
        background-color: var(--bg-color-select-option);
    }
}
</style>